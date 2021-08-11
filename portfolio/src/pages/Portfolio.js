import React from "react";
import Hero from "../components/Hero";
import Image from "./images/bio/bio-image-01.jpg"
//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";


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
            </div>
    )}

    export default Portfolio;