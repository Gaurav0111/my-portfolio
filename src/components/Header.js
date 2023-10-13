import React from "react";
import '../styles/Header.css';

function Header() {
  return (
    <header id="header" >
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/your-image.avif`}
          alt="background-image"
          className="background-image"
        />
      </div>
      <section className="headerCSS">
        <div className="header-left">
          <a href="#home">Gaurav</a>
        </div>
        <div className="header-center">
          <ul>
            <a href="#header" className='header-text'>Home</a>
            <a href="#contact" className='header-text'>Contact</a>
            <a href="#resume" className='header-text'>Resume</a>
            <a href="#project" className='header-text'>Project</a>
            <a href="#whatido" className='header-text'>What I Do</a>
          </ul>
        </div>
        <div className="header-right">
          <a href="https://www.linkedin.com/in/gaurav-garwal/" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/linkedin-logo.jpeg`}
              alt="LinkedIn"
              className="logo linkedin"
            />
          </a>
          <a href="https://auth.geeksforgeeks.org/user/garwalgatsl7/practice" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/instagram-logo.jpeg`}
              alt="Instagram"
              className="logo instagram"
            />
          </a>
          <a href="https://github.com/Gaurav0111" target="_blank">
            <img
              src={`${process.env.PUBLIC_URL}/github-logo.jpeg`}
              alt="GitHub"
              className="logo github"
            />
          </a>
        </div>
      </section>
      <div className="datasection">
        <p className='para_1 para_data'>Welcome</p>
        <p className='para_data para_2'>I'm a Developer</p>
        <p className='para_data para_3'>Based in Dehradun</p>
        <button className='btnnn' herf='#contact'>Hire Me</button>
      </div>
    </header>
  )
}
export default Header;
