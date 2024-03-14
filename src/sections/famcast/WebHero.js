import React from "react";
import Link from "../../components/Link";

import { Container, Row, Col } from "react-bootstrap";

import ShareButton from "../../sections/famcast/Radio/ShareButton";

const WebHero = () => {
  return (
    <div>
      {/* <!-- Hero Area --> */}
      <div className="hero-area position-relative bg-blackish-blue pt-29 pt-lg-33 pb-15 pb-lg-29">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="6" md="9" className="order-lg-2">
              <div
                className="hero-img"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <div className="hero-video-thumb position-relative gr-z-index-1">
                  <img
                    src="/q/image/hero/mac.webp"
                    alt=""
                    className="w-100 rounded-20"
                  />

                  <div className="abs-shape gr-abs-tr-custom gr-z-index-n1">
                    <img
                      src="/q/image/l4/png/l4-hero-shape3.png"
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
              className="order-lg-1 mt-9 mt-lg-0"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="hero-content text-white">
                <h1 className="gr-text-4 mb-4 text-white">
                  Professional Web Design <br />
                </h1>
                <p className="gr-text-9 pr-5 pl-0 pr-xl-11 mb-3 text-white">
                  From concept through development to implementation and running
                  – we provide a comprehensive service from start to finish.
                </p>
                <ShareButton
                  url={"https://famcast.co.za/q/web_development/"}
                  title={
                    "From concept through development to implementation and running – we provide a comprehensive service from start to finish"
                  }
                  quote={
                    "From concept through development to implementation and running – we provide a comprehensive service from start to finish"
                  }
                />
                <div className="hero-btn pt-10">
                  <Link to="https://famcast.co.za/home/web-design-pricing/">
                    <span className="btn btn-primary mx-3 mb-3" role="button">
                      Pricing
                    </span>
                  </Link>

                  <Link to="https://famcast.co.za/home/portfolios">
                    <span className="btn btn-success mx-3 mb-3 " role="button">
                      Our Work
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WebHero;
