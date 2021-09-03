import React from "react";
import Hero from "../components/Hero";
import Image from "./images/bio/bio-image-01.jpg"
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./CSS/welcome.css"

function Welcome() {
    return (
        <div>
            <Hero>
                <h1>Winston Nieradka</h1>
                <img src={Image} alt="Wisnton"
                    height={170}
                    width={120}
                    style={{ alignSelf: 'center', borderRadius: '5px 50px 5px 50px' }}
                />
                <h2>Welcome</h2>
                <p>To my Porfolio</p>
            </Hero>
            <Container style={{ marginTop: 24 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className='text-center'>Thank you for visiting</h1>
                    </Col>
                    <Col size='md-12'>
                        <p className='text-center'>Welcome to my portfolio! I am Winston Nieradka a full stack developer. Feel free to contact me.
                        </p>
                        <p className="text-center">Please enjoy!</p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Welcome;