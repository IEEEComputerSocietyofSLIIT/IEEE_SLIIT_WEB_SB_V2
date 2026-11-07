import { Link } from 'react-router-dom';
import { WHATSAPP_CHANNEL_URL, MEMBERSHIP_CONTACT_URL } from '../components/siteLinks';

export default function Join() {
  return <article data-page="join" className="join-page wrap">
    <header className="page-heading">
      <h1>How to Join IEEE at SLIIT</h1>
      <p>Everyone starts by volunteering!</p>
    </header>
    <section className="join-panel" aria-labelledby="join-next-step">
      <h2 id="join-next-step">Start your IEEE journey</h2>
      <p>Follow the IEEE Student Branch of SLIIT WhatsApp Channel and watch for volunteer calls. Check which IEEE Chapter, Affinity Group, or if the SB is organizing the event. If you're interested in planning and organizing it, apply to join the Organizing Committee (OC) and start your IEEE journey!</p>
      <div className="actions">
        <a className="button whatsapp-button" href={WHATSAPP_CHANNEL_URL} target="_blank" rel="noopener noreferrer">Follow WhatsApp Channel</a>
        <a className="button light" href={MEMBERSHIP_CONTACT_URL} target="_blank" rel="noopener noreferrer">Contact Membership Team</a>
      </div>
      <Link className="text-link join-journey-link" to="/#journey">Explore the volunteering journey</Link>
    </section>
  </article>;
}
