import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return (
        <div>
            <Hero backgroundImage="C:\bootcamp_homework\react-porfolio\react-portfolio\portfolio\src\pages\images\pexels-pixabay-460621.jpg">
                <h1>Winston Nieradka</h1>
                <h2>Portfolio</h2>
            </Hero>
            <Container style={{ marginTop: 24 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className='text-center'>An insight to work and projects</h1>
                    </Col>
                    <Col size='md-12'>
                        <p className='text-center'>Working to create beautiful and creative web experiances.
                        I completed coding bootcamp through Rutgers and now work to make the web user friendly and fun.</p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default About;