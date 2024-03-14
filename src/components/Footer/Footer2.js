import React from "react";
import Link from "../Link";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";

const Footer = () => {
  return (
    <>
      <div className="footer-section pt-17 pt-lg-21 bg-blackish-blue dark-mode-texts pb-13">
        <Container>
          <div className="footer-top pb-lg-14">
            <Row>
              <Col xs="6" lg="2">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">Company</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link to="https://famcast.co.za/home/portfolios">
                        <p className="gr-text-9 gr-text-color gr-hover-text-red">
                          Our Work
                        </p>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/contactus">
                        <p className="gr-text-9 gr-text-color gr-hover-text-red">
                          Contact us
                        </p>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/about">
                        <p className="gr-text-9 gr-text-color gr-hover-text-red">
                          About us
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="2">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">Product</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link to="/radio-mobile-apps">
                        <p className="gr-text-9 gr-text-color gr-hover-text-red">
                          Radio App
                        </p>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/pricing">
                        <p className="gr-text-9 gr-text-color gr-hover-text-red">
                          Pricing
                        </p>
                      </Link>
                    </li>

                    <li className="py-2">
                      <Link to="/contactus">
                        <p className="gr-text-9 gr-text-color gr-hover-text-red">
                          Support
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="3">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">Legal</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link to="/privacy">
                        <p className="gr-text-9 gr-text-color gr-hover-text-red">
                          Privacy Policy
                        </p>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/#">
                        <p className="gr-text-9 gr-text-color gr-hover-text-red">
                          Terms &amp; Conditions
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="3" className="offset-lg-2">
                <div className="single-footer mb-13 mb-lg-9">
                  <div className="download-block">
                    <p className="download-title gr-text-11 mb-9">
                      Download Our App
                    </p>
                    <div className="download-btns">
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        aria-label="apple"
                        to="https://apps.apple.com/app/id1470606058"
                      >
                        <img
                          src="/q/image/l6/png/l6-download-appstore.png"
                          alt="apple"
                          className="mb-5 w-100 w-xs-auto"
                        />
                      </Link>
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        aria-label="google"
                        to="https://play.google.com/store/apps/details?id=com.famcast.radioapp"
                      >
                        <img
                          src="/q/image/l6/png/l6-download-gplay.png"
                          alt="googlr"
                          className="w-100 w-xs-auto"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="copyright-area border-top py-9">
            <Row className="align-items-center">
              <Col lg="6">
                <p className="copyright-text gr-text-11 mb-6 mb-lg-0 gr-text-color text-center text-lg-left">
                  © {moment().year()} Copyright, All Rights Reserved, Made by
                  FamCast with
                  <i className="icon icon-heart-2-2 text-red align-middle mx-2"></i>
                </p>
              </Col>
              <Col lg="6" className="text-center text-lg-right">
                <ul className="social-icons list-unstyled mb-0">
                  <li className="mx-7">
                    <Link to="https://twitter.com/famgroupsa">
                      <span
                        className="gr-text-color gr-hover-text-red"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Twitter"
                      >
                        <i className="icon icon-logo-twitter"></i>
                      </span>
                    </Link>
                  </li>
                  <li className="mx-7">
                    <Link to="https://www.facebook.com/famcast.co.za">
                      <span
                        className="gr-text-color gr-hover-text-red"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="facebook"
                      >
                        <i className="icon icon-logo-facebook"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
