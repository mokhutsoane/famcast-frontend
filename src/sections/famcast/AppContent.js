import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "../../components/Link";

const AppContent = () => (
  <>
    {/* <!-- Content section --> */}
    <div className="content-section border-bottom pt-11 pb-7 pt-lg-24 pb-lg-28 bg-default-6">
      <Container>
        <Row className=" justify-content-center">
          <div className="col-xl-6 col-lg-8 col-sm-10">
            <div className="section-title text-center mb-12 mb-lg-23">
              <h2 className="title heading-color gr-text-4 mb-6">
                RADIO MOBILE APP
              </h2>
              <p className="gr-text-8 text-color-opacity px-lg-7 px-xl-0">
                Mobile App for your radio station built for Android and iOS.
              </p>
            </div>
          </div>
        </Row>
        <Row className="align-items-center">
          <Col lg="6">
            <div className="content-img-group text-center mb-8 mb-lg-0">
              <div className="main-image  w-xs-75 w-lg-85 w-xl-75 mx-auto position-relative gr-z-index-1">
                <img
                  className="rounded-10 w-100"
                  src={"/q/image/content-img-main.png"}
                  alt=""
                />
                <div
                  className="underlay-shadow-img gr-abs-tl-custom-2 h-100"
                  data-aos="fade-down-right"
                  data-aos-duration="900"
                  data-aos-delay="400"
                >
                  <img
                    className="rounded-10 h-100"
                    src={"/q/image/content-img-opacity.jpg"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="content-widget mt-7 mt-lg-0 pe-lg-13 ps-xl-19">
              <Row className="align-items-center">
                <Col
                  md="6"
                  lg="12"
                  className=""
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-9 media">
                    <div className="media-icon circle-sm bg-blue me-8">
                      <span className="count text-white gr-text-9">
                        <i className="fas fa-microphone-alt"></i>
                      </span>
                    </div>
                    <div className="media-body">
                      <h3 className="w-title heading-color mb-5 gr-text-7">
                        Live Stream
                      </h3>
                      <p className="gr-text-9 text-color-opacity mb-0">
                        Listeners can access your station almost anytime and
                        anywhere.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-9 media">
                    <div className="media-icon circle-sm bg-blue me-8">
                      <span className="count text-white gr-text-9">
                        <i className="fas fa-calendar-alt"></i>
                      </span>
                    </div>
                    <div className="media-body">
                      <h3 className="w-title heading-color mb-5 gr-text-7">
                        Schedule
                      </h3>
                      <p className="gr-text-9 text-color-opacity mb-0">
                        Show what's up next from your station's schedule to keep
                        listeners coming back for more.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-9 media">
                    <div className="media-icon circle-sm bg-blue me-8">
                      <span className="count text-white gr-text-9">
                        {" "}
                        <i className="fas fa-podcast"></i>
                      </span>
                    </div>
                    <div className="media-body">
                      <h3 className="w-title heading-color mb-5 gr-text-7">
                        Podcast
                      </h3>
                      <p className="gr-text-9 text-color-opacity mb-0">
                        Add a podcast feed and your listeners will have access
                        to all your content in one place.
                      </p>
                    </div>
                  </div>
                  <div className="cta-btn text-lg-start">
                    <Link to="https://famcast.co.za/home/contact-us/">
                      <Button className="gr-hover-y rounded-8">
                        Get Radio App
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default AppContent;
