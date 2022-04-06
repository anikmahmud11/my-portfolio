import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (

        <Container id="banner">
            <Row className="img-custom justify-content-center">
                <Col sm={6}  >
                    <img className="w-75 pt-5 pb-5 img-fluid mx-auto d-block rounded-circle" src="https://i.ibb.co/p6HpcNV/pic-fb.jpg" alt="" />
                </Col>
                <Col sm={6} className="pt-5 pb-5 text-center">
                    <h5 className="fw-light t-shadow">HI THERE! I'M</h5>
                    <br />
                    <h1 className="t-shadow"><span className="name ">ANIK</span> MAHMUD</h1>
                    <br />
                    <h5 className="text-secondary t-shadow">A <span className="name">junior Web Developer</span> passionate about creating interactive applications and experiences on the web.</h5>
                    <br />
                    <br />
                    <div >
                        <Row >
                            <Col className="pt-2"  sm={3}>
                                <a rel="noopener noreferrer" href="https://drive.google.com/file/d/10x1g4nW60PxXCxX0E5pzBYdunp519Ev9/view?usp=sharing" target="_blank"><Button className="resume-btn rounded-pill w-100" >Resume</Button></a>

                            </Col>
                            <Col className="pt-2" >
                                <a rel="noopener noreferrer" href="https://github.com/anikmahmud11" target="_blank">
                                <i class="icon fab fa-github"></i></a>
                            </Col>
                            <Col className="pt-2">
                                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/anikmahmud/" target="_blank">
                                <i class="icon fab fa-linkedin"></i></a>
                            </Col>
                            <Col className="pt-2">
                                <a rel="noopener noreferrer" href="https://www.facebook.com/anik.mahamud.31" target="_blank">
                                    <i className="icon fab fa-facebook"></i></a>

                            </Col>
                        </Row>
                    </div>

                </Col>

            </Row>
        </Container>

    );
};

export default Banner;