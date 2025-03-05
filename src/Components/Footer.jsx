import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Import Instagram and Facebook icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        {/* Instagram Icon */}
        <a href="https://www.instagram.com/fixi_go/?next=%2F" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
        {/* Facebook Icon */}
        <a href="https://www.facebook.com/profile.php?id=61573795413881" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon facebook" />
        </a>
        {/* X (Twitter) Icon */}
        <a href="https://x.com/Fixi_go" target="_blank" rel="noopener noreferrer">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            className="icon x-logo"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <p>&copy; {new Date().getFullYear()} Fixigo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;