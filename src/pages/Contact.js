// src/pages/Contact.js
import React from 'react';
import './Contact.css'; // Make sure to import the CSS

const Contact = () => {
  return (
    <div className="page-container contact-page">
      <h1>Get In Touch</h1>
      <p>
        I'm always open to discussing new projects, creative ideas, or 
        opportunities. Feel free to send me an email.
      </p>

      {/* THIS IS THE KEY:
        The 'mailto:' tells the browser to open the user's 
        default email client.
      */}
      <a 
        href="mailto:pandeygopal1021@gmail.com" 
        className="email-button"
        
      >
        Say Hello
      </a>
      
      <p>
        Or feel free to connect with me on 
        <a 
          href="https://www.linkedin.com/in/gopal-pandey-55809b270/" 
          target="_blank" 
          rel="noopener noreferrer"
        > 
          LinkedIn
        </a>.
      </p>
    </div>
  );
}

export default Contact;