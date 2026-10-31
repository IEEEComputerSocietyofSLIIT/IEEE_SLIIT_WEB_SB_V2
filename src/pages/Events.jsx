import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import { galleryEvents, eventsEndpoint, normalize, readEventsResponse } from './eventsData';
import './Events.css';

export default function EventsPage() {
  const [events, setEvents] = useState(galleryEvents);
  const [loading, setLoading] = useState(() => !!eventsEndpoint());

  useEffect(() => {
    const endpoint = eventsEndpoint();
    if (!endpoint) return;
    const controller = new AbortController();
    let active = true;
    const timeout = setTimeout(() => controller.abort(), 6000);

    fetch(endpoint, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
      credentials: 'omit',
      referrerPolicy: 'no-referrer'
    }).then(response => {
      if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) {
        throw new Error('Events unavailable');
      }
      return readEventsResponse(response);
    }).then(data => {
      if (!active) return;
      const records = Array.isArray(data) ? data : data?.events;
      if (!Array.isArray(records)) throw new Error('The events API did not return an array.');
      setEvents(records.filter(record => record && typeof record === 'object' && !Array.isArray(record)).slice(0, 100).map(normalize));
    }).catch(() => {
      if (active) {
        setEvents(galleryEvents);
      }
    }).finally(() => {
      clearTimeout(timeout);
      if (active) setLoading(false);
    });

    return () => {
      active = false;
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  return (
    <article data-page="events">
      <div className="wrap">
        <header className="page-heading">
          <h1>More Than Events<br />Memories That Last</h1>
          <p>From exciting tech experiences and big ideas to unforgettable memories with amazing people, explore the moments that make IEEE SLIIT more than just a university society.</p>
        </header>

        {loading && <p className="status" role="status">Checking the latest events…</p>}

        <div className="events-grid" aria-live="polite">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}

          {!events.length && (
            <div className="empty-state">
              <h3>No events to show yet</h3>
              <p>Contact the branch to find your next opportunity.</p>
              <Link className="text-link" to="/contact?subject=oc">Get involved</Link>
            </div>
          )}
        </div>

        <aside className="oc-banner">
          <div>
            <h3>There’s a team that made it happen</h3>
            <p>Get hands-on experience. Make new friends. Help shape what comes next.</p>
          </div>
          <Link className="button" to="/contact?subject=oc">Apply for an organizing committee </Link>
        </aside>
      </div>
    </article>
  );
}
