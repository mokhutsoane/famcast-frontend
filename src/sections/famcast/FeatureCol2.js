import React from "react";
import { Col } from "react-bootstrap";

export default function FeatureCol2({ item, count }) {
  return (
    <Col lg="4" md="6" className="mb-8 mb-md-13 mb-lg-0">
      <div
        className="feature-widget media"
        data-aos="fade-up"
        data-aos-duration="1100"
        data-aos-delay="500"
      >
        <div className="widget-icon  gr-text-4 text-blue me-8 mb-7 mb-md-0">
          <i className={item.icon}></i>
        </div>
        <div className="widget-texts">
          <h3 className="title gr-text-7 fw-bold mb-6 heading-color">
            {item.title}
          </h3>
          <p className="gr-text-9 mb-0 text-color-opacity">
            {item.description}
          </p>
        </div>
      </div>
    </Col>
  );
}
