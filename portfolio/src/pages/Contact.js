import React from "react";
import Hero from "../components/Hero";
import Image from "./images/bio/bio-image-01.jpg"
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
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
                        <h1 className='text-center'>Contacts</h1>
                    </Col>
                    <Col size='md-12'>
                    <h4 className="col-sm-12 ml-auto contact-btn">
                            <a className="text-decoration-none text-black" href="mailto:niera.w.a@gmail.com" target="blank"><i class="fas fa-envelope-open-text fa-4x"></i>
                            <p className="text-center">Email: Niera.w.a@gmail.com</p>
                            </a>
                            </h4>
                    </Col>
                    <Col size="md-12">
                        <h4 className="col-sm-12 ml-auto contact-btn">
                            <a className="text-decoration-none text-black" href="https://www.linkedin.com/in/winston-nieradka-811b65203/" target="blank"><i class="fas fa-envelope-open-text fa-4x"></i>
                            <p className="text-center">Linkedin</p>
                            </a>
                        </h4>
                    </Col>
                    <Col size="md-12">
                        <h4 className="col-sm-12 ml-auto">
                            <p className="text-center">Phone: (908)892-7088</p>
                        </h4>
                    </Col>
                    <Col size="md-12">
                        <h4 className="col-sm-12 ml-auto contact-btn">
                            <a className="text-decoration-none text-black" href="https://github.com/WAN2748" target="blank"><i class="fas fa-envelope-open-text fa-4x"></i>
                            <p className="text-center">GitHub</p>
                            </a>
                        </h4>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Contact;