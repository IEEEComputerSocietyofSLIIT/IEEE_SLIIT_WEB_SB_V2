// Serve the production build locally with security headers and compression.
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
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.txt': 'text/plain', '.mp4': 'video/mp4' };
const cache = new Map();
const server = http.createServer((req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    return res.end();
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); return res.end(); }
  const segments = pathname.split(/[\\/]/);
  if (pathname.includes('\0') || segments.some(part => part.startsWith('.'))) {
    res.writeHead(403); return res.end();
  }
  let filename = path.resolve(root, '.' + pathname);
  if (!filename.startsWith(root + path.sep) && filename !== root) {
    res.writeHead(403); return res.end();
  }
  if (!fs.existsSync(filename) || !fs.statSync(filename).isFile()) {
    if (pathname.startsWith('/api/') || path.extname(pathname)) {
      res.writeHead(404); return res.end('Not found');
    }
    filename = path.join(root, 'index.html');
  }
  let entry = cache.get(filename);
  if (!entry) {
    const data = fs.readFileSync(filename);
    const ext = path.extname(filename);
    const hashes = ext === '.html' ? [...data.toString().matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].map(match => "'sha256-" + crypto.createHash('sha256').update(match[1]).digest('base64') + "'") : [];
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
      "object-src 'none'", "base-uri 'self'", "form-action 'none'", "frame-ancestors 'self'"
    ].join('; ');
    entry = { data, csp, type: types[ext] || 'application/octet-stream', gzip: /\.(html|js|css|json|svg|txt)$/.test(filename) && data.length > 1024 ? zlib.gzipSync(data) : null };
    cache.set(filename, entry);
  }
  const compressed = entry.gzip && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
  let body = compressed ? entry.gzip : entry.data;
  let status = 200;
  if (entry.type === 'video/mp4') {
    res.setHeader('Accept-Ranges', 'bytes');
    if (req.method === 'GET' && req.headers.range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
      const size = entry.data.length;
      let start = match?.[1] ? Number(match[1]) : 0;
      let end = match?.[2] ? Number(match[2]) : size - 1;
      if (match && !match[1] && match[2]) { start = Math.max(0, size - Number(match[2])); end = size - 1; }
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
  res.setHeader('Content-Security-Policy', entry.csp);
  res.setHeader('Content-Type', entry.type + (/^(text\/|application\/json)/.test(entry.type) ? '; charset=utf-8' : ''));
  res.setHeader('Cache-Control', pathname.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'no-cache');
  res.setHeader('Vary', 'Accept-Encoding');
  if (compressed) res.setHeader('Content-Encoding', 'gzip');
  res.setHeader('Content-Length', body.length);
  res.writeHead(status);
  res.end(req.method === 'HEAD' ? undefined : body);
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
server.listen(port, host, () => console.log(`Production preview: http://${host}:${port}`));
