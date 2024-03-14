import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
  return (
    <>
      {/* <!--Service section  -->*/}
      <div className="service-section bg-default-4 pt-15 pb-13 py-lg-25">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="section-title text-center mb-11 mb-lg-19 px-lg-3">
                <h4 className="pre-title gr-text-12 text-red text-uppercase mb-7">
                  Our services
                </h4>
                <h2 className="title gr-text-4 heading-color">
                  We provide great services for{" "}
                  <br className="d-none d-lg-block" /> our customers based on
                  needs
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center position-relative gr-z-index-1">
            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-dark h-100">
                <div className="card-img mb-11">
                  <img
                    src={"/q/image/illustrations/webp/i24.webp"}
                    alt="..."
                    width={200}
                  />
                </div>
                <h3 className="card-title gr-text-6 mb-6  text-white ">
                  Website Design & Hosting
                </h3>
                <p className="gr-text-9 mb-11 text-color-opacity ">
                  From concept through development to implementation and running
                  – we provide a comprehensive service from start to finish.
                </p>
                <a
                  href="https://famcast.co.za/home/web-design/"
                  className="gr-text-9 btn-link with-icon  text-white  mt-auto"
                >
                  Learn more <i className="icon icon-tail-right fw-bold"></i>
                </a>
              </div>
            </Col>
            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-blue h-100">
                <div className="card-img mb-11">
                  <img
                    src={"/q/image/illustrations/webp/i19_app.webp"}
                    alt="..."
                    width={200}
                  />
                </div>
                <h3 className="card-title gr-text-6 mb-6 text-white">
                  Mobile App Design Services
                </h3>
                <p className="gr-text-9 mb-11 text-color-opacity">
                  We offer native and cross-platform Design services for various
                  industries, including Radio Stations,Sports,e-commerce, etc.
                </p>
                <a
                  href="https://famcast.co.za/home/mobile-app-development/"
                  className="gr-text-9 btn-link with-icon text-white mt-auto"
                >
                  Learn more <i className="icon icon-tail-right fw-bold"></i>
                </a>
              </div>
            </Col>
            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-red h-100">
                <div className="card-img mb-11">
                  <img
                    src={"/q/image/illustrations/webp/i19_radio.webp"}
                    alt="..."
                    width={200}
                  />
                </div>
                <h3 className="card-title gr-text-6 mb-6 text-white">
                  Internet Radio Hosting
                </h3>
                <p className="gr-text-9 mb-11 text-color-opacity">
                  Broadcast audio through the internet to listeners across all
                  platforms, mobile devices, desktops, laptops and tablets.
                </p>
                <a
                  href="https://famcast.co.za/home/internet-radio-hosting/"
                  className="gr-text-9 btn-link with-icon text-white mt-auto"
                >
                  Learn more <i className="icon icon-tail-right fw-bold"></i>
                </a>
              </div>
              <div
                className="gr-abs-br-custom gr-z-index-n1"
                data-aos="zoom-in-right"
                data-aos-duration="750"
              >
                <img src={"/q/image/l5/png/l5-dot-shape2.png"} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
