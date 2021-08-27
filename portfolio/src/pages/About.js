import React from "react";
import Hero from "../components/Hero";
import Image from "./images/bio/bio-image-01.jpg"
import Pdf from "./images/resume2021.pdf"
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return (
        <div>
            <Hero>
                <h1>Winston Nieradka</h1>
                <img src={Image} alt="Wisnton" 
                    height={170}
                    width={120}
                    style={{ alignSelf: 'center', borderRadius: '5px 50px 5px 50px'}}
                    />
                <h2>About</h2>
            </Hero>
            <Container style={{ marginTop: 24 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className='text-center'>An insight to work and projects</h1>
                    </Col>
                    <Col size='md-12'>
                        <p className='text-center'>Welcome to my portfolio! I am Winston Nieradka a full stack developer resently compleated Rutgers Coding Bootcamp.
        My goal is to make creative, interactive, and intriguing web experiences. In my past I have worked from managerial to worker posistions with that
        I aim to create not only beautiful but user friendly experiences for all users. This site showcases some projects that I've worked on and
        will give some insight to my abilities and strong suits.
      </p>    
                    </Col>
                    <Col size="md-12">
                        <h4 className="col-sm-12 ml-auto contact-btn text-center">
                            <a className="text-decoration-none text-black" href={Pdf} target="blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" class="bi bi-file-text-fill" viewBox="0 0 16 16">
                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                                </svg>
                                <p>Resume</p>
                            </a>
                        </h4>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default About;