
import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { Container, Row, Col } from "react-bootstrap";

const JobVideo = () =>{
    const gContext = useContext(GlobalContext);
    return(
        <div
          className="video-section bg-image py-28 py-lg-35 dark-mode-texts "
          css={`
            background-image: url("/image/inner/video-bg-2.png");
          `}
        >
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col xl="6" lg="7" md="8">
                <div className="text-center video-content">
                  <a
                    className="video-play-icon mx-auto circle-120 bg-primary gr-text-7 text-white my-lg-8 gr-hover-y focus-reset"
                    href="#/"
                    onClick={(e) => {
                      e.preventDefault();
                      gContext.toggleVideoModal();
                    }}
                    tabIndex="-1"
                  >
                    <i className="icon icon-triangle-right-17-2"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default JobVideo;