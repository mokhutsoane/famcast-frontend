import React from "react";
import Link from "../../components/Link";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div
        className="hero-area-03 pt-29 pt-lg-32 pb-5 position-relative "
        css={`
          background-image: linear-gradient(
            225deg,
            #7b11f9 0%,
            #7922d8 39%,
            #3636b2 100%
          );
        `}
      >
        <div
          className="shape-1 gr-abs-tl"
          data-aos="fade-down-right"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <img src="/q/image/l6/png/l6-hero-shape1.png" alt="" />
        </div>
        <div
          className="shape-2 gr-abs-tl"
          data-aos="fade-down-right"
          data-aos-duration="800"
          data-aos-delay="800"
        >
          <img src="/q/image/l6/png/l6-hero-shape2.png" alt="" />
        </div>
        <div
          className="shape-3 gr-abs-tl"
          data-aos="fade-down-right"
          data-aos-duration="1100"
          data-aos-delay="1100"
        >
          <img src="/q/image/l6/png/l6-hero-shape3.png" alt="" />
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="hero-content dark-mode-texts mb-15 mb-lg-30 text-md-left ">
                <h1 className="gr-text-2 mb-8 text-white">Radio Mobile App</h1>
                <p className="gr-text-8  pl-md-0 pr-md-11 mb-0 gr-color-white-opacity-7">
                  Complete mobile solutions for a global audience, at no cost to
                  broadcasters.
                </p>
                <br />
                <h6 className="gr-text-8  pl-md-0 pr-md-11 mb-0 gr-color-white-opacity-7">
                  AddOn
                </h6>
                <p className="gr-text-8  pl-md-0 pr-md-11 mb-0 gr-color-white-opacity-7">
                  Dedicated station mobile app
                </p>
                <p className="gr-text-8  pl-md-0 pr-md-11 mb-0 gr-color-white-opacity-7">
                  Station website, domain, and hosting
                </p>

                <div className="download-block mt-15">
                  <h3 className="download-title gr-text-12 text-uppercase text-white">
                    Download our app
                  </h3>
                  <div className="download-btns d-flex flex-column flex-xs-row  justify-content-md-start mt-7">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://apps.apple.com/app/id1470606058"
                    >
                      <img
                        src="/q/image/l6/png/l6-download-appstore.png"
                        alt=""
                        className="mr-xs-5 mb-5 mb-xs-0"
                      />
                    </Link>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://play.google.com/store/apps/details?id=com.famcast.radioapp"
                    >
                      <img src="/q/image/l6/png/l6-download-gplay.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <div
              className="col-md-9 col-lg-5 col-xl-6"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              <div className="hero-img position-relative">
                <img
                  src="/q/image/l6/png/l6-hero-img2.png"
                  alt=""
                  className="w-100 position-relative gr-z-index-1"
                />
                <div
                  className="abs-img"
                  data-aos="zoom-in"
                  data-aos-delay="2100"
                  data-aos-duration="800"
                  css={`
                    z-index: initial;
                  `}
                >
                  <img src="/q/image/l6/png/l6-hero-pattern.png" alt="" />
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <div className="wave-shape">
          <img
            src="/q/image/svg/l6-hero-wave.svg"
            alt=""
            className="w-100 light-shape default-shape"
          />
          <img
            src="/q/image/svg/l6-hero-wave-dark.svg"
            alt=""
            className="w-100 dark-shape"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
