import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css'; // Import your CSS file
import Projects from './Projects';
import Resume from './Resume';
import headshot from './headshot.jpg';
import CaseStudy1 from './CaseStudy1';
import CaseStudy2 from './CaseStudy2';


function App() {
    return (
        <Router>
            <div>
            <div className="header">
                    <h1 className="name">Jennifer Chen</h1>
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
                        <p><b>Computer Science</b> & <b>pre-med</b> student at <b> Brown University</b> with skills in research, coding, and teaching</p>
                        <img src={headshot} alt="headshot" className="headshot" />
                        <p>Picture of me on top of a hill in Athens, Greece</p>
                    </div>} />
                    <Route path="/projects/*" element={<Projects />} />
                    <Route path="/resume" element={<Resume/>} />
                    <Route path="/case_study_1" element={<CaseStudy1 />} />
                    <Route path="/case_study_2" element={<CaseStudy2 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
