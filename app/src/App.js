import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css'; // Import your CSS file
import Projects from './Projects';
import Resume from './Resume';
import headshot from './headshot.jpg';
import CaseStudy1 from './CaseStudy1';
import CaseStudy2 from './CaseStudy2';
import CaseStudy3 from './CaseStudy3';


function App() {
    return (
        <Router>
            <div>
            <div className="header">
            <h1 className="name"><a href="/" className="name-link">JENNIFER CHEN</a></h1>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/resume">Resume</a></li>
                        </ul>
                    </nav>
                </div>
                <Routes>
                    <Route path="/" element={<div className="container">
                        <h1>Hello!</h1>
                        <p className="bigger">I'm a software engineer and student researcher located in RI and NJ. I'm also a concurrent bachelor's and master's of science candidate in <b className='colorful'>computer science</b> & <b className='colorful2'>pre-med</b> student at <b className='colorful3'> Brown University</b> graduating in Spring 2025.
                        </p>
                        <p className="smaller">I am passionate about tech for health, specifically advancing medicine through software and artificial intelligence. I'm a head teaching assistant for an AI class, and a previous intern at AstraZeneca and Harvard Medical School working on everything from drug discovery to ML for cell type prediction.</p>
                        <img src={headshot} alt="headshot" className="headshot" />
                        <p>Picture of me on top of a hill in Athens, Greece.</p>
                    </div>} />
                    <Route path="/projects/*" element={<Projects />} />
                    <Route path="/resume" element={<Resume/>} />
                    <Route path="/case_study_1" element={<CaseStudy1 />} />
                    <Route path="/case_study_2" element={<CaseStudy2 />} />
                    <Route path="/case_study_3" element={<CaseStudy3 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
