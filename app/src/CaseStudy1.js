import React from 'react';
import './case_study_page.css'; // Import your CSS file
// import caseStudyImage from './case_study_1_image.jpg'; // Import your image
import oldartsocked from './artsocked.png';
import hifipc from './hifi.png';
import hifiphone from './hifiphone.png';

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
                    <p><strong>For my UI/UX class, we were tasked with choosing an already-existing website and creating a more effective and accessible design. We then deployed this website as a responsive webpage.</strong></p>
                    <p>You can follow along by viewing the final product <a href="https://jchen1095.github.io/cs1300-responsiveredesign/index.html#">here</a> and the old website <a href="https://www.artsocked.com/">here</a>.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2>The Problem</h2>
                    <p>Unfortunately, the pre-existing website is not easy to use. The navigation bar and company title is difficult to see and the text is very small. The ratio of empty and image-filled space to text and buttons is large and shifts the focus away 
                        from shopping and learning more about the company. <strong>In the words of one customer, "the website reads more like a blog than a store, I was confused when I first got on the website if I was at the right place." </strong>
                        In general, users have reflected that this website is uncomfortable to use and not straightforward to navigate.
                    </p>
                    <img src={oldartsocked} alt="Old artsocked website preview" className="case-study-image" />
                    
                </div>
            </section>

            <section>
                <div className="container">
                    <h2>Accessibility</h2>
                    <p>In addition to a low-contrast and small text navigation bar, there are redundant links, few accessibility labels, and few image alt text labeling. These isues make the website less accessible to users with visual impairments or other disabilities.
                    </p>
                    
                </div>
            </section>
            <section>
                <div className="container">
                    <h2>First Attempt</h2>
                    <p>A priority was to add visual hierarchy and use grouping principles to create a more compact and concise information layout. I was hoping that this would reduce the "blog-like" nature of the original website.
                    </p>
                    <img src={hifipc} alt="Mockup for the PC version of the new website" className="hifiimg" />
                    <img src={hifiphone} alt="Mockup for the phone version of the new website" className="hifiimg" />
                </div>
            </section>
            <section>
                <div className="container">
                    <h2>Results</h2>
                    <p>The final implementation of this website
                    </p>
                </div>
            </section>
        </div>
    );
}

export default CaseStudy1;
