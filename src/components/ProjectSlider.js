// src/components/ProjectSlider.js
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './ProjectSlider.css';

const ProjectSlider = ({ projects, loading }) => {
  const settings = {
    dots: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 3,    // For desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [       // <-- THIS IS THE FIX
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,  // For mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // 3. Add a loading state
  if (loading) {
    return <p style={{ textAlign: 'center' }}>Loading projects...</p>;
  }

  // 4. If no projects, show a message
  if (!projects || projects.length === 0) {
    return <p style={{ textAlign: 'center' }}>No projects found.</p>;
  }

  // 5. Update the slider to use the GitHub repo data structure
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {projects.map((project) => (
          <div className="project-slide" key={project.id}>
            <div className="project-card-slider">
              <h3>{project.name}</h3>
              <p>{project.description || 'No description provided.'}</p>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                 GitHub
              </a>
            </div>
          </div>
        ))}
      </Slider>
      
      <div className="slider-call-to-action">
        <Link to="/projects" className="cta-button">
          View All Projects
        </Link>
      </div>
    </div>
  );
}

export default ProjectSlider;