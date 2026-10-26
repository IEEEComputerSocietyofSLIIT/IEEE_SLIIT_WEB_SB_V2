import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Brand } from './Brand';
import { MEMBERSHIP_URL } from './siteLinks';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  const {
    pathname
  } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const escape = e => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);
  return <header className="header"><div className="wrap header-inner"><Brand />
    <nav className={'nav' + (open ? ' open' : '')} id="navigation" aria-label="Main navigation">
      <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
      <Link to="/events" aria-current={pathname === '/events' ? 'page' : undefined} onClick={() => setOpen(false)}>Events &amp; Gallery</Link>
      <NavLink to="/committee" onClick={() => setOpen(false)}>Committee</NavLink><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
    </nav><a className="button header-cta" href={MEMBERSHIP_URL}>Join IEEE </a>
    <button ref={button} className="menu" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? '×' : '☰'}</button>
  </div></header>;
}
