import React, { useContext } from "react";
import Link from "../Link";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";

const Footer = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <div className="footer-section bg-default-4 py-9 ">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="3" md="4">
              <div className="footer-logo text-center text-md-left mb-7 mb-md-0">
                <Logo
                  white={gContext.footer.theme === "dark"}
                  className="mx-auto mx-md-0"
                />
              </div>
            </Col>
            <Col lg="8" md="8" className="offset-lg-1">
              <ul className="footer-links gr-text-11 py-lg-7 list-unstyled mb-0 d-xs-flex align-items-center justify-content-around justify-content-md-end flex-wrap">
                <li className="ms-md-12 text-center">
                  <Link
                    to="/#"
                    className="gr-text-color gr-hover-text-blue fw-bold "
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="ms-md-12 text-center">
                  <Link
                    to="/#"
                    className="gr-text-color gr-hover-text-blue fw-bold "
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="ms-md-12 text-center">
                  <Link
                    to="/#"
                    className="gr-text-color gr-hover-text-blue fw-bold "
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
