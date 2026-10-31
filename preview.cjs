// Serve the production build locally with security headers, Brotli/Gzip compression, and caching.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const zlib = require('node:zlib');

const root = path.resolve(__dirname, 'dist');
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || '127.0.0.1';

if (!fs.existsSync(path.join(root, 'index.html'))) {
  console.error('Run npm run build before npm run preview.');
  process.exit(1);
}

const realRoot = fs.realpathSync(root);
const types = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.mp4': 'video/mp4',
  '.xml': 'application/xml'
};

const cache = new Map();
const maxCacheBytes = 64 * 1024 * 1024;
let cacheBytes = 0;

const server = http.createServer((req, res) => {
  // Drain request body stream for keep-alive stability
  req.resume();

  // Baseline enterprise security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
  res.setHeader('X-XSS-Protection', '0');

  // HSTS when served over HTTPS or behind TLS terminating proxy
  if (req.socket.encrypted || req.headers['x-forwarded-proto'] === 'https') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }

  try {
    if (!['GET', 'HEAD'].includes(req.method)) {
      res.writeHead(405, { Allow: 'GET, HEAD' });
      return res.end();
    }

    let pathname;
    try {
      pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    } catch {
      res.writeHead(400);
      return res.end();
    }

    const segments = pathname.split(/[\\/]/);
    if (pathname.includes('\0') || segments.some(part => part.startsWith('.') || /[:<>"|?*]/.test(part))) {
      res.writeHead(403);
      return res.end();
    }

    let filename = path.resolve(root, '.' + pathname);
    if (!filename.startsWith(root + path.sep) && filename !== root) {
      res.writeHead(403);
      return res.end();
    }

    if (!fs.existsSync(filename) || !fs.statSync(filename).isFile()) {
      if (pathname.startsWith('/api/') || path.extname(pathname)) {
        res.writeHead(404);
        return res.end('Not found');
      }
      filename = path.join(root, 'index.html');
    }

    // Resolve filesystem links as well as URL paths before reading anything.
    filename = fs.realpathSync(filename);
    if (!filename.startsWith(realRoot + path.sep) && filename !== realRoot) {
      res.writeHead(403);
      return res.end();
    }

    let entry = cache.get(filename);
    if (!entry) {
      const data = fs.readFileSync(filename);
      const ext = path.extname(filename);
      const hashes = ext === '.html'
        ? [...data.toString().matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].map(match => "'sha256-" + crypto.createHash('sha256').update(match[1]).digest('base64') + "'")
        : [];
      const intro = path.basename(filename) === 'logo-reveal.html';
      const csp = [
        "default-src 'self'",
        "script-src 'self' " + (intro ? 'https://cdnjs.cloudflare.com ' : '') + hashes.join(' '),
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https: http://localhost:* http://127.0.0.1:*",
        "font-src 'self' data:",
        "media-src 'self'",
        "connect-src 'self' https: http://localhost:* http://127.0.0.1:*",
        "frame-src 'self' https://maps.google.com https://www.google.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self' https://sliit.lk https://*.sliit.lk mailto:",
        "frame-ancestors 'self'"
      ].join('; ');

      const compressible = /\.(html|js|css|json|svg|txt|webmanifest|xml)$/.test(filename) && data.length > 512;
      let gzip = null;
      let brotli = null;

      if (compressible) {
        gzip = zlib.gzipSync(data, { level: 9 });
        if (typeof zlib.brotliCompressSync === 'function') {
          brotli = zlib.brotliCompressSync(data, {
            params: {
              [zlib.constants.BROTLI_PARAM_QUALITY]: 8
            }
          });
        }
      }

      entry = {
        data,
        csp,
        etag: 'W/"' + crypto.createHash('sha256').update(data).digest('base64url') + '"',
        type: types[ext] || 'application/octet-stream',
        gzip,
        brotli
      };

      const weight = data.length + (entry.gzip?.length || 0) + (entry.brotli?.length || 0);
      if (weight <= maxCacheBytes) {
        if (cacheBytes + weight > maxCacheBytes) {
          cache.clear();
          cacheBytes = 0;
        }
        cache.set(filename, entry);
        cacheBytes += weight;
      }
    }

    res.setHeader('Content-Security-Policy', entry.csp);
    res.setHeader('Content-Type', entry.type + (/^(text\/|application\/json|application\/xml)/.test(entry.type) ? '; charset=utf-8' : ''));
    res.setHeader('Cache-Control', pathname.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'no-cache');
    res.setHeader('ETag', entry.etag);
    res.setHeader('Vary', 'Accept-Encoding');

    const validators = (req.headers['if-none-match'] || '').split(',').map(value => value.trim().replace(/^W\//, ''));
    if (!req.headers.range && (validators.includes('*') || validators.includes(entry.etag.replace(/^W\//, '')))) {
      res.writeHead(304);
      return res.end();
    }

    const acceptEncoding = req.headers['accept-encoding'] || '';
    let body = entry.data;
    let contentEncoding = null;

    if (entry.brotli && /\bbr\b/.test(acceptEncoding)) {
      body = entry.brotli;
      contentEncoding = 'br';
    } else if (entry.gzip && /\bgzip\b/.test(acceptEncoding)) {
      body = entry.gzip;
      contentEncoding = 'gzip';
    }

    let status = 200;
    if (entry.type === 'video/mp4') {
      res.setHeader('Accept-Ranges', 'bytes');
      if (req.method === 'GET' && req.headers.range) {
        const match = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
        const size = entry.data.length;
        let start = match?.[1] ? Number(match[1]) : 0;
        let end = match?.[2] ? Number(match[2]) : size - 1;
        if (match && !match[1] && match[2]) {
          start = Math.max(0, size - Number(match[2]));
          end = size - 1;
        }
        if (!match || (!match[1] && !match[2]) || !Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start < 0 || start >= size || end < start) {
          res.writeHead(416, { 'Content-Range': `bytes */${size}` });
          return res.end();
        }
        end = Math.min(end, size - 1);
        body = entry.data.subarray(start, end + 1);
        status = 206;
        res.setHeader('Content-Range', `bytes ${start}-${end}/${size}`);
      }
    }

    if (contentEncoding) {
      res.setHeader('Content-Encoding', contentEncoding);
    }
    res.setHeader('Content-Length', body.length);
    res.writeHead(status);
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch {
    if (res.headersSent) return res.destroy();
    res.writeHead(500);
    res.end('Unable to serve this request.');
  }
});

server.headersTimeout = 10000;
server.requestTimeout = 15000;
server.keepAliveTimeout = 5000;
server.maxHeadersCount = 50;
server.maxRequestsPerSocket = 100;
server.on('error', error => {
  console.error(error.message);
  process.exitCode = 1;
});

server.listen(port, host, () => console.log(`Production preview: http://${host}:${port}`));
