import React from 'react';
import './projects.css'; // Import your CSS file
import { Routes, Route } from 'react-router-dom';
import CaseStudy1 from './CaseStudy1.js';
import CaseStudy2 from './CaseStudy2.js';
import CaseStudyCard from './CaseStudyCard.js'; // Import the CaseStudyCard component

function Projects() {
    return (
        <div className="container">
            <h1>Projects</h1>
            <Routes>
                <Route path="/case_study_1" element={<CaseStudy1 />} />
                <Route path="/case_study_2" element={<CaseStudy2 />} />
            </Routes>
            <div className="case-study-list">
                <CaseStudyCard caseStudyNumber={1} description="Description of Case Study 1" />
                <CaseStudyCard caseStudyNumber={2} description="Description of Case Study 2" />
                {/* Add more CaseStudyCard components for additional case studies */}
            </div>
        </div>
    );
}

export default Projects;
