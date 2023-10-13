// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="feedback">
        <p>Send Feedback Now</p>
        <input type="email" placeholder="Your Email" />
      </div>
      <h1>Gaurav Garwal</h1>
      <div className="footer-text">
        <p>&copy; {new Date().getFullYear()} Gaurav Garwal | All Rights Reserved</p>
        <p className='parara' >Email: garwalgaurav480@gmail.com</p>
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
