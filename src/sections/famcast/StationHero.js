import React from "react";
const siteName = process.env.SITE_NAME;

import { Row, Col } from "react-bootstrap";
export default function StationHero({
  title,
  whatsapp,
  logo,
  twitter_handle,
  facebook_handle,
  children,
  slogen,
}) {
  return (
    <div
      className="bg-image position-relative z-index-1 bg-gradient-black pb-17 pt-24 pt-lg-24 pb-lg-30 "
      css={`
        background-image: url(${"/q/image/bg.svg"});
      `}
    >
      <header className="container d-flex pt-0 pt-md-10 pt-lg-14">
        <Row className=" align-items-center">
          <Col
            md="5"
            lg="4"
            xl="4"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-delay="500"
            className="px-10 px-lg-0"
          >
            <img
              className="card-img-center text-center w-100 rounded-10 "
              src={logo}
              alt="famcast"
            />
          </Col>
          <Col
            md="7"
            lg="8"
            xl="8"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-delay="500"
            className="px-10 pt-10 pt-md-0 pt-lg-0"
          >
            <div className="section-title dark-mode-texts  rounded-10  ">
              <h1 className="gr-text-4 gr-text-s-8 fw-bold text-white ">
                {title} - Streaming Live
              </h1>
              <p className="gr-text-8   text-color-opacity">{siteName}</p>
              <div className="d-flex flex-grow-1 ">
                <a
                  href={facebook_handle}
                  rel="noreferrer"
                  target="_blank"
                  type="button"
                  className="widget-icon circle-30-g bg-dark me-7"
                >
                  <i className="fab fa-facebook-f fa-lg text-white"></i>
                </a>
                <a
                  href={twitter_handle}
                  rel="noreferrer"
                  target="_blank"
                  className="widget-icon circle-30-g bg-dark me-7"
                >
                  <i className="fab fa-twitter fa-lg text-white"></i>
                </a>

                <a
                  href={`https://wa.me/${whatsapp}?text=Hello ${title}`}
                  rel="noreferrer"
                  target="_blank"
                  type="button"
                  className="widget-icon circle-30-g me-7 bg-dark"
                >
                  <i className="fab fa-whatsapp fa-lg text-white"></i>
                </a>
              </div>
              <p className="gr-text-8 text-color-opacity pt-5">{slogen}</p>
              {children}
            </div>
          </Col>
        </Row>
      </header>
    </div>
  );
}
