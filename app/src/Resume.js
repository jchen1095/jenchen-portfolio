import React from 'react';
import './resume.css'; // Import your CSS file
import resumePDF from './resume.pdf';

function Resume() {
    return (
        <div className="container">
            <h1>Resume</h1>
            <embed src={resumePDF} type="application/pdf" width="100%" height="800px" />
        </div>
    );
}

export default Resume;
