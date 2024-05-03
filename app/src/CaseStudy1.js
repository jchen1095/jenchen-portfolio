import React from 'react';
import './case_study_page.css'; // Import your CSS file
// import caseStudyImage from './case_study_1_image.jpg'; // Import your image

function CaseStudy1() {
    return (
        <div>
            <header>
                <div className="container">
                    <h1>Responsive Redesign</h1>
                </div>
            </header>

            <section>
                <div className="container">
                    <p>This is a detailed description of Case Study 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor ante a justo tempor ultricies. Vestibulum ac risus in nisi lobortis lacinia. Ut luctus bibendum dolor, nec vehicula quam luctus eu. Phasellus et lectus vel nisi viverra ullamcorper. Nulla facilisi. Aenean commodo quam ut felis pharetra aliquet.</p>

                    <p>Nulla facilisi. Mauris pharetra sit amet nisl sit amet iaculis. Donec ultrices, neque ut lacinia vulputate, nisl ipsum bibendum ligula, in lobortis ex purus nec justo. Donec nec eros magna. Sed at pulvinar turpis. Nam vel dictum magna, sit amet posuere enim. Vestibulum nec felis non tortor semper mattis id nec enim.</p>

                    {/* <img src={caseStudyImage} alt="Case Study 1 Image" className="case-study-image" />
                     */}
                    <p>Nulla facilisi. Mauris pharetra sit amet nisl sit amet iaculis. Donec ultrices, neque ut lacinia vulputate, nisl ipsum bibendum ligula, in lobortis ex purus nec justo. Donec nec eros magna. Sed at pulvinar turpis. Nam vel dictum magna, sit amet posuere enim. Vestibulum nec felis non tortor semper mattis id nec enim.</p>
                </div>
            </section>
        </div>
    );
}

export default CaseStudy1;
