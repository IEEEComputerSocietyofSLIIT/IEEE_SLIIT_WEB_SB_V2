import { legacyEvents } from './legacyEvents';
import career from '../assets/images/sample-career.jpg';
import leadership from '../assets/images/sample-leadership.jpg';
import hero from '../assets/images/sample-hero.jpg';
export const sampleEvents = [{
  id: 'pti-2026',
  name: 'Path to Internship 2026',
  tag: 'Career & industry',
  image: career,
  status: 'past',
  preview: true,
  description: 'Event highlights'
}, {
  id: 'agm-2026',
  name: 'AGM 2026',
  tag: 'Community & leadership',
  image: leadership,
  status: 'past',
  preview: true,
  description: 'Event highlights'
}, {
  id: 'ieee-day-2025',
  name: 'IEEE Day 2025',
  tag: 'Connection & celebration',
  image: hero,
  status: 'past',
  preview: true,
  description: 'Event highlights'
}];
export function eventsEndpoint() {
  const base = (import.meta.env.VITE_API_URL || '').trim();
  if (!base) return import.meta.env.VITE_EVENTS_API_ENABLED === 'true' ? '/api/get/events/IEEESB' : null;
  try {
    const url = new URL(base);
    const local = ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname) || url.origin === window.location.origin;
    if (url.username || url.password || (url.protocol !== 'https:' && !(url.protocol === 'http:' && local))) return null;
    url.pathname = url.pathname.replace(/\/$/, '') + '/api/get/events/IEEESB';
    url.search = '';
    url.hash = '';
    return url.href;
  } catch { return null; }
}
const text = (value, limit) => typeof value === 'string' ? value.slice(0, limit) : '';
export function safeEventUrl(value, base = window.location.origin) {
  if (typeof value !== 'string' || !value.trim() || value.trim().startsWith('#') || value.length > 2048) return '';
  try {
    const url = new URL(value, base);
    const local = ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname) || url.origin === window.location.origin;
    if (url.username || url.password || (url.protocol !== 'https:' && !(url.protocol === 'http:' && local))) return '';
    return url.href;
  } catch { return ''; }
}
export function normalize(event, index) {
  const image = event.image || (Array.isArray(event.images) ? event.images[0] : '');
  const base = eventsEndpoint() ? new URL(eventsEndpoint(), window.location.origin).origin : window.location.origin;
  const date = typeof event.date === 'string' && Number.isFinite(Date.parse(event.date)) ? event.date : null;
  return {
    id: text(event.id, 100) || text(event._id, 100) || String(index),
    name: text(event.name, 160) || text(event.eventName, 160) || 'IEEE event',
    description: text(event.description, 800),
    details: text(event.details, 8000),
    tag: text(event.tag, 80),
    status: ['upcoming', 'past'].includes(event.status) ? event.status : undefined,
    date,
    endDate: typeof event.endDate === 'string' && Number.isFinite(Date.parse(event.endDate)) ? event.endDate : null,
    time: text(event.time, 100),
    location: text(event.location, 200),
    venue: text(event.venue, 200),
    detailImage: safeEventUrl(event.detailImage, base),
    gallery: Array.isArray(event.gallery) ? event.gallery.slice(0, 8).map(image => safeEventUrl(image, base)).filter(Boolean) : [],
    linkStatus: event.linkStatus === true,
    googleFormLink: safeEventUrl(event.googleFormLink, base),
    image: safeEventUrl(image, base) || hero
  };
}

export function formatEventDate(value) {
  if (!value) return '';
  const date = /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(value + 'T12:00:00') : new Date(value);
  return Number.isFinite(date.getTime()) ? date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
}

// Keep document-based flagship highlights alongside the original V2 archive.
export const galleryEvents = [...sampleEvents, ...legacyEvents];
