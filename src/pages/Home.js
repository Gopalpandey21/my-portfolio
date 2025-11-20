// src/pages/Home.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProjectSlider from '../components/ProjectSlider';
import './Home.css'; 

// --- 1. IMPORT YOUR OTHER PAGES ---
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
// ----------------------------------

const Home = ({ projects, loading }) => {
  return (
    <>
      {/* --- 1. Main Home Section (Visible on both) --- */}
      <div className="home-container">
        <h1>Hi, I'm Gopal</h1>
        <h2 className="typing-effect">I am a Web Developer</h2>
        <p>
          I'm a developer focused on building and scaling modern web applications. 
          My curiosity drives me to continuously learn and master the latest technologies.
        </p>

        <div className="social-links">
          <a href="https://github.com/Gopalpandey21" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/gopal-pandey-55809b270/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* --- 2. Slider Section (You can keep or hide this on mobile) --- */}
      <div className="home-projects-section">
        <h2>My Recent Projects</h2>
        <ProjectSlider projects={projects} loading={loading} />
      </div>

      {/* --- 3. NEW: Mobile Only Section --- */}
      <div className="mobile-only-view">
        
        {/* Render About Page */}
        <div className="mobile-section">
          <About />
        </div>

        {/* Render Skills Page */}
        <div className="mobile-section">
          <Skills />
        </div>

        {/* Render Projects Page (Pass the props!) */}
        <div className="mobile-section">
          <Projects projects={projects} loading={loading} />
        </div>

        {/* Render Contact Page */}
        <div className="mobile-section">
          <Contact />
        </div>

      </div>
      {/* ----------------------------------- */}
    </>
  );
}

export default Home;