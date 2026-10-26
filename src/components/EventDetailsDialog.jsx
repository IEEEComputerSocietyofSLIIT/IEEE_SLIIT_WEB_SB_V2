import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import EventImage from './EventImage';
import { formatEventDate } from '../pages/eventsData';

function EventContent({ event, onClose }) {
  const [image, setImage] = useState(event.detailImage || event.image);
  const gallery = [...new Set((event.gallery?.length ? event.gallery : [event.detailImage || event.image]).filter(Boolean))];
  const start = formatEventDate(event.date), end = formatEventDate(event.endDate);
  return <>
    <header className="event-dialog-header">
      <div><div className="eyebrow">{event.tag || 'IEEE SLIIT event'}</div><h2 id="event-dialog-title">{event.name}</h2></div>
      <button className="dialog-close" type="button" onClick={onClose} aria-label="Close event details" autoFocus>×</button>
    </header>
    <div className="event-dialog-body">
      <EventImage className="event-dialog-image" src={image} alt={event.name} loading="eager" width="960" height="540" />
      {gallery.length > 1 && <div className="event-thumbnails" role="group" aria-label="Event gallery">{gallery.map((src, index) => <button key={src} type="button" aria-label={'Show event image ' + (index + 1)} aria-pressed={image === src || (index === 0 && image === event.detailImage)} onClick={() => setImage(src)}><EventImage src={src} alt="" loading="lazy" width="160" height="90" /></button>)}</div>}
      {(start || event.time || event.location || event.venue) && <dl className="event-facts">
        {start && <div><dt>Date</dt><dd><time dateTime={event.date}>{start}</time>{end && end !== start && <> – <time dateTime={event.endDate}>{end}</time></>}</dd></div>}
        {event.time && <div><dt>Time</dt><dd>{event.time}</dd></div>}
        {event.location && <div><dt>Location</dt><dd>{event.location}</dd></div>}
        {event.venue && <div><dt>Venue</dt><dd>{event.venue}</dd></div>}
      </dl>}
      <p className="event-description">{event.details || event.description}</p>
      {event.preview && <p className="notice">{event.id.startsWith('v2-') ? 'Archived preview from the previous website. Confirm event information with the branch.' : 'Illustrative highlight. Ask the branch for the official recap and gallery.'}</p>}
      <div className="event-dialog-actions">
        {event.linkStatus && event.googleFormLink && <a className="button" href={event.googleFormLink} target="_blank" rel="noopener noreferrer">Register for event</a>}
        <Link className="button light" onClick={onClose} to="/contact?subject=oc">Contact the branch</Link>
      </div>
    </div>
  </>;
}

export default function EventDetailsDialog({ event, onClose }) {
  const modal = useRef(null);
  useEffect(() => {
    if (!event) return;
    const dialog = modal.current;
    const opener = document.activeElement;
    document.body.classList.add('event-dialog-open');
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.classList.remove('event-dialog-open');
      const fallback = [...document.querySelectorAll('.event-details')].find(button => button.dataset.eventId === event.id);
      const focusTarget = fallback || (opener?.isConnected ? opener : null);
      // Wait for native dialog focus restoration and React's removal to finish.
      requestAnimationFrame(() => {
        if (focusTarget?.isConnected && !document.querySelector('dialog[open]')) focusTarget.focus({ preventScroll: true });
      });
    };
  }, [event]);
  return <dialog className="dialog event-dialog" ref={modal} aria-labelledby="event-dialog-title" onCancel={e => { e.preventDefault(); onClose(); }} onKeyDown={e => {
    if (e.key !== 'Tab' || e.ctrlKey || e.altKey || e.metaKey) return;
    const focusable = [...e.currentTarget.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]')].filter(element => element.getClientRects().length);
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
  }} onClick={e => {
    if (e.target !== modal.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) onClose();
  }}>{event && <EventContent key={event.id} event={event} onClose={onClose} />}</dialog>;
}
