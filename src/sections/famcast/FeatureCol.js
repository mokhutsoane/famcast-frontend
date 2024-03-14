import React from "react";
import { Col } from "react-bootstrap";

export default function FeatureCol({ item, count }) {
  return (
    <Col md="6" lg="4" className="mb-12">
      <div
        className="feature-widget d-sm-flex"
        data-aos="fade-up"
        data-aos-duration="1100"
        data-aos-delay="500"
      >
        <div className="widget-icon gr-text-4 text-blue me-8 mb-7 mb-md-0">
          <i className={item.icon}></i>
        </div>
        <div className="content">
          <h3 className="title heading-color gr-text-7 mb-6">{item.title}</h3>
          <p className="gr-text-9 text-color-opacity gr-text-color-opacity mb-0">
            {item.description}
          </p>
        </div>
      </div>
    </Col>
  );
}
