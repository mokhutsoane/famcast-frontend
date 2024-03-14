import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import record from "../../../public/img/record.png";
import live from "../../../public/img/live-show.png";
import playlist from "../../../public/img/playlist.png";
import https from "../../../public/img/https.png";
import wedding from "../../../public/img/wedding.png";
import couple from "../../../public/img/couple.png";

import csr from "../../../public/img/csr.png";
import dj from "../../../public/img/dj.png";

import feedback from "../../../public/img/feedback.png";
import advertisement from "../../../public/img/advertisement.png";

const LedInfo = () => {
  return (
    <>
      {/* <!-- Features Area --> */}
      <div className="feature-section pt-6 pt-lg-6  ">
        <Container className="">
          <Row className="">
            <Col md="12" lg="12" xl="12">
              <div className="section-title  mb-16 mb-lg-16">
                <h2 className="title gr-text-8">
                  LED SCREENS HAVE A WIDE RANGE OF USES
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center ">
            <Col sm="6" lg="4" className="mb-12  ">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green mr-sm-9 mb-7 mb-lg-0">
                  <img className="" src={dj} alt="/" height="50" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5">Musical event</h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    At any musical event or function to create a backdrop of
                    colour and design for those performing
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-13   ">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green mr-sm-9 mb-7 mb-lg-0">
                  <img className="" src={couple} alt="/" height="50" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5">Wedding</h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    At a wedding as a source to display personal photographs or
                    information about the couple getting married
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green mr-sm-9 mb-7 mb-lg-0">
                  <img className="" src={csr} alt="/" height="50" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5">Corporate Functions</h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    At corporate functions you can use them as a means to
                    advertise and display company information, videos and
                    presentations.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LedInfo;
