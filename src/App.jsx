import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Routes, Route, useLocation, useParams } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { HomeIntro } from './components/HomeIntro';
import Home from './pages/Home/Home';
import Events from './pages/Events';
import { galleryEvents } from './pages/eventsData';
import Contact from './pages/Contact';
import Footer from './components/Footer';
const SBCommittee = lazy(() => import('./pages/Commitee'));
function PagePosition() {
  const {
    pathname,
    hash
  } = useLocation();
  useEffect(() => {
    const names = {
      '/': 'Home',
      '/events': 'Events & Gallery',
      '/committee': 'Committee',
      '/contact': 'Contact'

    };
    document.title = (names[pathname] || 'Page not found') + ' | IEEE SLIIT';
    const frame = requestAnimationFrame(() => {
      let anchor = hash.slice(1);
      try { anchor = decodeURIComponent(anchor); } catch { /* Ignore malformed URL encoding. */ }
      if (hash) document.getElementById(anchor)?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });else window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
function LegacyRedirect({ to }) { const { search, hash } = useLocation(); return <Navigate to={to + search + hash} replace />; }
function EventRedirect() { const { eventId } = useParams(); const id = eventId === 'abc' ? 'v2-1' : eventId; return <Navigate to={galleryEvents.some(event => event.id === id) ? '/events?event=' + encodeURIComponent(id) : '/events'} replace />; }
export default function App() {
  return <><PagePosition /><HomeIntro /><a className="skip" href="#main">Skip to content</a><Navbar />
    <main id="main" tabIndex={-1}><Suspense fallback={<p className="wrap status" role="status">Loading page…</p>}><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/committee" element={<SBCommittee />} /><Route path="/contact" element={<Contact />} />
      <Route path="/news" element={<LegacyRedirect to="/events" />} /><Route path="/contact-us" element={<LegacyRedirect to="/contact" />} /><Route path="/about" element={<Navigate to="/#why-heading" replace />} /><Route path="/chapters" element={<Navigate to="/#chapters" replace />} /><Route path="/events/:eventId" element={<EventRedirect />} />
      <Route path="*" element={<section className="wrap section"><h1>Page not found</h1><p>This page may have moved. Use the navigation to explore our community.</p></section>} />
    </Routes></Suspense></main><Footer />
  </>;
}
