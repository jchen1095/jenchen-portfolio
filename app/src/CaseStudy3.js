import React from 'react';
import './case_study_page3.css'; // Import your CSS file
// import caseStudyImage from './case_study_1_image.jpg'; // Import your image
// import oldartsocked from './artsocked.png';
// import newartsocked from './revampedrr.png';
// import hifipc from './hifi.png';
import ham from './hamiltonian.png';

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
                    <p>Working with a partner, I aimed to find the optimum routing system to minimize distance traveled by all the vehicles, thus minimizing cost.</p>
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
                    <h2>CONSTRAINTS</h2>
                    <p>We're working with some limitations:
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
                    <h2>BRAINSTORMING</h2>
                    <p>Our solver will be tested on a list of customers' locations, described by their x, y coordinates and the customer's demand. Therefore, our <strong>decision variables</strong>, or the objects we are solving for, are the specific routes taken by each individual vehicle.</p>
                    <p>My next question: how do we model this situation?</p>
                    <p>Our answer: hamiltonian paths</p>
                    
                    <img src={ham} alt="Hamiltonian Path Example Photo" className="case-study-image" />
                    <p>
                        Photo from <a href="https://www.geeksforgeeks.org/hamiltonian-path-using-dynamic-programming/" target="_blank">
                            GeeksforGeeks
                        </a>
                    </p>
                    <p>Since hamiltonian paths visit each node only once, it is the perfect way to represent each route taken by a vehicle. Thus, we solve our tests by first taking a permutation of the locations, and then greedily assigning each location to a vehicle such that all locations are visited only once.</p>
                </div>
            </section>
           
            <section >
                <div className="container">
                    <h2>INITIAL SOLUTION HEURISTICS</h2>
                    <p>We created several initial solution generation methods to try to find the best starting point for our search</p>
                    <ul>
                        <li>Radial</li>
                        <li>Euclidean</li>
                        <li>Random</li>
                        <li>MST</li>
                    </ul>
                    <p><strong>Radial</strong></p>
                    <p><strong>Euclidean</strong></p>
                    <p><strong>Random</strong></p>
                    <p><strong>MST</strong></p>
                    {/* <img src={newartsocked} alt="New artsocked website preview" className="case-study-image" /> */}
                </div>
            </section>
            <section>
            <div className="container">
                <h2>NEIGHBORHOOD SEARCHING</h2>
                <ul>
                        <li>Random Two Exchange</li>
                        <li>Full Two Exchange</li>
                        <li>2Opt</li>
                    </ul>
                <p><strong>Random Two Exchange</strong></p>
                <p><strong>Full Two Exchange</strong></p>
                <p><strong>2Opt</strong></p>
                <p class='caption'>The desktop (left) and mobile (right) final sketch renditions</p>
            </div>
        </section>
        <section >
                <div className="container">
                    <h2>METAHEURISTICS</h2>
                    <p><strong>Hill Climb</strong></p>
                    <p><strong>Simulated Annealing</strong></p>
                    {/* <img src={newartsocked} alt="New artsocked website preview" className="case-study-image" /> */}
                </div>
            </section>
        <section >
            <div className="container">
                 <h2>WHAT WORKED BEST</h2>
                <p>The final implementation of this website</p>
                    {/* <img src={newartsocked} alt="New artsocked website preview" className="case-study-image" /> */}
            </div>
         </section>
         <section >
            <div className="container">
                 <h2>TAKEAWAYS</h2>
                <p>The final implementation of this website</p>
                    {/* <img src={newartsocked} alt="New artsocked website preview" className="case-study-image" /> */}
            </div>
         </section>

         <section >
            <div className="container">
                 <h2>CITATIONS</h2>
                <p>The final implementation of this website</p>
                    {/* <img src={newartsocked} alt="New artsocked website preview" className="case-study-image" /> */}
            </div>
         </section>
    
        </div>
    );
}

export default CaseStudy3;
