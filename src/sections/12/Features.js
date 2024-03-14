import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import record from "../../../public/img/record.png";
import live from "../../../public/img/live-show.png";
import playlist from "../../../public/img/playlist.png";
import https from "../../../public/img/https.png";
import feedback from "../../../public/img/feedback.png";
import advertisement from "../../../public/img/advertisement.png";

const Features = () => {
  return (
    <>
      {/* <!-- Features Area --> */}
      <div className="feature-section pt-16 pt-lg-16 ">
        <Container>
          <Row className="">
            <Col md="8" lg="7" xl="6">
              <div className="section-title  mb-13 mb-lg-13">
                <h2 className="title gr-text-5">FEATURES</h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green mr-sm-9 mb-7 mb-lg-0">
                  <img className="" src={live} alt="/" height="50" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5">
                    Web TV & Live TV Channels Automation
                  </h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    FamCast Internet TV Channel Service System offers you to
                    create and schedule server side playlists to automate your
                    video streaming solution like the Real TV Channel.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green mr-sm-9 mb-7 mb-lg-0">
                  <img className="" src={playlist} alt="/" height="50" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5">
                    Advanced Playlists Scheduler
                  </h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    Control panel allows you to create different types of
                    playlist schedulers. Control Panel allows 3 types of
                    schedules: Nonstop, Daily & Oneshot.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green mr-sm-9 mb-7 mb-lg-0">
                  <img className="" src={https} alt="/" height="50" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5">
                    HTTPS Streaming (SSL Streaming Link)
                  </h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    Secure native (no proxy) HTTPS streaming is available on
                    FamCast for .m3u8 & rtmp streaming link.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green mr-sm-9 mb-7 mb-lg-0">
                  <img className="" src={advertisement} height="50" alt="/" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5">Jingle Video</h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    Jingle Video feature to allow you to run a playlist inside
                    the current scheduler playlist after X videos. For example :
                    Play advertising videos every 3 videos in any playlist
                    running in the scheduler.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green mr-sm-9 mb-7 mb-lg-0">
                  <img className="" src={feedback} height="50" alt="/" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5">Simulcasting</h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    It is possible to publish your Live Streaming and TV Station
                    services to Facebook, YouTube and Twitch at the same time
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green mr-sm-9 mb-7 mb-lg-0">
                  <img className="" src={record} height="50" alt="/" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5">Stream Recording</h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    This option will allow recording your live streaming to
                    server storage. You can access from the file manager to find
                    your recording video files, Also you can use recording video
                    files to add to the playlist for the webTV channel.
                  </p>
                </div>
              </div>
            </Col>
            <div className="col-12">
              <div className="border-sm-divider dark text-center mt-lg-0 "></div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Features;
