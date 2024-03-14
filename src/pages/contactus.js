import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Contact2 from "../components/Form/src/Contact2";

import PageWrapper from "../components/PageWrapper";
import Head from "next/head";

import PageHero from "../sections/famcast/PageHero";
const Contact = () => {
  return (
    <PageWrapper
      headerConfig={{
        align: "right",
        button: "tman", // cta, account, null
        isFluid: true,
        theme: "dark",
      }}
      footerConfig={{
        theme: "dark",
        style: "style3", //style1, style2
      }}
    >
      <Head>
        <title>Contact Us | FamCast Online Radio Platform</title>
        <meta
          name="description"
          content="Online Radio Hosting: Create Your Own Online Radio Station, Plans Starts from R135/mo.
            Icecast Hosting.Shoutcast Hosting. AutoDj.
            Audio Streaming platform in South Africa"
        />

        <link rel="canonical" href="https://famcast.co.za/q" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          property="og:title"
          content="Audio Streaming platform in South Africa | Online Radio, webradio,
              internet radio & Audio Streaming &amp; Web Design Johannesburg - Website Design &amp; Digital Agency"
        />
        <meta property="og:image" content="/q/image/logo.png" />
        <meta name="theme-color" content="#151515" />
        <meta property="og:url" content="https://famcast.co.za" />
        <meta property="og:site_name" content="famcast" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/famcast.co.za"
        />
        <meta name="twitter:card" content="/q/image/logo.png" />

        <link rel="icon" type="image/png" href="/q/image/logo.png" />
      </Head>
      <PageHero title="Contact us" />

      <div className="pb-10 pb-md-10">
        <Container>
          <Row className="justify-content-center">
            <Col xs="12" className="mb-3">
              <Row>
                <Col md="5" lg="4" className="mb-3">
                  <div className="single-contact-widget d-flex">
                    <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-primary mr-7">
                      <i className="icon icon-phone-2"></i>
                    </div>
                    <div className="widget-text">
                      <h3 className="gr-text-6 mb-5">Call us</h3>
                      <p className="gr-text-7 mb-0">
                        087 700 7521 <br />
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="5" lg="4" className="mb-3">
                  <div className="single-contact-widget d-flex">
                    <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-primary mr-7">
                      <i className="icon icon-email-83"></i>
                    </div>
                    <div className="widget-text">
                      <h3 className="gr-text-6 mb-5">Email us</h3>
                      <p className="gr-text-7 mb-0">
                        info@famgroup.co.za
                        <br />
                        radio@famgroup.co.za
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="5" lg="4" className="mb-3">
                  <div className="single-contact-widget d-flex">
                    <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-primary mr-7">
                      <i className="icon icon-pin-3-2"></i>
                    </div>
                    <div className="widget-text">
                      <h3 className="gr-text-6 mb-5">Visit us</h3>
                      <p className="gr-text-7 mb-0">
                        9247 Lekgatla St,
                        <br />
                        Randfontein, 1766
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Contact2 />
          </Row>
        </Container>
      </div>
    </PageWrapper>
  );
};
export default Contact;
