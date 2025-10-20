import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logos from '../../assets/logos';
import './Navbar.css';
import Icons from '../../assets/icons';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';  // disable scroll
    } else {
      document.body.style.overflow = 'auto';    // re-enable scroll
    }

    // cleanup (when component unmounts)
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar__s1'>
          <Link to="/" className="navbar__s1__logo">
            <img src={Logos.IEEE} alt="SLIIT IEEE Student Branch Logo" />
          </Link>
        </div>

        <div className='navbar__s2'>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/events">Events</Link>
          <Link to="/chapters">Chapters</Link>
          <Link to="/commitee">Commitee</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className='navbar__s3'>
          <button>Join Now</button>
        </div>

        <div className='navbar__s4'>
          <img
            src={Icons.menubar}
            alt="Menu-Bar"
            onClick={() => setIsMenuOpen(true)}
            style={{ display: isMenuOpen ? "none" : "block" }}
          />
          <img
            src={Icons.close}
            alt="Close-Icon"
            onClick={() => setIsMenuOpen(false)}
            style={{ display: isMenuOpen ? "block" : "none" }}
          />
        </div>
      </nav>

      {isMenuOpen && (
        <div className='responsive__navbar'>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/events" onClick={() => setIsMenuOpen(false)}>Events</Link>
          <Link to="/chapters" onClick={() => setIsMenuOpen(false)}>Chapters</Link>
          <Link to="/commitee" onClick={() => setIsMenuOpen(false)}>Commitee</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <button>Join Now</button>
        </div>
      )}
    </>
  );
};
