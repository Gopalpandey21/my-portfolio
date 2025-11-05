import React, { useEffect, useRef } from 'react';
import './MouseTrail.css';

const MouseTrail = () => {
  const numDots = 15; // Number of dots in the trail
  const dotRefs = useRef([]);
  // Use .fill().map() to create unique objects for each position
  const positions = useRef(Array(numDots).fill().map(() => ({ x: 0, y: 0 })));
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Mouse move listener
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationFrameId;
    const animate = () => {
      // The head (index 0) follows the mouse
      const head = positions.current[0];
      head.x += (mousePos.current.x - head.x) * 0.6; // Springiness (0.1 = slow, 0.9 = fast)
      head.y += (mousePos.current.y - head.y) * 0.6;

      // The rest of the body follows the dot in front
      for (let i = 1; i < numDots; i++) {
        const current = positions.current[i];
        const prev = positions.current[i - 1];
        
        current.x += (prev.x - current.x) * 0.5;
        current.y += (prev.y - current.y) * 0.5;
      }

      // Update all DOM elements
      dotRefs.current.forEach((dot, index) => {
        if (dot) {
          dot.style.transform = `translate(${positions.current[index].x}px, ${positions.current[index].y}px)`;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate(); // Start the animation loop

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Run only once on mount

  return (
    <>
      {[...Array(numDots)].map((_, index) => (
        <div
          key={index}
          className="trail-dot"
          ref={(el) => (dotRefs.current[index] = el)}
          style={{
            // This creates the "snake" tail effect
            width: `${20 - index * 1}px`, // Tapers off
            height: `${20 - index * 1}px`,
            opacity: 1 - index * (1 / numDots), // Fades out
          }}
        />
      ))}
    </>
  );
};

export default MouseTrail;