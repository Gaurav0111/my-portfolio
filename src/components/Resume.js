// Resume.js
import React from 'react';
import '../styles/Resume.css';

function Resume() {
    const pdfUrl = `${process.env.PUBLIC_URL}/resume_gaurav.pdf`;

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Gaurav_Resume.pdf';
        link.click();
    };

    return (
        <section id='resume' className='resume'>
            <div>
                <img
                    src={`${process.env.PUBLIC_URL}/table-image.jpeg`}
                    alt="background-image"
                    className="background_image_resume"
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
                <div className='para_1' >
                    <p className="get-to-know">Get to know me better!</p>
                    <button onClick={handleDownloadResume}>Download Resume</button>
                </div>
            </div>
        </section>
    );
}

export default Resume;
