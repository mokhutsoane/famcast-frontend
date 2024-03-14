import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { Select } from "../../components/Core";
import AppContactForm from "../../components/Form/src/AppContactForm";

const defaultOptions = [
  { value: "dm", label: "Digital Marketing" },
  { value: "cr", label: "Content Writing" },
  { value: "gd", label: "Graphic Design" },
  { value: "seo", label: "SEO for Business" },
];

const AppDHero = () => {
  return (
    <>
      {/* <!-- CTA Area --> */}
      <div className="cta-section overflow-hidden pt-30 py-25 py-lg-25 bg-mirage bg-pattern pattern-1 ">
        <Container>
          <Row className="align-items-center">
            <Col xl="5" md="6" data-aos="fade-right" data-aos-duration="800">
              <div className="section-title pe-lg-7 mb-0 dark-mode-texts">
                <h1 className="title gr-text-4 mb-6 text-white">
                  Mobile App Development Services{" "}
                </h1>
                <p className="gr-text-8 pe-lg-7 mb-0 text-color-opacity">
                  We offer native and cross-platform mobile development services
                  for various industries, including Radio Stations, Sports,
                  e-commerce, etc.
                </p>
              </div>
            </Col>
            <Col
              xl="4"
              lg="5"
              md="6"
              className="offset-xl-3 offset-lg-1 mt-9 mt-md-0"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <AppContactForm />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AppDHero;
