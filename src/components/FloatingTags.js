// src/components/FloatingTags.js
import React, { useMemo } from 'react';
import './FloatingTags.css';

const tags = [
  '<html>', '<body>', '<div>', '</span>', '</h1>', 
  '<p>', '<br>', '<code>', '{ }', '/>', 
  'npm', 'git', 'const', 'return', 'React'
];

const FloatingTags = () => {
  // Create a stable list of random styles
  const tagElements = useMemo(() => {
    const elements = [];
    // Create 20 floating tags
    for (let i = 0; i < 20; i++) {
      const tag = tags[Math.floor(Math.random() * tags.length)];
      const style = {
        left: `${Math.floor(Math.random() * 100)}%`, // Random horizontal position
        animationDuration: `${Math.floor(Math.random() * 15 + 10)}s`, // Random speed (10-25s)
        animationDelay: `${Math.floor(Math.random() * 5)}s`, // Random start delay
        fontSize: `${Math.floor(Math.random() * 2 + 1)}rem`, // Random size (1rem-3rem)
        opacity: Math.random() * 0.5 + 0.1, // Random opacity
      };
      elements.push({ tag, style });
    }
    return elements;
  }, []);

  return (
    <div className="floating-tags-container">
      {tagElements.map((item, index) => (
        <span key={index} className="floating-tag" style={item.style}>
          {item.tag}
        </span>
      ))}
    </div>
  );
};

export default FloatingTags;

