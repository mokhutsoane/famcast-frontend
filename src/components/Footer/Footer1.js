import React, { useContext } from "react";
import Link from "../Link";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";

const Footer = () => {
  const gContext = useContext(GlobalContext);

  const linkClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  const iconClassName =
    gContext.footer.theme === "dark"
      ? "text-storm gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  return (
    <>
      <div
        className={`footer-section pt-15 pt-lg-25 pb-lg-21 ${
          gContext.footer.theme === "dark"
            ? "dark-mode-texts bg-blackish-blue"
            : ""
        }`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="3" md="4">
              <Logo
                white={gContext.footer.theme === "dark"}
                className="footer-logo mb-11"
              />
              <p className="gr-text-11 text-color-opacity">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
              <ul className="social-icons py-7 list-unstyled mb-7 mb-lg-0">
                <li className="me-2">
                  <Link to="/" className={iconClassName}>
                    <i className="icon icon-logo-twitter"></i>
                  </Link>
                </li>
                <li className="me-2">
                  <Link to="/" className={iconClassName}>
                    <i className="icon icon-logo-facebook"></i>
                  </Link>
                </li>
                <li className="me-2">
                  <Link to="/" className={iconClassName}>
                    <i className="icon icon-instant-camera-2"></i>
                  </Link>
                </li>
                <li className="me-2">
                  <Link to="/" className={iconClassName}>
                    <i className="icon icon-logo-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg="8" md="8" className="offset-lg-1">
              <Row>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 text-color-opacity mb-7">Company</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          About us
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          Contact us
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          Careers
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          Press
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 text-color-opacity mb-7">Product</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          Features
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          Pricing
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          News
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          Help desk
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          Support
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 text-color-opacity mb-7">Services</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          Digital Marketing
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          Content Writing
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          SEO for Business
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          UI Design
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 text-color-opacity mb-7">Legal</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          Terms &amp; Conditions
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          Return Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
