import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

import imgHero from "../../assets/image/conference/png/restream.png";

const Hero = () => (
  <>
    {/* <!-- Hero section --> */}
    <div className="hero-area position-relative overflow-hidden bg-default-7 bg-pattern pattern-5 pt-20 pt-md-15 pt-lg-25 bg-dark">
      <Container>
        <Row className="justify-content-sm-end">
          <Col lg="6" md="8" className="py-md-16 py-lg-20 z-index-99">
            <div className="hero-content pr-xl-16 mb-9 mb-md-12">
              <h1 className="title gr-text-2 mb-8 text-light ">
                Create An Online TV Station{" "}
              </h1>
              <p className="gr-text-8 mb-0 text-light">
                Grow your audience with a single stream to multiple platforms
                such as Facebook Live, YouTube Live, Periscope, and Twitch.
              </p>
            </div>
            <Button variant="yellow" className=" mt-lg-11 mb-10">
              Get Started Now
            </Button>
          </Col>
          <Col lg="5" md="4" sm="7" className="offset-lg-1 ">
            <div className="hero-img position-relative z-index-1 ">
              <img className="w-100" src={imgHero} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Hero;
