import React from 'react';
import './case_study_card.css'; // Import your CSS file

function CaseStudyCard({ caseStudyNumber, caseTitle, description, imageUrl }) {
    const cardClassName = `case-study-card case-study-${caseStudyNumber}`;

    const handleClick = () => {
        window.location.href = `/case_study_${caseStudyNumber}`;
    };

    return (
        <div className={cardClassName} onClick={handleClick}>
            <div>
                <img src={imageUrl} alt={caseTitle} className='image'/>
                <div className="card-content">
                    <h3 className="card-title">{caseTitle}</h3>
                    
                    <p className="card-description">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default CaseStudyCard;
