import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Link from "../../components/Link";

import Modal from "react-bootstrap/Modal";
const HomeHero = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
                    src="/q/image/hero/studio.webp"
                    alt=""
                    className="w-100 rounded-10"
                  />

                  <div className="abs-shape gr-abs-tr-custom gr-z-index-n1">
                    <img
                      src="/q/image/l4/png/l4-hero-shape.png"
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
              <div className="hero-content dark-mode-texts">
                <h1 className="gr-text-4 mb-9 text-white">
                  Audio Streaming, <br />
                  App and Website Design.
                </h1>
                <h2 className="gr-text-8 pr-5 pl-0 pr-xl-11 mb-9 text-white">
                  We offer qouality affordable services that you can afford and
                  trust
                </h2>

                <div className="hero-btn">
                  <Link to="https://famcast.co.za/home/pricing/">
                    <div className="btn-link with-icon text-green gr-text-7 font-weight-bold">
                      Start a free trial{" "}
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </div>
                  </Link>
                </div>
                <div className="pt-sm-30">
                  <Modal
                    size="lg"
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    style={{
                      position: "fixed",

                      zIndex: 10000,
                    }}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">
                        Contact us
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Contact</Modal.Body>
                  </Modal>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeHero;
