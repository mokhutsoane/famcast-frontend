import React from "react";
import Link from "../../components/Link";
import { Container, Row, Col } from "react-bootstrap";

const StreamingHero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="hero-area position-relative bg-blackish-blue pt-25 pt-lg-30 pb-15 pb-lg-29">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="6" md="9" className="order-md-2 order-xs-2">
              <div
                className="hero-img"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <div className="hero-video-thumb position-relative gr-z-index-1">
                  <img
                    src="/q/image/illustrations/ui2@2x_podcast.png"
                    alt=""
                    className="w-100 rounded-10"
                  />

                  <div className="abs-shape gr-abs-tr-custom gr-z-index-n1">
                    <img
                      src="/q/image/l5/png/l5-dot-shape.png"
                      alt=""
                      className="w-100"
                      data-aos="zoom-in"
                      data-aos-delay="750"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg="6"
              md="9"
              className="order-md-1 order-xs-1 mt-9 mt-lg-0"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="hero-content text-white">
                <h1 className="gr-text-2 mb-9 text-bright-blue">
                  Audio Streaming
                  <br />
                </h1>
                <h2 className="text-bright-blue">
                  Start Your Own Online Radio Station.
                </h2>
                <p className="gr-text-8 pr-5 pl-0 pr-xl-11 mb-9 text-white">
                  Whether you're an established broadcaster, a large publishing
                  company, or a newcomer, we offer services specifically
                  designed for you
                </p>
                <div className="hero-btn">
                  <Link to="https://famcast.co.za/home/checkout/1">
                    <div className="btn-link with-icon text-green gr-text-7 font-weight-bold">
                      Start a free trial{" "}
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default StreamingHero;
