// src/pages/Home.js
import React from 'react'; // 1. Removed useState
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';
import ProjectSlider from '../components/ProjectSlider'; // Import slider
// 2. Removed BackgroundScene and SkillSelector imports

// 3. Kept 'projects' and 'loading' as props
const Home = ({ projects, loading }) => {
  // 4. Removed the useState for selectedSkill

  return (
    <>
      {/* 5. Removed the BackgroundScene component */}
      
      {/* 6. Removed the style prop from the home container */}
      <div className="home-container">
        
        <h1>Hi, I'm Gopal</h1>

        {/* 7. Kept the typing animation class */}
        <h2 className="typing-effect">I am a Web Developer</h2>
        
        <p>
          I'm a developer focused on building and scaling modern web applications. 
          My curiosity drives me to continuously learn and master the latest technologies.
        </p>

        <div className="social-links">
          <a href="https://github.com/Gopalpandey21" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/gopal-pandey-55809b270/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
        </div>
        
        {/* 8. Removed the SkillSelector component */}
      </div>

      {/* 9. Removed the style prop from the projects section */}
      <div className="home-projects-section">
        <h2>My Recent Projects</h2>
        <ProjectSlider projects={projects} loading={loading} />
      </div>
    </>
  );
}

export default Home;