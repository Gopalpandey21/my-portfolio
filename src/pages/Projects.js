// src/pages/Projects.js
import React from 'react';
// 1. We NO LONGER need to import '../data/projectsData';
import './Projects.css';

// 2. Accept 'projects' and 'loading' as props
const Projects = ({ projects, loading }) => {

  // 3. Add loading and empty states
  if (loading) {
    return <div className="page-container"><p>Loading projects...</p></div>;
  }

  if (!projects || projects.length === 0) {
    return <div className="page-container"><p>No projects found.</p></div>;
  }

  // 4. Update the map to use the GitHub repo data structure
  return (
    <div className="page-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            {/* GitHub API uses 'name' for the title */}
            <h3>{project.name}</h3>
            
            {/* Use 'description' or a fallback */}
            <p>{project.description || 'No description provided.'}</p>
            
            <div className="project-links">
              {/* GitHub API uses 'html_url' for the GitHub link */}
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              
              {/* GitHub API uses 'homepage' for the live demo link.
                You must add this link in your GitHub repo's "About" section.
              */}
              {project.homepage && (
                <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;