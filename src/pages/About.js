// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="page-container">
      <h1>About Me</h1>
      <p>
        I’m Gopal Pandey, a passionate and detail-oriented <span style={{ fontWeight: 'bold' }}>Full-Stack Developer </span>currently pursuing my Master of Computer Applications at Graphic Era Hill University, Haldwani. I enjoy building efficient, user-focused web applications that blend functionality with clean design.

        I’ve worked on projects like a Smart Event Management System with QR-based attendance tracking and a Student Feedback System that improves communication between students and faculty. My tech stack includes React, Node.js, Express.js, Django, MongoDB, Tailwind CSS, and JavaScript.

        I’m always eager to learn new technologies, solve real-world problems, and collaborate on impactful projects. My goal is to grow as a developer while contributing to innovative and scalable software solutions.
      </p>

      <h2>Education</h2>
      <div>
        <h3> Master of Computer Applications</h3>
        <p>Graphic Era Hill University Haldwani | 2024 - 2026</p>

      </div>
      {/* You can add more education or experience sections here */}
    </div>
  );
}

export default About;