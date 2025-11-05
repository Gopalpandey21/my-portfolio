// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links-footer">
        <a href="https://github.com/Gopalpandey21" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/gopal-pandey-55809b270/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Gopal All rights reserved.</p>
    </footer>
  );
}

export default Footer;