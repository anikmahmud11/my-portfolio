import './Project.css'
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { id, image, name, overview1, overview2, overview3 } = project;
    return (
        <Link
            to={`/details/${id}`}
            className="text-decoration-none"
        >
            <div className="card-group hover-card">
                <div className="card shadow p-2 m-2">
                    <Row>
                        <Col sm={6} ><img className="w-100 img-fluid rounded" src={image} alt="" /></Col>
                        <Col sm={6} >
                            <h3 className="t-shadow">{name}</h3>
                            <ul className="text-start text-secondary">
                                <li>{overview1.slice(0, 100)}...</li>
                                <li>{overview2.slice(0, 100)}...</li>
                                <li>{overview3.slice(0, 100)}...</li>
                            </ul>

                        </Col>
                    </Row>



                </div>
            </div>
        </Link>
    );
};

export default Project;