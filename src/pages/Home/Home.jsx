import { Link } from 'react-router-dom';
import { Icon } from '../../components/SiteIcon';
import { SocialLinks } from '../../components/SocialLinks';
import slsacLogo from '../../assets/logos/SLSAC_logo.jpg';
import youngProfessionalsLogo from '../../assets/logos/YoungProfessionals_logo.png';
import { MEMBERSHIP_URL, WHATSAPP_CHANNEL_URL } from '../../components/siteLinks';
import EventCard from '../../components/EventCard';
import { sampleEvents } from '../eventsData';
import cardData from '../../components/HomeCards/CardData';
import { benefitsData } from '../../components/BenefitCard/benefitsData';
import { AwardCardsInfo } from '../../components/AwardCards/awardsInfo';
import { HomeIntro } from '../../components/HomeIntro';
import mark from '../../assets/logos/IEEE.png';
import ComSoc from '../../assets/logos/ComSoc.png';
import career from '../../assets/images/global-community.optimized.jpg';
import industry from '../../assets/images/industry-visits.optimized.jpg';
import networking from '../../assets/images/networking-opportunities.optimized.jpg';
import leadership from '../../assets/images/Events/SLIITXtremeOC.optimized.jpg';
import hackathon from '../../assets/images/technical-skills.optimized.jpg';
import global from '../../assets/images/global-community.optimized.jpg';
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
  return <article data-page="home">
      <section className="hero wrap" aria-labelledby="home-heading">
        <div className="hero-grid">
          <div className="hero-copy">

            <h1 id="home-heading"><span>Become More Than</span><em><span>You Came Here</span><span>to Be</span></em></h1>
            <p className="intro">Find your people. Discover what you're capable of. Build things you're proud of. Make your university years mean more with the IEEE Student Branch of SLIIT.</p>
            <div className="actions"><Link className="button" to={MEMBERSHIP_URL}>Join IEEE </Link><Link className="button light" to="/#journey">How to start </Link></div>
            <p className="hero-note">Open to every curious mind at SLIIT</p>
          </div>
          <HomeIntro />
        </div>
        <div className="stats"><p className="stats-label">One community<br />A world of possibilities</p>{cardData.map(stat => <div className="stat" key={stat.heading}><strong>{stat.count.endsWith('+') ? <>{stat.count.slice(0, -1)}<span>+</span></> : stat.count}</strong><small>{stat.heading}</small></div>)}</div>
      </section>
      <section className="section wrap" aria-labelledby="why-heading"><div className="section-head"><div><h2 id="why-heading">Why Join IEEE at SLIIT</h2></div><p>IEEE is not just a society, it is an experience</p></div><div className="value-grid" id="values">{benefits.map(([title, copy, image]) => <article className="value-card" key={title}><img decoding="async" src={image} alt={title} loading="lazy" /><div className="value-content"><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>
      <section className="section chapters-section" aria-labelledby="chapters-heading"><div className="wrap"><div className="section-head"><div><h2 id="chapters-heading">Our Chapters</h2></div><div className="chapter-subheading"><p>Six Chapters. One Affinity Group. One IEEE Community.</p><a className="button whatsapp-button" href={WHATSAPP_CHANNEL_URL} target="_blank" rel="noopener noreferrer">Follow WhatsApp Channel</a></div></div><div className="branch-card-row"><article className="chapter branch-card" style={{'--chapter-color': '#0077B6'}} aria-labelledby="branch-card-title"><div className="chapter-logo"><img decoding="async" src={mark} alt="SLIIT IEEE Student Branch logo" loading="lazy" /></div><h3 id="branch-card-title">IEEE Student Branch of SLIIT</h3><SocialLinks /></article></div><div className="chapter-grid" id="chapters">{chapters.map(chapter => <article className="chapter" key={chapter.code} style={{'--chapter-color': ({CS: '#F5A623', RAS: '#A51C5B', IAS: '#188448', PES: '#4D8C34', WIE: '#82368C', EMBS: '#92368B', ComSoc: '#0077B6'})[chapter.code]}}>{chapter.logo ? <div className="chapter-logo"><img decoding="async" src={chapter.logo} alt={chapter.name + ' logo'} loading="lazy" /></div> : <div className="chapter-logo"><span className="chapter-monogram" style={{
                color: 'var(--ocean)'
              }}>{chapter.code}</span></div>}<h3>{chapter.name}</h3><div className="chapter-actions"><a href={chapter.website} target="_blank" rel="noopener noreferrer" aria-label={chapter.name + ' website'}><Icon name="globe" /></a><a href={chapter.instagram || 'https://linktr.ee/ieeesliit'} target="_blank" rel="noopener noreferrer" aria-label={chapter.instagram ? chapter.name + ' Instagram' : chapter.name + ' social directory'}><Icon name="instagram" /></a></div></article>)}</div></div></section>
      <section className="section wrap" aria-labelledby="flagship-heading"><div className="section-head"><div><h2 id="flagship-heading">Flagship Events</h2></div><Link to="/events" className="text-link">Explore events & gallery </Link></div><div className="flagships" id="flagships">{sampleEvents.map(event => <EventCard key={event.id} event={event} />)}</div></section>
      <section className="journey-shell" id="journey" aria-labelledby="journey-heading"><div className="wrap journey">
        <div className="journey-intro"><h2 id="journey-heading">Start your IEEE journey today</h2><div className="actions"><Link className="button" to={MEMBERSHIP_URL}>Join IEEE </Link><Link className="button light" to="/contact">Contact Us</Link></div></div>
        <ol className="journey-steps">
          <li className="step"><h3>Start as a Volunteer</h3><p>Get involved, meet new people, and discover your interests within IEEE SLIIT.</p></li>
          <li className="step"><h3>Volunteer in an Event Organizing Committee (OC)</h3><p>Help organize exciting events while building teamwork and practical skills.</p></li>
          <li className="step"><h3>Become an Official IEEE SLIIT Member</h3><p>Unlock more opportunities to learn, connect, and grow with IEEE.</p></li>
          <li className="step"><h3>Join IEEE SLIIT Committee</h3><p>Develop leadership skills and help shape the future of IEEE SLIIT. <Link to="/committee">Meet the current committee</Link></p></li>
          <li className="step"><h3>Grow into the IEEE Sri Lanka Section</h3><p>Explore new opportunities through SLSAC, Young Professionals, and technical chapters.</p><div className="section-communities"><a className="community-logo-link slsac-logo-link" href="https://www.ieee.lk/governance/standing-committee/slsac" target="_blank" rel="noopener noreferrer"><img src={slsacLogo} alt="SLSAC" loading="lazy" decoding="async" /></a><a className="community-logo-link community-logo-wide" href="https://www.ieee.lk/communities/yp" target="_blank" rel="noopener noreferrer"><img src={youngProfessionalsLogo} alt="IEEE Young Professionals" loading="lazy" decoding="async" /></a><a className="community-text-link" href="https://www.ieee.lk/" target="_blank" rel="noopener noreferrer">Technical Chapters</a></div></li>
          <li className="step"><h3>Connect with the Global IEEE Community</h3><p>Connect with students and professionals worldwide and expand your horizons.</p></li>
        </ol>
      </div></section>
      <section className="section wrap" aria-labelledby="awards-heading"><h2 id="awards-heading">Awards & Recognitions</h2><div className="awards">{AwardCardsInfo.map(award => <article className="award" key={award.title}>{award.image ? <img className="award-image" style={{objectFit: award.imageFit || 'cover'}} src={award.image} alt={award.title} loading="lazy" decoding="async" /> : <div className="award-mark" aria-hidden="true">{award.icon}</div>}<div className="award-content"><h3>{award.title}</h3>{award.description && <p>{award.description}</p>}</div></article>)}</div></section>
    </article>;
}
