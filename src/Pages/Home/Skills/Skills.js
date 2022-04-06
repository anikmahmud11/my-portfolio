import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Skills = () => {
    return (
        <div className="container pt-5" id="skill">
            <p className="t-shadow">CHECK OUT MY</p>
            <br />
            <h4 className="t-shadow">SKILLS</h4>
            <div class="card about">
                <div class="shadow rounded p-3 text-center ">
                    <Row>
                        <Col><i class="fab fa-html5 icon"></i></Col>
                        <Col><i class="fab fa-css3-alt icon"></i></Col>
                        <Col><i class="fab fa-js-square icon"></i></Col>
                        <Col><i class="fab fa-bootstrap icon"></i></Col>

                    </Row>
                    <br />
                    <Row>
                        <Col><i class="fab fa-react icon"></i></Col>
                        <Col><i class="fab fa-node icon"></i></Col>
                        <Col><i class="fas fa-database icon"></i></Col>
                        <Col><i class="fab fa-git-alt icon"></i></Col>

                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Skills;