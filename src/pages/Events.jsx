import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Icon } from '../components/SiteIcon';
import EventCard from '../components/EventCard';
import EventDetailsDialog from '../components/EventDetailsDialog';
import { galleryEvents, eventsEndpoint, normalize } from './eventsData';
import './Events.css';
export default function EventsPage() {
  const [events, setEvents] = useState(galleryEvents),
    [filter, setFilter] = useState('all'),
    [loading, setLoading] = useState(() => !!eventsEndpoint()),
    [offline, setOffline] = useState(false);
  const [params, setParams] = useSearchParams();
  const selected = events.find(event => event.id === params.get('event')) || galleryEvents.find(event => event.id === params.get('event'));
  useEffect(() => {
    const endpoint = eventsEndpoint();
    if (!endpoint) return;
    const controller = new AbortController();
    let active = true;
    const timeout = setTimeout(() => controller.abort(), 6000);
    fetch(endpoint, { signal: controller.signal, headers: { Accept: 'application/json' }, credentials: 'omit' }).then(response => {
      if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) throw new Error('Events unavailable');
      return response.json();
    }).then(data => {
      if (!active) return;
      const records = Array.isArray(data) ? data : data?.events;
      if (!Array.isArray(records)) throw new Error('The events API did not return an array.');
      setEvents(records.filter(record => record && typeof record === 'object' && !Array.isArray(record)).slice(0, 100).map(normalize));
      setOffline(false);
    }).catch(() => {
      if (active) {
        setOffline(true);
        setEvents(galleryEvents);
      }
    }).finally(() => {
      clearTimeout(timeout);
      if (active) setLoading(false);
    });
    return () => { active = false; clearTimeout(timeout); controller.abort(); };
  }, []);
  const close = () => setParams(previous => { const next = new URLSearchParams(previous); next.delete('event'); return next; });
  const visible = events.filter(event => {
    const upcoming = event.status === 'upcoming' || (!event.status && new Date(event.date) > new Date());
    return filter === 'all' || (filter === 'upcoming' ? upcoming : !upcoming);
  });
  return <article data-page="events"><div className="wrap"><header className="page-heading"><div className="page-kicker">The community in motion</div><div className="eyebrow">Events & Gallery</div><h1>Be part of<br />the next great moment</h1><p>Hands-on workshops, industry conversations, and the connections that happen in between There’s a place for you here</p></header>
   <div className="tabs" role="group" aria-label="Filter events">{[['all', 'All experiences'], ['upcoming', 'Upcoming'], ['past', 'Past events']].map(([value, label]) => <button type="button" key={value} aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>)}</div>
   {loading && <p className="status" role="status">Checking the latest events…</p>}
   {offline && <p className="notice" role="status">Live events are unavailable. Showing the illustrative highlights from the design sample.</p>}
   {!eventsEndpoint() && <p className="notice">Showing illustrative highlights from the design sample.</p>}
   <div className="events-grid" aria-live="polite">{visible.map(event => <EventCard key={event.id} event={event} onSelect={() => setParams({
          event: event.id
        })} />)}{!visible.length && <div className="empty-state"><h3>{filter === 'upcoming' ? 'The next chapter is taking shape' : 'No events to show yet'}</h3><p>Contact the branch to find your next opportunity.</p><Link className="text-link" to="/contact?subject=oc">Get involved <Icon /></Link></div>}</div>
   <aside className="oc-banner"><div><div className="eyebrow">Behind every great event</div><h3>There’s a team that made it happen</h3><p>Get hands-on experience. Make new friends. Help shape what comes next.</p></div><Link className="button" to="/contact?subject=oc">Apply for an organizing committee </Link></aside>
 </div><EventDetailsDialog event={selected} onClose={close} /></article>;
}
