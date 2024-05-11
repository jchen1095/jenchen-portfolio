import React from 'react';
import './case_study_page3.css'; // Import your CSS file
// import caseStudyImage from './case_study_1_image.jpg'; // Import your image
// import oldartsocked from './artsocked.png';
import greedy from './greedy.png';
import pack from './pack.png';
import ham from './hamiltonian2.png';
import radeuc from './radeuc.png';
import final from './final2.png';
import hillClimb from './hillclimb.png';
import opt from './2opt.png';
import proj5 from './proj5.png';


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

            <section >
                <div className="container">
                    <h2>THE PROBLEM</h2>
                    <p>Imagine you run a company with a physical product. The facilities are now open and ready to ship, and customers are eagerly awaiting their orders. Your vehicle rentals have already been finalized. Business is booming!
                    </p>
                    <p><strong>But there's one question on your mind: how do I minimize transportation costs and thus maximize my profits?</strong>
                    </p>
                    
                    
                </div>
            </section>
            <section className='highlight'>
            <div className="container">
                 <h2>THE RESULT</h2>
                <p>When we applied our solver to the test, we saw our vehicle routing drastically improve and cut distance and cost:</p>
                <img src={proj5} alt="Two graph pictures depicting improving routes" className="case-study-image" />
                    {/* <img src={newartsocked} alt="New artsocked website preview" className="case-study-image" /> */}
                    <p className='caption'>Two pictures depicting the initial route solution (left) and the final solution after running the optimization solver (right)</p>
                    <p>The initial cost was $1358, and the final cost was $874. That is a significant change.</p>
            </div>
         </section>
            <section >
                <div className="container">
                    <h2>CONSTRAINTS</h2>
                    <p>We're working with some limitations: </p>
                    <ul></ul>
                    <ul>
                    <li>You are limited by the <strong>number of vehicles you rented.</strong></li>
                    <li>Each vehicle has a set <strong>capacity</strong> that you cannot violate.</li>
                    <li>You can only visit each customer <strong>once</strong>.</li>
                    <li>Each customer has  a location on the x,y coordinate plane, along with a unique demand value that your vehicle's load must satisfy.</li>
                    <li>Each customer must be satisifed.</li>
                    <li>Every vehicle must start and end at the origin (the facility).</li>
                     </ul>
                   
                </div>
            </section>
        
            <section >
                <div className="container">
                    <h2>BRAINSTORMING</h2>
                    <p>Our solver will be tested on a list of customers' locations, described by their x, y coordinates and the customer's demand. Therefore, our <strong>decision variables</strong>, or the objects we are solving for, are the specific routes taken by each individual vehicle.</p>
                    <p>My next question: how do we model this situation?</p>
                    <p>Our answer: hamiltonian paths</p>
                    
                    <img src={ham} alt="Hamiltonian Path Example Photo" className="case-study-image" />
                    <p className='caption'>
                      The above picture illustrates a hamiltonian path crafted from the below sequence of numbers.  
                    </p>
                    <p>Since hamiltonian paths visit each node only once, it is the perfect way to represent each route taken by a vehicle. Thus, we solve our tests by first taking a permutation of the locations, and then greedily assigning each location to a vehicle such that all locations are visited only once.</p>
                    <img src={greedy} alt="Visuaization of assigning locations to routes" className="case-study-image" />
                    <p className="caption">Above is a visualization of how locations are greedily assigned to vehicles. The blue and orange arrows denote different vehicle routes. Vehicles take in as many locations as possible until their vehicle capacity is reached or would be violated by the demand of the next location.</p>
                </div>
            </section>
           
            <section className='highlight'>
                <div className="container">
                    <h2>INITIAL SOLUTION HEURISTICS</h2>
                    <p>We created several initial solution generation methods to try to find the best starting point for our vehicle-to-customer assignments:</p>
                    {/* <ul>
                        <li>Radial</li>
                        <li>Euclidean</li>
                        <li>Random</li>
                        <li>MST</li>
                    </ul> */}
                    <p><strong>Radial:</strong> Sorting all the customers by the degree of their locations from the positive x axis. This is a sort of "k-means clustering" where data points are clustered based on similar dimensionality.</p>
                    <p><strong>Euclidean:</strong> Sorting all customers by their distance from the origin from least to greatest distance.</p>
                    <p><strong>Random:</strong> Randomly permuating the list of all customers and conducting a greedy acceptance of locations into vehicles.</p>
                    <p><strong>MST:</strong> Searcing for any minimum spanning tree that can be created from the list of customers.</p>
                    <img src={radeuc} alt="Radial Greedy Visualization (left) and Euclidean Distance Greedy (right)" className="case-study-image" />
                    <p className='caption'>Radial Greedy Visualization (left) and Euclidean Distance Greedy Visualization (right). It is clear from the visualization that radial offers a more straightforward route and is likely to be more optimal.</p>
                </div>
            </section>
            <section >
                <div className="container">
                    <h2>PACKING</h2>
                    <p>We often ran into situations where the solver was taking a long time to initalize a feasible solution. </p>
                    <p>In order to combat this, we created a 'repacking' algorithm that shifts locations such that all locations that are initially not assigned to a vehicle during greedy search will be assigned and thus produce a feasible solution.</p>
                    {/* <ul>
                        <li>Radial</li>
                        <li>Euclidean</li>
                        <li>Random</li>
                        <li>MST</li>
                    </ul> */}
                    <p>There are three parts that continuously run in a cycle until a solution is found:</p>
                    
                    <img src={pack} alt="Packing Algorithm Illustration" className="case-study-image" />
                    <ol>
                        <li> Iterating through the vehicles and filling any empty space with unassigned locations when possible.</li>
                        <li> Replacing gaps & one assigned location with an unassigned location as long as this switch reduces the remaining space in vehicles. </li>
                        <li> Trying to replace the gap and <strong>multiple</strong> assigned locations with the unassigned location.</li>
                    </ol>
                    {/* <img src={newartsocked} alt="New artsocked website preview" className="case-study-image" /> */}
                </div>
            </section>
            <section className='highlight'>
            <div className="container">
                <h2>NEIGHBORHOOD SEARCHING</h2>
                <p>We also applied local neighborhood search to our initial solutions, which are optimization methods that iteratively explores nearby solutions to improve the current solution's quality.</p>
                <p><strong>Random Two Exchange: </strong>Randomly selects pairs of elements and swaps their positions to explore new solutions.</p>
                <p><strong>Full Two Exchange:</strong> Examines all possible pairs of elements, swaps the elements in route, and returns the most optimal solutions after calculating the objectives on all swapped solutions.</p>
                <p><strong>2Opt:</strong> Improves the quality of a solution by iteratively removing two edges from the current tour and reconnecting them in a different way, resulting in shorter tour lengths.</p>
                <img src={opt} alt="Visualization of the 2opt exchange" className="case-study-image" />
                <p class='caption'>The left shows the graph before swapping, and the right displays the graph after swapping. As the images describe, this will often result in a more optimal solution especially if 'crosses' are uncrossed.</p>
            </div>
        </section>
        <section >
                <div className="container">
                    <h2>METAHEURISTICS</h2>
                    <p>On top of all of the previous optimizations, we used popular metaheuristics to run all of the local search and solution generation:</p>
                    <p><strong>Simulated Annealing</strong>: inspired by the annealing process in metallurgy, which probabilistically accepts worse solutions early on, gradually decreasing as the search progresses, allowing exploration of the solution space more effectively.</p>
                    <p><strong>Hill Climb: </strong>Iteratively explores neighboring solutions, selecting the best/first/nth one in each step, aiming to ascend toward the optimal solution.</p>
                   
                    <img src={hillClimb} alt="Box plots of how well different hill climb versions worked on the tests" className="case-study-image" />
                    <p className='caption'>We plotted the mean objective value of all the tests ran on different hill climb searching heuristics. From the above graph, we concluded that "Nth-fit" hill climbing was consistently the most successful. </p>
                    
                    <p>Some observations of simulated annealing:</p>
                    <ul>
                    <li>
                    This strategy frequently did not work as well as hill climb.
                    </li>
                    <li>In our experience, accepting less optimal solutions would make the algorithm search in a neighborhood with higher objectives than the initial solution for a long time.</li>
                    </ul>
                </div>
            </section>
        <section className='final'>
            <div className="container">
                 <h2>WHAT WORKED BEST</h2>
                <p>Below we plotted the efficiency of all of our initial solutions:</p>
                <img src={final} alt="Box plot evaluations and comparisons of all initial solutions" className="case-study-image" />
                    {/* <img src={newartsocked} alt="New artsocked website preview" className="case-study-image" /> */}
                    <p>Even though random generation took the least amount of time, the radial initial solution generation produced a faster and more optimal solution, and thus was the most comprehensive initial solution generation technique. </p>
                    <p><strong>The result seen at the beginning of this page was created with the radial initial solution + Random 2 Exchange + Nth fit + repacking!</strong></p>
            </div>
         </section>
         <section >
            <div className="container">
                 <h2>TAKEAWAYS</h2>
                <p>In addition to our above observations, we found that:</p>
                <ul>
                    <li>MST, Radial, Euclidean all produce relatively the same solutions no matter how many times you call it.</li>
                    <li>Repacking Step 3 takes about the same amount of time as Repacking Step 2, and it is more effective.</li>
                </ul>
                    {/* <img src={newartsocked} alt="New artsocked website preview" className="case-study-image" /> */}
            </div>
         </section>

         <section >
            <div className="container">
                 <h2>FUTURE STEPS</h2>
                <p>In the future, to improve on our current model, we hope to:</p>
                <ol>
                    <li><strong>Add randomization to MST/Radial/Euclidean </strong> initial solution generation: this could help reduce similarity between generated solutions and encourage lower objectives.</li>
                    <li>Create a <strong>placement algorithm</strong> during neighborhood exchanges (place swapped locations optimally): this can further optimize internal routes (vehicle routes).</li>
                    <li>Create a <strong>Euclidean Nearest Neighbors</strong> algorithm for generating an initial solution: we've heard this would be effective because of its calculation-based heuristic.</li>
                    <li>Adjust simulated annealing to accept less higher-cost solutions, which would hopefully improve our metaheuristic.</li>
                </ol>
                  
            </div>
         </section>
    
        </div>
    );
}

export default CaseStudy3;
