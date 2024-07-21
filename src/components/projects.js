import React from 'react';
import '../styles/Projects.css';

const projectImages = {
  project1: require('../images/project1.png'),
  project2: require('../images/project2.png'),
  project3: require('../images/project3.png'),
  project4: require('../images/project4.png'),
  project5: require('../images/project5.png'),
};

function Projects() {
  const projects = [
    {
      id: 'project1',
      title: 'Laboratory Report Generator',
      description: 'Generates comprehensive laboratory reports for cattle field data.',
      url: 'https://github.com/Gaurav0111/cattle_filed_report_generation',
      image: projectImages.project1,
    },
    {
      id: 'project2',
      title: 'General Store Management System',
      description: 'General Store Management System',
      url: 'https://github.com/Gaurav0111/Python-Projects/tree/main/general_store_management',
      image: projectImages.project2,
    },
    {
      id: 'project3',
      title: 'Personal Portfolio',
      description: 'Personal Portfolio',
      url: 'https://github.com/Gaurav0111/my-portfolio',
      image: projectImages.project3,
    },
    {
      id: 'project4',
      title: 'Restaurant front-end Webpage',
      description: 'Restaurant front-end Webpage',
      url: 'https://github.com/Gaurav0111/Html-CSS-project',
      image: projectImages.project4,
    },
    {
      id: 'project5',
      title: 'Task-manager',
      description: 'Developed a comprehensive task management system with a Swing-based GUI',
      url: 'https://github.com/Gaurav0111/task_manager',
      image: projectImages.project5,
    },
    {
      id: 'project6',
      title: 'Description of Project 6',
      description: 'Description of Project 6',
      url: 'https://example.com/project2',
      image: projectImages.project2,
    },
  ];

  return (
    <section id="project" className="projects_section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
