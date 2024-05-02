import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css'; // Import your CSS file
import Projects from './Projects';
import Contact from './Contact';
import headshot from './headshot.jpg';
import CaseStudy1 from './CaseStudy1';
import CaseStudy2 from './CaseStudy2';


function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                
                <Routes>
                    <Route path="/" element={<div className="container">
                        <h1>Hello, I'm Jen Chen!</h1>
                        <p><b>Computer Science</b> & <b>pre-med</b> student at <b> Brown University</b> with skills in research, coding, and teaching</p>
                        <img src={headshot} alt="headshot" className="headshot" />
                    </div>} />
                    <Route path="/projects/*" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/case_study_1" element={<CaseStudy1 />} />
                    <Route path="/case_study_2" element={<CaseStudy2 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
