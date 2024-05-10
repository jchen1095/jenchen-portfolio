import React from 'react';
import './case_study_page2.css'; // Import your CSS file
// import caseStudyImage from './case_study_1_image.jpg'; // Import your image
import oldartsocked from './artsocked.png';
import newartsocked from './revampedrr.png';
import hifipc from './hifi.png';
import hifiphone from './hifiphone.png';

function CaseStudy1() {
    return (
        <div>
            <header>
                <div className="container">
                    <h1>Iterative Design</h1>
                    <p><strong>Role:</strong> Team Designer</p>
                    <p><strong>Timeline: </strong>April 2024</p>
                </div>
            </header>

            <section>
                <div className="container">
                <div className="larger-text">
                    <p>Communicating with Warp, a terminal reimagined with AI and collaborative tools for better productivity, I worked with a team to create a design and Figma flow for the platform's "Community" function. This opportunity was for my UI/UX class to gain hands-on experience in designing in a team.</p>
                    <p>
                    You can follow along by viewing the Figma board <a href="https://www.figma.com/file/RkZZCZZ8VvhttbmdmLYRHH/Iterative-Design-Flows?type=design&node-id=486-27&mode=design" target="_blank"> here.
                    </a></p>
                </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2>THE DREAM</h2>
                    <p>The product currently lacks functionality for users to connect with others, share tools, or add extensions. This affects two primary user groups:
                    </p>
                    <ul>
                    <li>Creators, such as experienced developers who enjoy crafting and sharing tools</li>
                    <li>Consumers, who are seeking tools to aid specific tasks. Our aim is to introduce features facilitating tool discovery within the interface, fostering personal and professional growth, and enabling users to delve deeper into tools and methodologies without leaving the platform</li>
                    </ul>
                    <img src={oldartsocked} alt="Old artsocked website preview" className="case-study-image" />
                    
                </div>
            </section>
            <section>
                <div className="container">
                    <h2>GAINING A DEEPER UNDERSTANDING</h2>
                    <p>In addition to a low-contrast and small text navigation bar, there are redundant links, few accessibility labels, and few image alt text labeling. These isues make the website less accessible to users with visual impairments or other disabilities.
                    </p>
                    
                </div>
            </section>
            <section>
                <div className="container">
                    <h2>FIRST ATTEMPT</h2>
                    <p>In addition to a low-contrast and small text navigation bar, there are redundant links, few accessibility labels, and few image alt text labeling. These isues make the website less accessible to users with visual impairments or other disabilities.
                    </p>
                    
                </div>
            </section>
            <section className="results-section">
                <div className="container">
                    <h2>FEEDBACK</h2>
                    <p>The final implementation of this website</p>
                    <img src={newartsocked} alt="New artsocked website preview" className="case-study-image" />
                </div>
            </section>
            <section>
            <div className="container">
                <h2>SECOND ATTEMPT</h2>
                
                <div className="hifiimg-container">
                    <img src={hifipc} alt="Mockup for the PC version of the new website" className="hifiimg" />
                    <img src={hifiphone} alt="Mockup for the phone version of the new website" className="hifiimg" />
                    
                </div>
                <p class='caption'>The desktop (left) and mobile (right) final sketch renditions</p>
            </div>

            <section className="results-section">
                <div className="container">
                    <h2>FINAL MEETING</h2>
                    <p>The final implementation of this website</p>
                    <img src={newartsocked} alt="New artsocked website preview" className="case-study-image" />
                </div>
            </section>

            <section className="results-section">
                <div className="container">
                    <h2>ADDITIONAL ADJUSTMENTS</h2>
                    <p>The final implementation of this website</p>
                    <img src={newartsocked} alt="New artsocked website preview" className="case-study-image" />
                </div>
            </section>

            <section className="results-section">
                <div className="container">
                    <h2>REFLECTION</h2>
                    <p>The final implementation of this website</p>
                    <img src={newartsocked} alt="New artsocked website preview" className="case-study-image" />
                </div>
            </section>

        </section>
            
        </div>
    );
}

export default CaseStudy1;
