import { Link } from 'react-router-dom';
import { Brand } from './Brand';
import { MEMBERSHIP_URL } from './siteLinks';
import { SocialLinks } from './SocialLinks';

const developers = [
    "Dilshan Karunarathna",
    "Dinith Navodya",
    "Jegatheesan Risikesan",
    "Senal  Galagedara",
    "Vehan Rajintha",
  ];
const designers = ["Ruvindi Randeniya", "Amasha Prabuddi", "Hesara Perera"];
export default function Footer() {
  return <footer className="footer"><div className="wrap"><div className="footer-top"><div><Brand footer /><p>Advancing technology for humanity.<br />Growing together, one idea at a time.</p><SocialLinks /></div><div className="footer-links"><div><strong>Explore</strong><Link to="/">Home</Link><Link to="/events">Events & Gallery</Link><Link to="/committee">Committee</Link><Link to="/contact">Contact</Link></div><div><strong>Get started</strong><a href={MEMBERSHIP_URL}>Join IEEE </a><Link to="/contact?subject=volunteer">Volunteer </Link><a href="mailto:sliit.ieee@gmail.com">Email the branch </a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} IEEE Student Branch of SLIIT</span><span>Built around people. Inspired by possibility.</span></div><div className="footer-credits"><p>An initiative by the IEEE Computer Society Student Branch Chapter of SLIIT</p><p>Lead by Heshan Gimhana</p><p>Designed by {designers.join(", ")}</p><p>Developed by {developers.join(", ")}</p></div></div></footer>;
}
