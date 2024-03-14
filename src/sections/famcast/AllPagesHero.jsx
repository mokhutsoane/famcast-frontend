import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export default function AllHero({ title, subtitle, imgUrl }) {
  return (
    <div>
      <div
        className="bg-image position-relative z-index-1 bg-gradient-black pb-10 pt-24 pt-lg-28 pb-lg-18 rounded-bottom-15 "
        css={`
          background-image: url(${imgUrl});
        `}
      >
        <Container>
          <Row className=" align-items-center ">
            <Col
              md="11"
              lg="8"
              xl="8"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="glassBox  p-3 section-title  rounded-10 mt-15 ">
                <h1 className="gr-text-4 gr-text-s-8 fw-bold mb-8 text-white ">
                  {title}
                </h1>
                <p className="gr-text-8 pe-sm-7 pe-md-12 text-white">
                  {subtitle}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
