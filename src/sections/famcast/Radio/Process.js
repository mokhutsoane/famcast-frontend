import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Process = () => {
  return (
    <>
      {/* <!-- Process Area --> */}
      <div className="how-section pb-0 pt-13 pt-lg-13 pb-10 bg-azureish-white">
        <Container>
          <Row className="justify-content-center">
            <Col md="11">
              <div className="section-title text-center mb-11 mb-lg-17">
                <h2 className="title gr-text-3 mb-7 heading-color">
                  How Internet Radio Hosting Works?
                </h2>
                <p className="px-lg-8 gr-text-8 text-color-opacity">
                  Getting to know the basics of how online radio hosting works
                  can help you get a clearer picture of how your broadcasts get
                  to your listeners. There are three core stages your audio
                  takes
                </p>
              </div>
            </Col>
          </Row>
          <div className="gr-timeline-wrapper gr-flex-all-center">
            <div
              className="single-timeline-feature text-center px-6 px-md-9"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <div className="count circle-lg bg-red gr-text-4 mx-auto mb-12 text-white">
                <span>1</span>
              </div>
              <div className="content px-xl-7">
                <h3 className="title gr-text-7 mb-6 heading-color">
                  Source (You)
                </h3>
                <p className="gr-text-9 text-color-opacity">
                  The starting point, you’ll need an encode to convert audio
                  into a stream.
                </p>
              </div>
            </div>
            <div
              className="single-timeline-feature text-center px-6 px-md-9"
              data-aos="zoom-in"
              data-aos-duration="900"
              data-aos-delay="400"
            >
              <div className="count circle-lg bg-green gr-text-4 mx-auto mb-12 text-white">
                <span>2</span>
              </div>
              <div className="content px-xl-7">
                <h3 className="title gr-text-7 mb-6 heading-color">
                  Server (famcast)
                </h3>
                <p className="gr-text-9 text-color-opacity">
                  Your stream arrives at the famcast.co.za platform where the
                  signal is cleaned up and pushed through to the appropriate
                  channels.
                </p>
              </div>
            </div>
            <div
              className="single-timeline-feature text-center px-6 px-md-9"
              data-aos="zoom-in"
              data-aos-duration="900"
              data-aos-delay="800"
            >
              <div className="count circle-lg bg-blue gr-text-4 mx-auto mb-12 text-white">
                <span>3</span>
              </div>
              <div className="content px-xl-7">
                <h3 className="title gr-text-7 mb-6 heading-color">
                  Listener (Everyone)
                </h3>
                <p className="gr-text-9 text-color-opacity">
                  Your broadcasts are sent out to players on your site,
                  directories, apps, and direct links for your listeners to tune
                  in
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Process;
