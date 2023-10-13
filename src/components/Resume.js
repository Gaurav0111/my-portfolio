import React from 'react';
import '../styles/Resume.css';

function Resume() {
    const pdfUrl = `${process.env.PUBLIC_URL}/resume_updated.pdf`;

    return (
        <section id='resume' className='resume'>
            <div>
                <img
                    src={`${process.env.PUBLIC_URL}/table-iamge.jpeg`}
                    alt="background-image"
                    className="background-image"
                />
                <div className='resume-printing'>
                    <h2 className='resume-heading'>Resume</h2>
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                        <img
                            src={`${process.env.PUBLIC_URL}/resume-image.png`}
                            alt="Resume"
                            className="resume-image"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Resume;
