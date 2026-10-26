import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../components/SiteIcon';
import { MEMBERSHIP_URL } from '../../components/siteLinks';
import EventCard from '../../components/EventCard';
import { sampleEvents } from '../eventsData';
import cardData from '../../components/HomeCards/CardData';
import { benefitsData } from '../../components/BenefitCard/benefitsData';
import { AwardCardsInfo } from '../../components/AwardCards/awardsInfo';
import hero from '../../assets/images/sample-hero.jpg';
import mark from '../../assets/logos/IEEE.png';
import ComSoc from '../../assets/logos/ComSoc.png';
import career from '../../assets/images/sample-career.jpg';
import industry from '../../assets/images/sample-industry.jpg';
import networking from '../../assets/images/sample-networking.jpg';
import leadership from '../../assets/images/sample-leadership.jpg';
import hackathon from '../../assets/images/sample-hackathon.jpg';
import global from '../../assets/images/sample-global.jpg';
import CS from '../../assets/logos/CS.png';
import RAS from '../../assets/logos/RAS.png';
import IAS from '../../assets/logos/IAS.png';
import PES from '../../assets/logos/PES.png';
import WIE from '../../assets/logos/WIE.png';
import EMBS from '../../assets/logos/EMBS.png';

const benefitImages = [career, industry, networking, leadership, hackathon, global];
const benefits = benefitsData.map((benefit, index) => [benefit.title, benefit.description, benefitImages[index]]);
const chapters = [{
  code: 'CS',
  name: 'Computer Society',
  logo: CS,
  website: 'https://cs.ieeesliit.com/',
  instagram: 'https://www.instagram.com/ieeecssliit/'
}, {
  code: 'RAS',
  name: 'Robotics & Automation Society',
  logo: RAS,
  website: 'https://ras.ieeesliit.com/'
}, {
  code: 'IAS',
  name: 'Industry Applications Society',
  logo: IAS,
  website: 'https://ias.ieeesliit.com/',
  instagram: 'https://www.instagram.com/ias_sliit/'
}, {
  code: 'PES',
  name: 'Power & Energy Society',
  logo: PES,
  website: 'https://pes.ieeesliit.com/',
  instagram: 'https://www.instagram.com/ieeepessliit/'
}, {
  code: 'WIE',
  name: 'Women in Engineering Affinity Group',
  logo: WIE,
  website: 'https://wie.ieeesliit.com/',
  instagram: 'https://www.instagram.com/wie_sliit/'
}, {
  code: 'EMBS',
  name: 'Engineering in Medicine & Biology Society',
  logo: EMBS,
  website: 'https://www.embs.org/',
  instagram: 'https://www.instagram.com/embs_sliit/'
}, {
  code: 'ComSoc',
  logo: ComSoc,
  name: 'Communications Society',
  website: 'https://www.comsoc.org/'
}];
export default function Home() {
  const navigate = useNavigate();
  return <article data-page="home">
      <section className="hero wrap" aria-labelledby="home-heading">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">IEEE Student Branch of SLIIT</div>
            <h1 id="home-heading">Big ideas<br />Real connections<br /><em>Your next chapter</em></h1>
            <p className="intro">A community for the curious. Build your skills, find your people, and turn what you learn into something that matters.</p>
            <div className="actions"><a className="button" href={MEMBERSHIP_URL}>Join IEEE </a><Link className="button light" to="/#journey">How to start </Link></div>
            <div className="hero-note"><span className="dot" aria-hidden="true"></span>Open to every curious mind at SLIIT</div>
          </div>
          <Link className="hero-photo" to="/events" aria-label="Explore IEEE SLIIT events and gallery"><img decoding="async" src={hero} width="1376" height="768" loading="eager" fetchPriority="high" alt="Illustrative student community celebrating at a technology event" /><div className="photo-caption"><div><small>Learn together Go further</small><strong>This is where you belong</strong></div></div></Link>
        </div>
        <div className="stats"><p className="stats-label">One community<br />A world of possibilities</p>{cardData.map(stat => <div className="stat" key={stat.heading}><strong>{stat.count.endsWith('+') ? <>{stat.count.slice(0, -1)}<span>+</span></> : stat.count}</strong><small>{stat.heading}</small></div>)}</div>
      </section>
      <section className="section wrap" aria-labelledby="why-heading"><div className="section-head"><div><div className="eyebrow">More than a membership</div><h2 id="why-heading">Why Join IEEE at SLIIT</h2></div><p>IEEE is not just a society, it is an experience</p></div><div className="value-grid" id="values">{benefits.map(([title, copy, image]) => <article className="value-card" key={title}><img decoding="async" src={image} alt={title} loading="lazy" /><div className="value-content"><span className="card-category">The IEEE experience</span><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>
      <section className="section chapters-section" aria-labelledby="chapters-heading"><div className="wrap"><div className="section-head"><div><div className="eyebrow">Find your people</div><h2 id="chapters-heading">Our Chapters</h2></div><p>From intelligent machines to a healthier planet—find the community that shares your curiosity</p></div><div className="chapter-branch"><img decoding="async" className="branch-lockup" src={mark} alt="SLIIT IEEE Student Branch" /></div><div className="chapter-grid" id="chapters">{chapters.map(chapter => <article className="chapter" key={chapter.code} style={{'--chapter-color': ({CS: '#F5A623', RAS: '#A51C5B', IAS: '#188448', PES: '#4D8C34', WIE: '#82368C', EMBS: '#92368B', ComSoc: '#0077B6'})[chapter.code]}}>{chapter.logo ? <div className="chapter-logo"><img decoding="async" src={chapter.logo} alt={chapter.name + ' logo'} loading="lazy" /></div> : <div className="chapter-logo"><span className="chapter-monogram" style={{
                color: 'var(--ocean)'
              }}>{chapter.code}</span></div>}<h3>{chapter.name}</h3><div className="chapter-actions"><a href={chapter.website} target="_blank" rel="noreferrer" aria-label={chapter.name + ' website'}><Icon name="globe" /></a><a href={chapter.instagram || 'https://linktr.ee/ieeesliit'} target="_blank" rel="noreferrer" aria-label={chapter.instagram ? chapter.name + ' Instagram' : chapter.name + ' social directory'}><Icon name="instagram" /></a></div></article>)}</div></div></section>
      <section className="section wrap" aria-labelledby="flagship-heading"><div className="section-head"><div><div className="eyebrow">Ideas into experiences</div><h2 id="flagship-heading">Flagship Events</h2></div><Link to="/events" className="text-link">Explore events & gallery </Link></div><div className="flagships" id="flagships">{sampleEvents.map(event => <EventCard key={event.id} event={event} onSelect={() => navigate('/events?event=' + event.id)} />)}</div></section>
      <section className="journey-shell" id="journey" aria-labelledby="journey-heading"><div className="wrap journey">
        <div className="journey-intro"><div className="eyebrow">How to start</div><h2 id="journey-heading">Start your IEEE journey today</h2><p>Bring your curiosity and a willingness to contribute. From your first event to a global community, there’s room to grow at every step.</p><div className="actions"><a className="button" href={MEMBERSHIP_URL}>Join IEEE </a><Link className="button light" to="/contact">Contact Us</Link></div></div>
        <ol className="journey-steps">
          <li className="step"><h3>Start as a Volunteer</h3><p>Help bring an event to life through registration, media, or on-the-day support. Ask our team about your first opportunity.</p></li>
          <li className="step"><h3>Volunteer in an Organizing Committee (OC)</h3><p>Contribute to logistics, public relations, design, or finance. Build practical experience with a team that shares your enthusiasm.</p></li>
          <li className="step"><h3>Become an Official IEEE SLIIT Member</h3><p>Make your connection official and explore the membership opportunities available through IEEE and its technical societies.</p></li>
          <li className="step"><h3>Join the IEEE SLIIT Executive Committee</h3><p>Take the next step in student leadership and help shape your branch or chapter. <Link to="/committee">Meet the current committee →</Link></p></li>
          <li className="step"><h3>Grow into the IEEE Sri Lanka Section</h3><p>Connect with student activities, Young Professionals, and technical communities beyond campus.</p><div className="section-badges"><span>SLSAC</span><span>Young Professionals</span><span>Technical Chapters</span></div></li>
          <li className="step"><h3>Connect with the Global IEEE Community</h3><p>Exchange ideas and discover opportunities to learn, contribute, and collaborate across borders.</p></li>
        </ol>
      </div></section>
      <section className="section wrap" aria-labelledby="awards-heading"><div className="eyebrow">A shared sense of pride</div><h2 id="awards-heading">Awards & Recognitions</h2><div className="awards">{AwardCardsInfo.map(award => <article className="award" key={award.title}><div className="award-mark" aria-hidden="true">{award.icon}</div><div><h3>{award.title}</h3>{award.description && <p>{award.description}</p>}</div></article>)}</div></section>
    </article>;
}
