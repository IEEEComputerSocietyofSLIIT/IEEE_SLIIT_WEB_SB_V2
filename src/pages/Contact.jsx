import { MEMBERSHIP_URL } from '../components/siteLinks';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Icon } from '../components/SiteIcon';
import { SocialLinks } from '../components/SocialLinks';

export default function Contactus() {
  const [params] = useSearchParams();
  const [subject, setSubject] = useState('general');
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState(false);
  const [lastDraft, setLastDraft] = useState('');

  useEffect(() => {
    const value = params.get('subject');
    setSubject(['general', 'join', 'volunteer', 'oc', 'counselor', 'partnership'].includes(value) ? value : 'general');
  }, [params]);

  function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Anti-spam honeypot verification
    const honeypot = String(data.get('_hp_company') || '').trim();
    if (honeypot) {
      setStatus('Submission received.');
      return;
    }

    const name = String(data.get('name') || '').trim().slice(0, 100);
    const email = String(data.get('email') || '').trim().slice(0, 200);
    const message = String(data.get('message') || '').trim().slice(0, 4000);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    const label = form.elements.subject.selectedOptions[0]?.text || 'General inquiry';
    const fullBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    setLastDraft(fullBody);

    // Safe bounds for mailto URLs to avoid browser/OS URI length limits
    const safeBody = fullBody.length > 1500 ? fullBody.slice(0, 1500) + '... [truncated for mail link]' : fullBody;
    const mailtoUrl = `mailto:sliit.ieee@gmail.com?subject=${encodeURIComponent(label)}&body=${encodeURIComponent(safeBody)}`;

    setStatus('Email draft prepared. If your email app does not open automatically, copy the draft below.');
    window.location.href = mailtoUrl;
  }

  const copyToClipboard = () => {
    if (!lastDraft) return;
    navigator.clipboard.writeText(lastDraft).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Fallback
    });
  };

  return <article data-page="contact">
      <div className="wrap">
        <header className="page-heading">
          <h1>Let’s start<br />something together</h1>
        </header>

        <div className="contact-grid">
          <section className="contact-info" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>Contact Information</h2>
            <div className="contact-detail">
              <small>Direct contact</small>
              <a className="contact-icon-row" href="mailto:sliit.ieee@gmail.com">
                <span className="contact-icon"><Icon name="mail" /></span>
                <span>sliit.ieee@gmail.com</span>
              </a>
            </div>
            <div className="contact-detail">
              <small>Social media</small>
              <SocialLinks />
            </div>
            <div className="contact-detail contact-location">
              <small>Find us on campus</small>
              <a className="contact-icon-row" href="https://www.google.com/maps/search/?api=1&query=SLIIT+Malabe+Campus" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon"><Icon name="location" /></span>
                <p>SLIIT Malabe Campus<br />New Kandy Road, Malabe, Sri Lanka</p>
              </a>
              <div className="map">
                <iframe
                  title="Map showing SLIIT Malabe Campus"
                  src="https://maps.google.com/maps?q=SLIIT%20Malabe%20Campus&z=15&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allowFullScreen
                ></iframe>
                <div className="map-caption">
                  <a href="https://www.google.com/maps/search/?api=1&query=SLIIT+Malabe+Campus" target="_blank" rel="noopener noreferrer">
                    Open campus map
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-quick-actions">
              <div className="actions">
                <Link className="button" to={MEMBERSHIP_URL}>Join IEEE </Link>
                <Link className="button light" to="/contact?subject=volunteer">Become a Volunteer </Link>
              </div>
            </div>
          </section>

          <form className="contact-form" id="contact-form" onSubmit={submit} noValidate={false}>
            <h2>Contact Form</h2>

            {/* Anti-spam honeypot */}
            <input
              type="text"
              name="_hp_company"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="field-row">
              <div>
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" autoComplete="name" placeholder="Full name" required maxLength={100} />
              </div>
              <div>
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" autoComplete="email" type="email" placeholder="you@example.com" required maxLength={200} />
              </div>
            </div>

            <label htmlFor="subject">Subject</label>
            <select id="subject" name="subject" value={subject} onChange={e => setSubject(e.target.value)}>
              <option value="general">General inquiry</option>
              <option value="join">Joining IEEE</option>
              <option value="volunteer">Becoming a volunteer</option>
              <option value="oc">Organizing committee application</option>
              <option value="counselor">Contacting the branch counselor</option>
              <option value="partnership">Partnership opportunities</option>
            </select>

            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" required placeholder="Tell us how you’d like to get involved…" maxLength={4000}></textarea>

            <button className="button light" type="submit">Prepare email </button>

            {status && (
              <div style={{ marginTop: '12px' }}>
                <p className="status" id="form-status" role="status" aria-live="polite">{status}</p>
                {lastDraft && (
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    style={{
                      marginTop: '8px',
                      background: 'none',
                      border: '1px solid var(--line, #d3ddea)',
                      borderRadius: '8px',
                      padding: '6px 14px',
                      fontSize: '13px',
                      cursor: 'pointer',
                      color: 'var(--ocean, #0077b6)'
                    }}
                  >
                    {copied ? '✓ Copied draft to clipboard' : '📋 Copy message draft to clipboard'}
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </article>;
}
