import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const GalleryInfo = ({ gallery }) => (
  <>
    {/* <!-- News section --> */}
    <div className="news-section pt-8 pb-8 py-lg-0 bg-default-2">
      <Container>
        {gallery.map((item) => {
          return (
            <>
              <Row className="" key={item.id}>
                <div className="col-xl-9 col-lg-9 col-md-9">
                  <div className="  pt-0 mb-6 mb-lg-6">
                    <h2 className="title gr-text-4 mb-0">
                      {item.title.rendered}
                    </h2>
                  </div>
                </div>
              </Row>

              <Row
                className="justify-content-center"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                {item.images.map((image) => {
                  return (
                    <>
                      <Col md="6" lg="4" key={image.id}>
                        <div className="location-card mb-9 gr-hover-shadow-1">
                          <a className="card-img">
                            <img
                              src={image.guid}
                              alt=""
                              className="w-100 rounded-10"
                            />
                          </a>
                        </div>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </>
          );
        })}
      </Container>
    </div>
  </>
);

export default GalleryInfo;
