import { MEMBERSHIP_URL } from '../components/siteLinks';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Icon } from '../components/SiteIcon';
import { SocialLinks } from '../components/SocialLinks';

export default function Contactus() {
  const [params] = useSearchParams();
  const [subject, setSubject] = useState('general'),
    [status, setStatus] = useState('');
  useEffect(() => {
    const value = params.get('subject');
    setSubject(['general', 'join', 'volunteer', 'oc', 'counselor', 'partnership'].includes(value) ? value : 'general');
  }, [params]);
  function submit(e) {
    e.preventDefault();
    const form = e.currentTarget,
      data = new FormData(form);
    const label = form.elements.subject.selectedOptions[0].text;
    const body = 'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\n\n' + data.get('message');
    setStatus('Email draft requested. Review and send it in your email app. If no app opens, email sliit.ieee@gmail.com directly.');
    window.location.href = 'mailto:sliit.ieee@gmail.com?subject=' + encodeURIComponent(label) + '&body=' + encodeURIComponent(body);
  }
  return <article data-page="contact">
      <div className="wrap"><header className="page-heading"><h1>Let’s start<br />something together</h1></header>
        <h2 id="contact-heading" className="contact-title">Our door is open</h2>
        <div className="contact-grid">
          <section className="contact-info" aria-labelledby="contact-heading">
          <div className="contact-detail"><small>Direct contact</small><a className="contact-icon-row" href="mailto:sliit.ieee@gmail.com"><span className="contact-icon"><Icon name="mail" /></span><span>sliit.ieee@gmail.com</span></a></div>
          <div className="contact-detail"><small>Social media</small><SocialLinks /></div>
          <div className="contact-detail contact-location"><small>Find us on campus</small><a className="contact-icon-row" href="https://www.google.com/maps/search/?api=1&amp;query=SLIIT+Malabe+Campus" target="_blank" rel="noopener noreferrer"><span className="contact-icon"><Icon name="location" /></span><p>SLIIT Malabe Campus<br />New Kandy Road, Malabe, Sri Lanka</p></a>
            <div className="map"><iframe title="Map showing SLIIT Malabe Campus" src="https://maps.google.com/maps?q=SLIIT%20Malabe%20Campus&amp;z=15&amp;output=embed" loading="lazy" referrerPolicy="no-referrer" allowFullScreen></iframe><div className="map-caption"><a href="https://www.google.com/maps/search/?api=1&amp;query=SLIIT+Malabe+Campus" target="_blank" rel="noopener noreferrer">Open campus map</a></div></div>
          </div>
          <div className="contact-quick-actions"><div className="actions"><a className="button" href={MEMBERSHIP_URL}>Join IEEE </a><Link className="button light" to="/contact?subject=volunteer">Become a Volunteer </Link></div></div>
        </section>
          <form className="contact-form" id="contact-form" onSubmit={submit}><h2>Contact Form</h2><div className="field-row"><div><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" placeholder="Full name" required maxLength="100" /></div><div><label htmlFor="email">Email address</label><input id="email" name="email" autoComplete="email" type="email" placeholder="you@example.com" required maxLength="200" /></div></div><label htmlFor="subject">Subject</label><select id="subject" name="subject" value={subject} onChange={e => setSubject(e.target.value)}><option value="general">General inquiry</option><option value="join">Joining IEEE</option><option value="volunteer">Becoming a volunteer</option><option value="oc">Organizing committee application</option><option value="counselor">Contacting the branch counselor</option><option value="partnership">Partnership opportunities</option></select><label htmlFor="message">Your message</label><textarea id="message" name="message" required placeholder="Tell us how you’d like to get involved…" maxLength="4000"></textarea><button className="button light" type="submit">Prepare email </button><p className="status" id="form-status" role="status">{status}</p></form>
        </div>
      </div>
    </article>;
}
