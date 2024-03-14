import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import ShareButton from "../../components/Radio/ShareButton";

import imgHero from "../../assets/image/hero/code6.png";
import imgShape2 from "../../assets/image/l4/png/l4-hero-shape3.png";

const AppHero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="hero-area position-relative bg-blackish-blue pt-29 pt-lg-33 pb-15 pb-lg-29">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="6" md="9" className="order-lg-2">
              <div
                className="hero-img"
                data-aos="zoom-out"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <div className="hero-video-thumb position-relative gr-z-index-1">
                  <img
                    src={imgHero}
                    alt=""
                    className="w-100 rounded-20 rcorners7"
                  />

                  <div className="abs-shape gr-abs-tr-custom gr-z-index-n1 ">
                    <img
                      src={imgShape2}
                      alt=""
                      className="w-100"
                      data-aos="zoom-in"
                      data-aos-delay="750"
                      data-aos-duration="2000"
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
              <div className="hero-content dark-mode-texts">
                <h1 className="gr-text-6 mb-9">Mobile App Development</h1>
                <p className="gr-text-8 pr-5 pl-0 pr-xl-11 mb-9">
                  We delivers custom mobile experiences. We build iOS, Android
                  and Hybrid Apps
                </p>

                <ShareButton
                  url={"https://famcast.co.za/q/mobile_app/"}
                  title={
                    "We delivers custom mobile experiences. We build iOS, Android and Hybrid Apps"
                  }
                  quote={
                    "We delivers custom mobile experiences. We build iOS, Android and Hybrid Apps"
                  }
                />
                <div className="hero-btn pt-10">
                  <Link href="/contactus">
                    <span className="btn btn-primary mr-3 mb-3" role="button">
                      Get Quote
                    </span>
                  </Link>

                  <Link href="/portfolio">
                    <span className="btn btn-success mr-3 mb-3 " role="button">
                      Our Work
                    </span>
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

export default AppHero;
