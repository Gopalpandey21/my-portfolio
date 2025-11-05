// src/components/Navbar.js
import React, { useState } from 'react'; // 1. Import useState
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // 2. Import hamburger icons
import './Navbar.css';

const Navbar = () => {
  // 3. Add state to track if menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // 4. Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // 5. Function to close the menu (used when a link is clicked)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-name" onClick={closeMenu}>
          Gopal
        </Link>
      </div>

      {/* 6. Hamburger Icon (only visible on mobile) */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={20} />}
      </div>

      {/* 7. Add 'active' class based on state. Add 'onClick' to links */}
      <div className={`navbar-right ${isOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>
          About
        </Link>
        <Link to="/skills" className="nav-link" onClick={closeMenu}>
          Skills
        </Link>
        <Link to="/projects" className="nav-link" onClick={closeMenu}>
          Projects
        </Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>
          Contact
        </Link>
        <a
          href="/Gopal_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
          onClick={closeMenu}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;