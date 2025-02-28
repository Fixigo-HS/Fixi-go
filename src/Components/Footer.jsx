import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        {/* Instagram Icon */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        {/* Facebook Icon */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        {/* Twitter Icon */}
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <p>&copy; {new Date().getFullYear()} Fixigo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;