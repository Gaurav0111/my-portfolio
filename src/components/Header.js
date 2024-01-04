// header.js
import React from "react";
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Gaurav</div>
        <nav>
          <ul>
            <li><a href="#header" className="header-text">Home</a></li>
            <li><a href="#contact" className="header-text">Contact</a></li>
            <li><a href="#resume" className="header-text">Resume</a></li>
            <li><a href="#project" className="header-text">Project</a></li>
            <li><a href="#whatido" className="header-text">What I Do</a></li>
          </ul>
        </nav>
        <div className="social-media">
          <a href="#"><img src={`${process.env.PUBLIC_URL}/linkedin-logo.jpeg`} alt="LinkedIn" width="40" height="40" /></a>
          <a href="#"><img src={`${process.env.PUBLIC_URL}/github-logo.jpeg`} alt="GitHub" width="40" height="40" /></a>
          <a href="#"><img src={`${process.env.PUBLIC_URL}/instagram-logo.jpeg`} width="40" height="40" /></a>
        </div>
      </div>
      <div className="hero-text">
        <h1>This is Gaurav.</h1>
        <p>I am a passionate web developer with a knack for creating beautiful and user-friendly websites.</p>
        <a href="mailto:garwalgaurav480@gmail.com" className="button">Hire me</a>
      </div>
    </header>
  );
}

export default Header;
