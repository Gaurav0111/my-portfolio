import React from 'react';
import '../styles/Contact.css';
import linkedInLogo from '../images/linkedin-logo.jpeg'; // Import your LinkedIn logo image
import instagramLogo from '../images/instagram-logo.jpeg'; // Import your Instagram logo image
import githubLogo from '../images/github-logo.jpeg'; // Import your GitHub logo image

function Contact() {
  return (
    <section id='contact' className="contact">
      <data className="contact-data">
        <h2 className="contact_heading">Contact Me</h2>
        <p>Do you speak Hindi? It's okay if you don't.</p>
        <p>I speak English too.</p>
        <br></br>
        <p>Email: <span>garwalgaurav480@gmail.com</span></p>
        <p>Contact Number: <span>+91 9568265862</span></p>
        <br></br>
        <div className="social-media-links">
          <a href="https://www.linkedin.com/in/gaurav-garwal/" target="_blank" rel="noopener noreferrer">
            <img src={linkedInLogo} alt="LinkedIn" /> <span className='spannnnn'>Connect me on LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/gaurav.garwal/" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" /> <span className='spannnnn' >Follow me on Instagram</span>
          </a>
          <a href="https://github.com/Gaurav0111" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" /> <span className='spannnnn' >View my work on Github</span>
          </a>
        </div>
      </data>
      <div className="image_gaurav">
        <img
          src={`${process.env.PUBLIC_URL}/contact-me.jpg`}
          alt="Instagram"
          className="image_gaurav"
        />
      </div>
    </section>
  );
}

export default Contact;
