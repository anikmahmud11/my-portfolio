import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css';


const Details = () => {
    const { projectId } = useParams();
    const [projectDetails, setProjectDetails] = useState([])
    const [singleProject, setSingleProject] = useState({})
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjectDetails(data))
    }, [])

    useEffect(() => {
        const foundProject = projectDetails.find(details => details.id == projectId)
        setSingleProject(foundProject);
    }, [projectDetails, projectId])
    console.log(singleProject);



    return (
        <div className="container">
            <Row className="p-2 ">
                <Col><img className="w-50 rounded mx-auto d-block  card shadow-lg rounded " src={singleProject?.image} alt="" /><h1 className="text-center p-3 name t-shadow">{singleProject?.name}</h1></Col>

            </Row>
            <Row>
                <Col className="card shadow-lg  details p-3 "  sm={4}><h4 className=" text-start t-shadow ">Technology Used </h4><p>{singleProject?.technology}</p></Col>
                <Col className="card shadow-lg  details p-3"  sm={4}><ul>
                    <h4 className="t-shadow">Over View</h4>
                    <li >{singleProject?.overview1}</li>
                    <li>{singleProject?.overview2}</li>
                    <li>{singleProject?.overview3}</li>
                </ul></Col>
                <Col className="card shadow-lg details p-3"sm={4}>
                    <h4 className="t-shadow">Links</h4>
                    <a rel="noopener noreferrer" href={singleProject?.url} target="_blank"><Button className="resume-btn rounded-pill w-100 " >Live Link</Button></a>
                    <br />
                    <br />
                    <a rel="noopener noreferrer" href={singleProject?.url1} target="_blank"><Button className="resume-btn rounded-pill w-100 " >GitHub Server Link</Button></a>
                    <br />
                    <br />
                    <a rel="noopener noreferrer" href={singleProject?.url2} target="_blank"><Button className="resume-btn rounded-pill w-100 " >GitHub Server Link</Button></a>
                </Col>
            </Row>
            <br />
            <div className="container">
                <h4 className="text-center t-shadow">Screen Shoots</h4>
                <Carousel className="p-1 card shadow-lg rounded details">
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={singleProject?.image1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={singleProject?.image2}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={singleProject?.image3}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={singleProject?.image4}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={singleProject?.image5}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>

        </div>


    );
};


export default Details;




//  {/* <Row>
//                         <Col sm={12}><img className="w-100 p-2" src={singleProject?.image1} alt="" /></Col>
//                         <br />
//                         <Col sm={12}><img className="w-100 p-2" src={singleProject?.image2} alt="" /></Col>
//                         <br />
//                         <Col sm={12}><img className="w-100 p-2" src={singleProject?.image3} alt="" /></Col>
//                         <br />
//                         <Col sm={12}><img className="w-100 p-2" src={singleProject?.image4} alt="" /></Col>
//                         <br />
//                         <Col sm={12}><img className="w-100 p-2" src={singleProject?.image5} alt="" /></Col>

//                     </Row> */}