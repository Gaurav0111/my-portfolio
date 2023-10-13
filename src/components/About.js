import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <section id='whatido' className="about">
            <data>

                <h2 className='about_heading' >About Me</h2>
                <p className='about_data' >
                    Hello,
                    I am Gaurav Garwal, a highly motivated and forward-thinking individual with a strong educational background and a passion for technology and innovation. I hold a Bachelor of Computer Applications (BCA) degree from DIT University, Dehradun, where I achieved a remarkable CGPA of 9.26 out of 10. Currently, I am pursuing my Master of Computer Applications (MCA) at the same institution, with an expected completion date in May 2025.
                    Throughout my academic journey, I have excelled in various subjects and undertaken projects that demonstrate my commitment to excellence. These include the development of a Laboratory Analysis Report Generator, Front End Development, and Store Management System. These projects allowed me to apply my knowledge in practical scenarios and refine my problem-solving skills.
                    I have also gained valuable experience through internships. During my internship as a Software Technician at National Instruments, Bangalore, I actively contributed to real-world projects, enhancing my technical abilities and teamwork skills. Additionally, I interned at Aashaman Foundation, where I was later promoted to Group Manager. These experiences allowed me to develop my leadership, marketing, and communication skills.
                    In addition to my technical skills, including proficiency in Python programming, HTML5, CSS, JavaScript, and ReactJS, I am known for my dedication to continuous learning and improvement.
                    I am excited about the opportunity to explore new horizons and contribute to innovative projects. I look forward to connecting with professionals who share my passion for technology and progress.
                    Thank you for taking the time to get to know me.
                    <p>
                    Sincerely,
                    </p>
                    <p>
                    Gaurav Garwal
                    </p> 
                </p>
            </data>
            <div className='image_gaurav' >
          <img
            src={`${process.env.PUBLIC_URL}/image_gaurav.jpg`}
            alt="Instagram"
            className="image_gaurav"
          />
            </div>
        </section>
    );
}

export default About;
