import React from "react";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Image from "./images/bio/bio-image-01.jpg"
import Row from "../components/Row";
import Col from "../components/Col";
import Weather from "./images/portfolio/weatherDashSS.png"
import PassGen from "./images/portfolio/passGen.png"
import Poke from "./images/portfolio/pokeLookup.png"
import "./CSS/portfolio.css"


function Portfolio() {
    return (
        <div>
            <Hero>
                <h1>Winston Nieradka</h1>
                <img src={Image} alt="Wisnton"
                    height={170}
                    width={120}
                    style={{ alignSelf: 'center', borderRadius: '5px 50px 5px 50px' }}
                />
                <h2>Portfolio</h2>
            </Hero>
            <Container style={{ marginTop: 24 }}>
                <Row>
                    <Col size="md-2">
                        <div class='headers' style= {{ marginRight:'40px'}}>Weather Dashboard
                            <a href="https://wan2748.github.io/weather_dashboard/" target="blank">
                                <img src={Weather} alt="Weather Dashboard"
                                height={170}
                                width={210}
                                />
                            </a>
                        </div>
                    </Col>
                    <Col size="md-1">
                        <div class="headers" style= {{ marginLeft:'60px'}}> Password Generator
                            <a href="https://wan2748.github.io/password_generator/" target="blank">
                            <img src={PassGen} alt="Weather Dashboard"
                                height={173}
                                width={210}
                                />
                            </a>
                        </div>
                    </Col>
                    <Col size="md-1">
                        <div class="headers" style= {{ marginLeft:'230px'}}> Pokemon Lookup
                            <a href="https://thepokemonlookupproject.herokuapp.com/" target="blank">
                            <img src={Poke} alt="Weather Dashboard"
                                height={173}
                                width={210}
                                />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    
                </Row>
            </Container>
            </div>
    )}

    export default Portfolio;