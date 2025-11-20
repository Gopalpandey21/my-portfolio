// src/pages/Skills.js
import React from 'react';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt 
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPython } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  // Easy to add more skills here
  const skills = [
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "Express.js", icon: <SiExpress color="#000000" /> }, // Black/White usually handled by theme
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "Python", icon: <SiPython color="#3776AB" /> },
  ];

  return (
    <div className="page-container">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon-wrapper">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;