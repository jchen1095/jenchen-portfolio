import React from 'react';
import './projects.css'; // Import your CSS file
import { Routes, Route } from 'react-router-dom';
import CaseStudy1 from './CaseStudy1.js';
import CaseStudy2 from './CaseStudy2.js';
import CaseStudyCard from './CaseStudyCard.js'; // Import the CaseStudyCard component
import responsivePic from './responsive.png';


function Projects() {
    return (
        <div className="container">
            <h1>Projects</h1>
            <Routes>
                <Route path="/case_study_1" element={<CaseStudy1 />} />
                <Route path="/case_study_2" element={<CaseStudy2 />} />
            </Routes>
            <div className="case-study-list">
                <CaseStudyCard caseStudyNumber={1} caseTitle={"Responsive Redesign"} description="Implementation of responsive, re-vamped sticker shop website" imageUrl={responsivePic} languages={['HTML', 'CSS', 'Figma']}/>
                <CaseStudyCard caseStudyNumber={2} caseTitle={"Iterative Design"} description="Description of Case Study 2" languages={['HTML', 'CSS', 'JavaScript']}/>
                {/* Add more CaseStudyCard components for additional case studies */}
            </div>
        </div>
    );
}

export default Projects;
