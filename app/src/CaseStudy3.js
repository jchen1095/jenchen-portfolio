import React from 'react';
import './case_study_page3.css'; // Import your CSS file
// import caseStudyImage from './case_study_1_image.jpg'; // Import your image
import oldartsocked from './artsocked.png';
import newartsocked from './revampedrr.png';
import hifipc from './hifi.png';
import hifiphone from './hifiphone.png';

function CaseStudy3() {
    return (
        <div>
            <header>
                <div className="container">
                    <h1>Local Search & Metaheuristics</h1>
                    <p><strong>Role:</strong>Team member (2 people team)</p>
                    <p><strong>Timeline: </strong>April-May 2024</p>
                </div>
            </header>

            <section >
                <div className="container">
                <div className="larger-text">
                    <p>For the culminating project of Foundations of Prescriptive Analytics, a graduate computer science course on optimization algorithms and technology, I implemented a model that uses local search and metaheuristics to create a cost-effective and feasible solution to a transportation and logistics problem.</p>
                    <p>Below</p>
                </div>
                </div>
            </section>

            <section className="problem-section">
                <div className="container">
                    <h2>THE PROBLEM</h2>
                    <p>Imagine you run a company with a physical product. The facilities are now open and ready to ship, and customers are eagerly awaiting their orders. Your vehicle rentals have already been finalized. Business is booming!
                    </p>
                    <p><strong>But there's one question on your mind: how do I minimize transportation costs and thus maximize my profits?</strong>
                    </p>
                    
                    
                </div>
            </section>
            <section >
                <div className="container">
                    <h2>THE TASK</h2>
                    <p>My job is to find the optimum routing system to minimize distance traveled by all the vehicles, thus minimizing cost. We're working with some constraints:
                    <ul>
                        <li>You are limited by the <strong>number of vehicles you rented</strong></li>
                        <li>Each vehicle has a set <strong>capacity</strong> that you cannot violate</li>
                    <li>You can only visit each customer <strong>once</strong></li>
                    <li>Each customer has  a location on the x,y coordinate plane, along with a unique demand value that your vehicle's load must satisfy</li>
                    <li>Each customer must be satisifed</li>
                     </ul>
                    </p>
                </div>
            </section>
        
            <section >
                <div className="container">
                    <h2>RESULTS</h2>
                    <p>The final implementation of this website</p>
                    <img src={newartsocked} alt="New artsocked website preview" className="case-study-image" />
                </div>
            </section>
            <section>
            <div className="container">
                <h2>THE RESEARCH</h2>
                
                <div className="hifiimg-container">
                    <img src={hifipc} alt="Mockup for the PC version of the new website" className="hifiimg" />
                    <img src={hifiphone} alt="Mockup for the phone version of the new website" className="hifiimg" />
                    
                </div>
                <p class='caption'>The desktop (left) and mobile (right) final sketch renditions</p>
            </div>
        </section>
            
        </div>
    );
}

export default CaseStudy3;
