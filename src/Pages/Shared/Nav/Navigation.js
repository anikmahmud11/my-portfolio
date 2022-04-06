import React from 'react';
import { Container,  Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <>
            <Navbar className="navigate" expand={false} sticky="top">
                <Container fluid>
                    <Navbar.Brand href="/" className="text-light">Anik Mahmud</Navbar.Brand>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        className="text-light offcanvas "
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton className="body">
                            <Offcanvas.Title id="offcanvasNavbarLabel">Dash Board</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/#banner" className="custom-btn"><i class="fas fa-home"></i> Home</Nav.Link>
                                <Nav.Link href="/#about" className="custom-btn"><i class="fas fa-address-card"></i> About Me</Nav.Link>
                                <Nav.Link href="/#skill" className="custom-btn"><i class="fas fa-code "></i> Skill</Nav.Link>
                                <Nav.Link href="/#project" className="custom-btn"><i class="fas fa-tasks"></i> Project</Nav.Link>
                                <Nav.Link href="/#blog" className="custom-btn"><i class="fas fa-blog"></i> My Blog</Nav.Link>
                                <Nav.Link href="/#contact" className="custom-btn"><i class="fas fa-envelope"></i> Contact Me</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>

    );
};

export default Navigation;


