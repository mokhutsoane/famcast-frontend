import React, { Component } from "react";
import PageWrapper from "../../components/PageWrapper";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Link from "../../components/Link";

export class index extends Component {
  render() {
    return (
      <div className="bg-default-1">
        <PageWrapper
          headerConfig={{
            theme: "light",
            isFluid: true,

            align: "right",
            button: "tman",
          }}
          footerConfig={{
            theme: "dark",
            style: "style3",
          }}
        >
          <Head>
            <title>Pricing & Plans | FamCast Online Radio Platform</title>
            <meta
              name="description"
              content="Online Radio Hosting: Create Your Own Online Radio Station, Plans Starts from R135/mo.
            Icecast Hosting.Shoutcast Hosting. AutoDj.
            Audio Streaming platform in South Africa"
            />

            <link rel="canonical" href="https://famcast.co.za/q/" />
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
            <meta property="og:url" content="https://famcast.co.za/q/" />
            <meta property="og:site_name" content="famcast" />
            <meta
              property="article:publisher"
              content="https://www.facebook.com/famcast.co.za"
            />
            <meta name="twitter:card" content="/q/image/logo.png" />

            <link rel="icon" type="image/png" href="/q/image/logo.png" />
          </Head>
          <div className="pb-11 pb-lg-14 pt-25 pt-lg-29 bg-default-1 position-relative">
            <Container>
              <Row className="justify-content-center align-items-center">
                <Col
                  md="11"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-delay="500"
                >
                  <div className="hero-content text-center">
                    <h1 className="gr-text-3 mb-8 heading-color">
                      Get things done by our awesome team
                    </h1>
                    <p className="gr-text-8 text-color-opacity">
                      We offer great prices, premium products and quality
                      service for your business.
                    </p>
                    <div className="hero-btns d-flex flex-column flex-md-row justify-content-md-center mt-11">
                      <Link
                        to="https://famcast.co.za/home/pricing/"
                        className="btn btn-white gr-hover-y mx-3"
                      >
                        Radio Pricing
                      </Link>
                      <Link
                        to="https://famcast.co.za/home/web-design-pricing/"
                        className="btn btn-white gr-hover-y mx-3"
                      >
                        Website Pricing
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </PageWrapper>
      </div>
    );
  }
}

export default index;
