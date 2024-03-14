import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section pt-6 pt-lg-19 pb-7 bg-default-4">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col
              lg="6"
              className="order-lg-2"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="content-img text-right">
                <img
                  src="/q/image/l6/png/l6-content2-img.png"
                  alt=""
                  className="w-100"
                />
              </div>
            </Col>
            <Col xs="10" lg="6" xl="5" className="pr-xl-13 order-lg-1">
              <div className="section-title content-text mb-13">
                <h2 className="title gr-text-3 mb-6">News feed</h2>
                <p className="gr-text-8">
                  Keep listeners updated with an RSS feed from your website,
                  blog, or elsewhere.
                </p>
              </div>
              <div className="content-widget">
                <Row className="mb-n9">
                  <Col
                    md="6"
                    lg="9"
                    xl="10"
                    data-aos="fade-right"
                    data-aos-duration="500"
                  >
                    <div className="single-widget mb-9">
                      <h3 className="w-title gr-text-7">Push Notifications</h3>
                      <p className="gr-text-9 mb-0">
                        Send messages directly to your listeners phone. Keep
                        them informed of important up to date information, such
                        as events, weather, school closings, and more. Messages
                        are sent directly to your listener’s phone.
                      </p>
                    </div>
                  </Col>
                  <Col
                    md="6"
                    lg="9"
                    xl="10"
                    data-aos="fade-right"
                    data-aos-duration="1100"
                  >
                    <div className="single-widget mb-9">
                      <h3 className="w-title gr-text-7">Campaigns </h3>
                      <p className="gr-text-9 mb-0">Add banners to your app.</p>
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
};

export default Content;
