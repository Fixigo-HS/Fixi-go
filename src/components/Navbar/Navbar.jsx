import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleLocation = () => {
      setActiveLink(window.location.pathname);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleLocation(); // Set initial active link
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-section">
          <div className="logo">
            <Link to="/" className="logo-link" onClick={() => setActiveLink('/')}>
              <span className="logo-text">Fixigo</span>
              <div className="logo-underline"></div>
            </Link>
          </div>
        </div>
        
        <div className="nav-section">
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About Us' },
              { path: '/services', label: 'Services' },
              { path: '/testimonials', label: 'Testimonials' },
              { path: '/contact', label: 'Contact Us' }
            ].map((link) => (
              <li key={link.path} className="nav-item">
                <Link 
                  to={link.path} 
                  className={`nav-link ${activeLink === link.path ? 'active' : ''}`}
                  onClick={() => {
                    setActiveLink(link.path);
                    setMenuOpen(false);
                  }}
                >
                  {link.label}
                  <div className="link-underline"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div 
          className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;