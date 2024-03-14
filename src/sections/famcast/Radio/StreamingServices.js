import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { streamingInfo } from "../../../info/streamingInfo";
const StreamingServices = () => {
  return (
    <>
      {/* <!-- Services Area --> */}
      <div className="bg-blackish-blue py-20 service-11">
        <Container>
          <Row className="justify-content-center">
            <Col xl="11" lg="11" sm="10">
              <div className="section-title text-center  mb-11 mb-lg-20">
                <h2 className="title gr-text-4 mb-7 heading-color text-white">
                  Features
                </h2>
                <p className="gr-text-8 px-lg-7 px-xl-0 text-color-opacity text-white">
                  It doesn't matter if you're new to the world of internet
                  radio, or if you're a professional broadcaster. FamCast has
                  the plans and features you need, at the right price.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {streamingInfo.map((item, i) => {
              return (
                <div
                  className="col-md-4 wrap-service11-box"
                  key={i}
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-delay="400"
                >
                  <div className="card card-shadow border-0 mb-10 bg-blackish-blue">
                    <div className="p-4">
                      <div className="icon-space">
                        <div className="icon-round text-center d-inline-block rounded-circle bg-success-gradiant">
                          <i className={item.icon}></i>
                        </div>
                      </div>
                      <h6 className="font-weight-medium text-white">
                        {item.title}
                      </h6>
                      <p className="mt-3 text-white">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default StreamingServices;
