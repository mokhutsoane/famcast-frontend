import React, { useContext } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import ShareButton from "../../components/Radio/ShareButton";
import imgShape from "../../assets/image/l4/png/l4-hero-shape3.png";

import events from "../../../public/img/LED-screen-is available-for-rental.png";

const LedHero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="hero-area position-relative bg-blackish-blue  pt-29 pt-lg-33 pb-15 pb-lg-29">
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
                  <img src={events} alt="" className="w-100 rounded-20" />

                  <div className="abs-shape gr-abs-tr-custom gr-z-index-n1">
                    <img
                      src={imgShape}
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
                <h1 className="gr-text-4 mb-4">
                  The Outdoor and Indoor LED screen is available for rental{" "}
                  <br />
                </h1>
                <p className="gr-text-10 pr-5 pl-0 pr-xl-11 mb-3">
                  Pitch 3.91mm Indoor/Outdoor LED Panels <br />
                  Panel Size 500mm x 500mm.
                </p>
                <ShareButton
                  url={"https://famcast.co.za/q/led/"}
                  title={
                    "From concept through development to implementation and running – we provide a comprehensive service from start to finish"
                  }
                  quote={
                    "From concept through development to implementation and running – we provide a comprehensive service from start to finish"
                  }
                />
                <div className="hero-btn pt-10">
                  <Link href="/gallery">
                    <span className="btn btn-yellow mr-3 mb-3 " role="button">
                      Gallery | Our Portfolio
                    </span>
                  </Link>
                  <Link href="/contactus">
                    <span className="btn btn-danger mr-3 mb-3 " role="button">
                      Get a Quote
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

export default LedHero;
