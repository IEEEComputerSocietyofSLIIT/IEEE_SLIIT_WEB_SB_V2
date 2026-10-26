import { Link } from 'react-router-dom';
import { Icon } from './SiteIcon';
import EventImage from './EventImage';
import { formatEventDate } from '../pages/eventsData';
export default function EventCard({
  event,
  onSelect
}) {
  const upcoming = event.status === 'upcoming' || (!event.status && new Date(event.date) > new Date());
  return <article className="event-card"><div className="event-image"><EventImage src={event.image} alt={event.name} loading="lazy" /></div><div className="event-copy"><span className="card-category">{event.tag || (upcoming ? 'Upcoming event' : 'Past event')}</span><h3>{event.name}</h3><p>{event.description}</p><div className="event-meta"><span>{formatEventDate(event.date) || 'Flagship experience'}</span><button className="event-details" type="button" onClick={onSelect} data-event-id={event.id} aria-haspopup="dialog" aria-label={'Read about ' + event.name}><Icon name="info" /></button></div>{upcoming && <Link className="button event-oc" to={'/contact?subject=oc&event=' + encodeURIComponent(event.name)}>Apply for OC </Link>}</div></article>;
}
