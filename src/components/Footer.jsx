import { Link } from 'react-router-dom';
import { Brand } from './Brand';
import { MEMBERSHIP_URL } from './siteLinks';
import { SocialLinks } from './SocialLinks';

export default function Footer() {
  return <footer className="footer"><div className="wrap"><div className="footer-top"><div><Brand footer /><p>Advancing technology for humanity.<br />Growing together, one idea at a time.</p><SocialLinks /></div><div className="footer-links"><div><strong>Explore</strong><Link to="/">Home</Link><Link to="/events">Events & Gallery</Link><Link to="/committee">Committee</Link><Link to="/contact">Contact</Link></div><div><strong>Get started</strong><Link to={MEMBERSHIP_URL}>Join IEEE </Link><Link to="/contact?subject=volunteer">Volunteer </Link><a href="mailto:sliit.ieee@gmail.com">Email the branch </a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} IEEE Student Branch of SLIIT</span><span>Built around people. Inspired by possibility.</span></div></div></footer>;
}
