import React from 'react';
import './case_study_page2.css'; // Import your CSS file
// import caseStudyImage from './case_study_1_image.jpg'; // Import your image
import sketch from './sketch.png';

import drive from './drive.png';
import publish from './publish.png';
import comm from './comm.png';
import itstyle from './itstyle.png';
import commWarpMov from './communityWarp.mov';
import profileMov from './profileWarp.mov';
import publishMov from './publishToolWarp.mov';

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
                    <p>Warp is a terminal reimagined with AI and collaborative tools for better productivity. I worked with a team in communication with Warp to create a design for the platform's "Community" function. </p>
                    <p>
                    You can follow along by viewing the Figma board <a href="https://www.figma.com/file/RkZZCZZ8VvhttbmdmLYRHH/Iterative-Design-Flows?type=design&node-id=486-27&mode=design" target="_blank"> here.
                    </a></p>
                </div>
                </div>
            </section>

            <section className="highlight-section">
                <div className="container">
                    <h2>THE DREAM</h2>
                    <p>The product currently lacks functionality for users to connect with others, share tools, or add extensions. This affects two primary user groups:
                    </p>
                    <ul>
                    <li>Creators, such as experienced developers who enjoy crafting and sharing tools</li>
                    <li>Consumers, who are seeking tools to aid specific tasks. </li>
                    </ul>
                    <p>Our aim is to introduce features facilitating tool discovery within the interface, fostering personal and professional growth, and enabling users to delve deeper into tools and methodologies without leaving the platform</p>
                    
                    
                </div>
            </section>
            <section>
                <div className="container">
                    <h2>FIRST: SKETCHING</h2>
                    <p>Referencing the current homepage and platform setup, I created 2 different end-to-end flows for solving our startup's problem:
                    </p>
                    <img src={sketch} alt="Sketches for the community page" className="case-study-image" />
                    <div className="outline">
                    <p><strong>General Takeaways:</strong></p>
                    <ul>
                        <li>Vertical sidebar for the community function seems to be most consistent with the other features of Warp, such as WarpAI and Warp Drive</li>
                        <li>Everyone on the team agreed that there should be a search function as well as other post features such as likes/downloads</li>
                    </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2>INITIAL MOCKUPS</h2>
                    <p>For first design, the team decided that priorities should include:
                    </p>
                    <ul>
                        <li><strong>Maximizing whitespace</strong> to keep the terminal visible, catering to the needs of engineers who often work with multiple components open (Drive, AI, etc.)</li>
                        <li><strong>Alignment and visual hierarchy</strong>, considering limited space for each component due to the consistent terminal view</li>
                    </ul>
                    <p>Despite the abundance of information, the goal was to maintain an organized and navigable user experience.</p>
                    <p><strong>We decided on 3 main features:</strong></p>
                    <ul>
                        <li>A new community page</li>
                        <li>Enhanced user profiles</li>
                        <li>Ability to publish a tool from the existing Warp Drive</li>
                    </ul>

                    
                </div>
            </section>
            <img src={comm} alt="Community flow outline" className="case-study-image-larger" />
            <p className='caption'> Flow for opening the community sidebar from the homepage</p>
            <img src={publish} alt="Tool publishing flow outline" className="case-study-image-larger" />
            <p className='caption'> Flow for publishing a tool from Warp Drive</p>
            <img src={drive} alt="Drive and tools flow outline" className="case-study-image-larger" />
            <p className='caption'> Flow for opening profile and looking at published tools from Drive</p>
            <section className='feedback'>
                <div className="container">
                    <h2>GETTING FEEDBACK</h2>
                    <p>We presented our above wireframes to both Warp, our client, and our peers in our UI/UX class. Below are is a summary of the critiques:</p>
                    <h3>From client:</h3>
                    <ul>
                        <li>Generally, the preliminary sketches and wireframes look good!</li>
                        <li>In next steps, incorporate the same profile view from Warp Drive into the community page</li>
                        <li>Client also requested for options for a user to install, uninstall, and rate a tool</li>
                    </ul>
                    
                    <h3>From peers:</h3>
                    <ul>
                        <li>After hearing that users might struggle to create their own tags when publishing tools, we noted that the publish modal for tools should feature auto-generated tags</li>
                    </ul>
                    <p>After implementing these changes into our original wireframes, we moved to develop more detailed and realistic mock-ups of the final product.</p>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2>FINAL DESIGN</h2>
                    <p>We developed a visual design style guide based on the initial rough style guide/brand kit provided by Warp. This enabled our team to grasp the intended visual language outlined by the client and to produce cohesive designs.</p>
                    <img src={itstyle} alt="Visual Style Guide" className="case-study-image" />
                    
                </div>
            <section className='feedback'>
            <div className="container">
                <div>
                <h2>FINAL FLOWS</h2>
                <p>The fully colored, detailed version of our design flows.</p>
                <p>Below is the walkthrough for the community side bar component.</p>
                    <video controls className='vid'>
                    <source src={commWarpMov} />
                    Your browser does not support the video tag.
                    </video>
                <p>Here is the walkthrough for the tool publishing workflow.</p>
                    <video controls className='vid'>
                    <source src={publishMov} />
                    Your browser does not support the video tag.
                    </video>
                <p>Finally, the walkthrough for the profile component, including editing profile and tools.</p>
                    <video controls className='vid'>
                    <source src={profileMov} />
                    Your browser does not support the video tag.
                    </video>
                </div>
                </div>
            </section>

            {/* <section>
                <div className="container">
                    <h2>FINAL CLIENT FEEDBACK</h2>
                    <p>We concluded this project by meeting with Warp and presenting our final prototypes. We received mostly positive feedback which was encouraging and exciting. There were a few key points of feedback to address in our future designs:</p>
                    <ol>
                        <li>Inconsistency in spacing: client noted some irregularities in spacing within the community tab, with certain tags having excessive whitespace and widgets containing tools appearing too spread out</li>
                        <li>Profile integration into the community: we discussed the potential benefits of relocating the profile page to the community tab. This move could enhance user experience by centralizing key features and streamlining navigation within the secondary aspect of the Warp platform</li>
                    </ol>
                </div>
            </section>

            <section >
                <div className="container">
                    <h2>ADDITIONAL ADJUSTMENTS</h2>
                    <p>To finalize our work, we further implemented the feedback from our final meeting with Warp:</p>
                    
                </div>
            </section> */}

            <section >
                <div className="container">
                    <h2>REFLECTION</h2>
                    <p>Participating in the complete iterative design process with Warp posed an exciting challenge and was a valuable learning experience. This project afforded me the chance to hone my collaborative design skills within a team environment, reflecting the dynamics of cross-functional teams in industry.</p>
                    
                </div>
            </section>

        </section>
            
        </div>
    );
}

export default CaseStudy1;
