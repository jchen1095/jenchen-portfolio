import React from 'react';
import './case_study_page1.css'; // Import your CSS file
// import caseStudyImage from './case_study_1_image.jpg'; // Import your image
import oldartsocked from './artsocked.png';
import newartsocked from './revampedrr.png';
import newartsocked2 from './newartsocked2.png';
// import newartsocked2 from './artsockednew2.png';
import oldartsocked2 from './oldartsocked2.png';
import hifipc from './hifi.png';
import lofipc from './lofi.png';
import hifiphone from './hifiphone.png';
import vsguide from './visualstyle.png';
import imp from './implemented.png';


function CaseStudy2() {
    return (
        <div>
            <header>
                <div className="container">
                    <h1>Responsive Redesign</h1>
                    <p><strong>Role:</strong> Sole Designer, Sole Developer</p>
                    <p><strong>Timeline: </strong>March 2024</p>
                </div>
            </header>

            <section>
                <div className="container">
                <div className="larger-text">
                    <p>In my UI/UX class, I chose an already-existing website and created a more effective and accessible design for the company. I then deployed this website as a responsive webpage.</p>
                    <p>You can follow along by viewing the final product <a href="https://jchen1095.github.io/cs1300-responsiveredesign/index.html#">here</a> and the old website <a href="https://www.artsocked.com/">here</a>.</p>
                </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2>THE PROBLEM & RESEARCH</h2>
                    <p>Unfortunately, the pre-existing website is not easy to use. <strong>In the words of one customer, "the website reads more like a blog than a store, I was confused when I first got on the website if I was at the right place." </strong>
                    
                    </p>
                    
                    <p>Below is what the website's home page looked like:</p>
                    <img src={oldartsocked} alt="Old artsocked website preview" className="case-study-image" />
                    <p>As you scroll down, you will also find:</p>
                    <img src={oldartsocked2} alt="Old artsocked website preview" className="case-study-image" />
                    {/* <img src={artsockedold2} alt="Old artsocked website preview" className="case-study-image" /> */}
                    <p>I noted some more issues:</p>
                    <ul>
                        <li><strong>Small text </strong>in the navigation bar and company title is difficult to see</li>
                        <li><strong>Large spacing and images </strong>are disproportional to the text and buttons, shifting the focus away 
                        from shopping and learning more about the company</li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2>CONSIDERING ACCESSIBILITY</h2>
                    <p>In addition to a low-contrast and small text navigation bar, there are <strong>redundant links, few accessibility labels, and few image alt text labeling.</strong> These isues make the website less accessible to users with visual impairments or other disabilities.
                    </p>
                    
                </div>
            </section>
            <section className="results-section">
                <div className="container">
                    <h2>RESULTS</h2>
                    <p>Below is the final implementation of this website.</p>
                    <img src={newartsocked} alt="New artsocked website preview" className="case-study-image" />
                    <img src={newartsocked2} alt="New artsocked website preview" className="case-study-image" />
                    <p>Notable changes include:</p>
                    <ul>
                        <li>Higher contrast colors and larger font</li>
                        <li>Aria labels and alt tags when appropriate</li>
                        <li>Centered text, which better faciltates reading and navigation</li>
                        <li>Larger buttons</li>
                        <li>"favorites" carosel label is centered and larger in font size</li>
                        <li>"favorites" carosel item cards are larger and easier to see</li>
                    </ul>
                </div>
            </section>
            <section>
            <div className="container">
                <h2>THE PROCESS</h2>
                <p>I first created a rough sketch of what the layout for the new website should look like. This sketch was colorless and mainly to visualize the general components. Lots of comments were added:</p>
                <img src={lofipc} alt="Sketch for the PC version of the new website" className="lofi" />
                
                <p>After creating the sketch, I created mockups of the desktop, tablet, and mobile renditions of the new website in full color and detail. I added sticker PNGs that I wanted to be 'movable' using the cursor to mimick the 'sticker experience' virtually.</p>
                <div className="hifiimg-container">
                    <img src={hifipc} alt="Mockup for the PC version of the new website" className="hifiimg" />
                    <img src={hifiphone} alt="Mockup for the phone version of the new website" className="hifiimg" />
                    
                </div>

                <p class='caption'>The desktop (left) and mobile (right) final sketch renditions</p>
                <p>In order to maintain uniformity, I also created a new visual style guide for the website:</p>
                <img src={vsguide} alt="Visual Style guide of colors and components in Figma" className="hifiimg" />
                <p>This style guide is especially important because a lot of the company's original color palette was not WebAIM Wave approved, in other words the colors were not high contrast enough. The new, high-contrast colors are included in the style guide.</p>
            </div>
        </section>
        <section>
                <div className="container">
                    <h2>RESPONSIVE IMPLEMENTATION</h2>
                    <p>Making the website responsive involved a lot of Inspect-using and playing around with the dimensions to make sure that all the items are still properly aligned at different frame dimensions.</p>
                    <p>If you open the webpage in desktop and decrease your window width, the navbar will convert to a hamburger menu as indicated in the mockups.</p>
                    <img src={imp} alt="Mobile implementation" className="hifiimg" />
                    <p>In the future, I hope to get the sticker PNGs working so that customers can have fun "putting stickers" on the website interface.</p>
                </div>
            </section>
        <section>
            <div className="container">
                <h2>REFLECTING ON THE OUTCOME</h2>
                <p>This project was challenging for both my coding and design skills, but at the same time incredibly rewarding. Below are my major takeaways:</p>
                <ul>
                <li>Visual Hierarchy and Gestalt Principles are crucial for establishing an organized and effective structure for a website and its information</li>
                <li>Have multiple steps/layers in development, with different levels of complexity, is very helpful. Following the flow of creating sketches -> Lo-fi wireframes -> Hi-fi mockups before beginning to code the website saved me a lot of time and work in the long run as general designs were already developed so transitioning these design ideas to code was made as straightforward as possible.</li>
                <li>Accessibility design choices should be checked before website development. I did not check if my colors were high-contrast enough before developing the website, so I had to go back and find new colors and implement these afterward.</li>
                <li>Thinking ahead during the design process on how to use containers to store website components is a helpful strategy to further enhance the transition from design to code later on. This can be done in Figma by creating different frames for different containers.</li>
                </ul>
                    
            </div>
        </section>
        </div>

    );
}

export default CaseStudy2;
