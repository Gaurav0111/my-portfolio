import React from 'react';
import '../styles/Projects.css';
import project1Image from '../images/project1.png'; // Import your project images
import project2Image from '../images/project2.png'; // Import your project images
import project3Image from '../images/project3.png'; // Import your project images

function Projects() {
    const projects = [
        {
            title: 'Project 1',
            description: 'Laboratary Report Generator',
            url: 'https://github.com/Gaurav0111/Python-Projects/blob/main/index.py',
            image: project1Image, // Assign the image for Project 1
        },
        {
            title: 'Project 2',
            description: 'General Store Management System',
            url: 'https://github.com/Gaurav0111/Python-Projects/tree/main/general_store_management',
            image: project2Image, // Assign the image for Project 2
        },
        {
            title: 'Project 3',
            description: 'Personal Portfolio',
            url: 'https://github.com/Gaurav0111/my-portfolio',
            image: project3Image, // Assign the image for Project 2
        },
        {
            title: 'Project 4',
            description: 'Description of Project 2',
            url: 'https://example.com/project2',
            image: project2Image, // Assign the image for Project 2
        },
        {
            title: 'Project 4',
            description: 'Description of Project 2',
            url: 'https://example.com/project2',
            image: project2Image, // Assign the image for Project 2
        },
        {
            title: 'Project 4',
            description: 'Description of Project 2',
            url: 'https://example.com/project2',
            image: project2Image, // Assign the image for Project 2
        },
    ];

    return (
        <section id='project' className="projects_section">
            <h2>Projects</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <img src={project.image} alt={project.title} className='project-image' />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: '#000' }}>
                            Visit Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
