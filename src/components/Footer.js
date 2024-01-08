// src/components/Footer.js
import React, { useState } from 'react';
import '../styles/Footer.css';

function Footer() {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = () => {
    if (feedback.trim() === '') {
      alert('Please provide feedback before submitting.');
    } else {
      alert('Thank you for your feedback!');
    }
  };

  return (
    <footer className="footer">
      <div className="feedback">
        <p>Send Feedback Now</p>
        <input
          type="text"
          placeholder="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button className='footer-button' onClick={handleFeedbackSubmit}>Submit</button>
      </div>
      <div className="footer-text">
      <h1>Gaurav Garwal</h1>
        <p>&copy; {new Date().getFullYear()} Gaurav Garwal | All Rights Reserved</p>
        <p className='parara' >Email: garwalgaurav480@gmail.com</p>
      </div>
      <div>
        <p className="social-links">
          <a href="https://www.instagram.com/gaurav.garwal/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/gaurav.garwal.75" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.linkedin.com/in/gaurav-garwal/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
