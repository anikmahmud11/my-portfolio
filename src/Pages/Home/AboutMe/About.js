import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="container container-fluid pt-4 " id="about">
            <p className="t-shadow">SOME INFO</p>
            <br />
            <h3 className="t-shadow">ABOUT ME</h3>
            <br />
            <div class="card about">
                <div class="shadow">
                    <h6 className="text-wrap p-3">I'm a junior web developer with a background in computer science and engineering.My recently-finished web development course at Programming Hero experience has shaped my code evaluation and website
                    development knowledge.I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</h6>
                </div>
            </div>
        </div>
    );
};

export default About;