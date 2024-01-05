import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="whatido" className="about">
      <data>
        <h2 className="about_heading">About Me</h2>
        <p className="about_data">
          Hello, I'm Gaurav Garwal, a passionate developer with a strong foundation in computer applications and a drive for continuous learning.
          <br />
          <br />
          I'm currently pursuing my MCA at DIT University, Dehradun, building upon my BCA degree with a remarkable CGPA of 9.28.
          <br />
          <br />
          Key highlights of my experience:
          <ul>
            <li>Developed a Laboratory Analysis Report Generator, Front End Development, and Store Management System to apply knowledge in practical scenarios and refine problem-solving skills.</li>
            <li>Interned as a Software Technician at National Instruments, actively contributing to real-world projects and enhancing technical abilities and teamwork skills.</li>
            <li>Promoted to Group Manager during internship at Aashaman Foundation, demonstrating leadership, marketing, and communication skills.</li>
            <li>Proficient in Python, HTML5, CSS, JavaScript, and ReactJS.</li>
          </ul>
          <br />
          I'm eager to explore new horizons and contribute to innovative projects.
          <br />
          Let's connect and create something remarkable!
        </p>
      </data>
      <div className="image_gaurav">
        <img
          src={`${process.env.PUBLIC_URL}/image_gaurav.jpg`}
          alt="Gaurav Garwal"
          className="image_gaurav"
        />
      </div>
    </section>
  );
}

export default About;
