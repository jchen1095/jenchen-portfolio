import React from 'react';
import './projects.css'; // Import your CSS file

function CaseStudyCard({ caseStudyNumber, description }) {
    // Define a className based on the case study number
    const cardClassName = `case-study-card case-study-${caseStudyNumber}`;

    return (
        <div className={cardClassName}>
            <a href={`/case_study_${caseStudyNumber}`}>
                <div>
                    <h3>Case Study {caseStudyNumber}</h3>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
}

export default CaseStudyCard;
