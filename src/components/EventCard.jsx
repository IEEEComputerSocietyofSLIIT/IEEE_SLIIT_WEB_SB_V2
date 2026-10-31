import { Link } from 'react-router-dom';
import EventImage from './EventImage';
import { isEventUpcoming } from '../pages/eventsData';

export default function EventCard({ event }) {
  const upcoming = isEventUpcoming(event);
  return <article className="event-card"><div className="event-image"><EventImage src={event.image} alt={event.name} loading="lazy" /></div><div className="event-copy"><h3>{event.name}</h3>{upcoming && <Link className="button event-oc" to={'/contact?subject=oc&event=' + encodeURIComponent(event.name)}>Apply for OC </Link>}</div></article>;
}
