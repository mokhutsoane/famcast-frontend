import React, { useRef } from "react";
import styled from "styled-components";
import Link from "../../components/Link";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";

const SliderStyled = styled(Slider)`
  .slick-slide div {
    &:focus {
      outline: nnone !important;
    }
  }
`;

const HomeRadios = ({ station }) => {
  const elSlider = useRef();

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    className: "single-slide",

    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* <!-- Jobs section --> */}
      <div className="job-site-page feature-section bg-default-6 bg-pattern pattern-5 pt-13 pt-lg-24 pb-2 pb-lg-22">
        <Container>
          <Row className="justify-content-lg-between align-items-center pb-9 pb-sm-0">
            <Col sm="8" md="6" lg="6" xl="5">
              <div className="section-title mb-9 mb-sm-13 mb-lg-21">
                <h2 className="title gr-text-4 mb-6 heading-color">
                  Featured Radio Stations
                </h2>
                <p className="gr-text-8 text-color-opacity">
                  Recent Radio Stations
                </p>
              </div>
            </Col>
            <Col sm="4" md="6" lg="4" xl="3">
              <div className="job-feature-slider-arrows ms-auto">
                <button
                  className="slick-prev slick-arrow"
                  aria-label="Previous"
                  type="button"
                  onClick={() => {
                    elSlider.current.slickPrev();
                  }}
                >
                  Previous
                </button>
                <button
                  className="slick-next slick-arrow"
                  aria-label="Next"
                  type="button"
                  onClick={() => {
                    elSlider.current.slickNext();
                  }}
                >
                  Next
                </button>
              </div>
            </Col>
          </Row>
          <div
            className="job-feature-slider"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <SliderStyled ref={elSlider} {...slickSettings}>
              {station.slice(0, 10).map((item) => (
                <div key={item.id}>
                  <Link
                    to={`/stations/${item.slug}`}
                    className="feature-widget focus-reset bg-white d-flex flex-column min-height-px-297 border rounded-10 pt-8 pb-8 ps-7 mx-6 ps-lg-9 pe-md-8 pe-lg-10 gr-hover-shadow-1"
                  >
                    <div className="mb-auto">
                      <h3 className="gr-text-7 text-blackish-blue">
                        {item.title}
                      </h3>
                      <p className="gr-text-11 gr-color-blackish-blue-opacity-7 mb-0">
                        {item.genre}
                      </p>
                    </div>
                    <div className="d-flex">
                      <div className="circle-35 pe-5">
                        <img
                          src={item.logo}
                          className="rounded-15 bg-light"
                          alt=""
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </SliderStyled>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomeRadios;
