import React from "react";
import Hero from "../components/Hero";
import Image from "./images/bio/bio-image-01.jpg"
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
                <h2>Portfolio</h2>
            </Hero>
            <Container style={{ marginTop: 24 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className='text-center'>An insight to work and projects</h1>
                    </Col>
                    <Col size='md-12'>
                        <p className='text-center'>Welcome to my portfolio! I am Winston Nieradka a full stack developer currently enrolled with Rutgers Coding Bootcamp.
        My goal is to make creative, interactive, and intriguing web experiences. In my past I have worked from managerial to worker posistions with that
        I aim to create not only beautiful but user friendly experiences for all users. This site showcases some projects that I've worked on and
        will give some insight to my abilities and strong suits.
      </p>    
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default About;