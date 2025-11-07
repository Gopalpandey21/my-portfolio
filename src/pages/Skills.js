// src/pages/Skills.js
import React from 'react';

// 1. Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';

// 2. Import NEW modules: EffectCards, Autoplay, Pagination
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';

// 3. Import Swiper's CSS files
import 'swiper/css';
import 'swiper/css/effect-cards'; // <-- NEW
import 'swiper/css/pagination';

// Import your icons
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, 
  FaNodeJs, FaDatabase, FaGithub 
} from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

// Import the CSS
import './Skills.css'; 

// Your existing skills array
const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'Git & GitHub', icon: <FaGithub /> },
];

const Skills = () => {
  return (
    <div className="page-container">
      <h1>My Skills</h1>
      
      <Swiper
        effect={'cards'}      // 4. Use the "Cards" effect
        grabCursor={true}
        loop={true}

        effectCards={{
          perSlideOffset: 40, // This is the new line
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCards, Pagination, Autoplay]} // 5. Activate new modules
        className="mySkillSwiper" // Use custom class
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            {/* We're using the same skill-card */}
            <div className="skill-card">
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Skills;