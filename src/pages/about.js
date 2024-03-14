import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Head from "next/head";

import PageHero from "../sections/famcast/PageHero";
import ShareButton from "../sections/famcast/Radio/ShareButton";

export default function AboutPage({ aboutpage }) {
  return (
    <>
      <Head>
        <title>{aboutpage.title.rendered} | Famcast</title>
        <meta
          name="description"
          content=" FamCast is an Website, Android and IOS developer that has been active since 2017. The current app portfolio contains more than 60 apps."
        />

        <meta
          name="keywords"
          content=" connect radio,online radio, webstreaming, live streaming, webcasts, Live stream, streaming solutions, streaming audio solutions, streaming south africa, youtube content, streaming solutions SA, stream your event, stream your meeting, livecast, live streaming solutions for business, 360 stream solutions, youtube streaming solutions, broadcast solutions, business streaming solutions, business streaming, business webcast, product launch, fashioncasts, sports streaming, concert cast"
        ></meta>

        <link rel="canonical" href="https://famcast.co.za/q/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:title" content="About Us" />
        <meta property="og:image" content="/q/image/logo.png" />
        <meta name="theme-color" content="#151515" />
        <meta property="og:url" content="https://famcast.co.za/q/" />
        <meta property="og:site_name" content="famcast" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/famcast.co.za"
        />

        <meta property="og:type" content="article" />
        <meta property="og:description" content="About FamCast" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@famgroupsa" />
        <meta name="twitter:title" content=" About Us " />
        <meta
          name="twitter:description"
          content="FamCast is an Website, Android and IOS developer that has been active since 2017. The current app portfolio contains more than 60 apps."
        />
        <meta name="twitter:image" content="/q/image/logo.png" />

        <link rel="icon" type="image/png" href="/q/image/logo.png" />
      </Head>

      <PageWrapper
        headerConfig={{
          align: "right",
          button: "tman",
          theme: "dark",
          isFluid: true,
        }}
      >
        <PageHero title="About Us" />
        <div className="inner-banner"></div>
        <div className="about-content pt-lg-8 pt-8 pb-10 pb-lg-10">
          <Container>
            <Row>
              <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-3 mb-0">
                    We are here to help the customers to get their success.
                  </h2>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <div className="gr-text-8 mb-7 mb-lg-10">
                    <div
                      className="gr-text-8 mb-8 "
                      dangerouslySetInnerHTML={{
                        __html: aboutpage.content.rendered,
                      }}
                    ></div>
                  </div>
                </div>
                <ShareButton
                  url={"https://famcast.co.za/q/mobile_app/"}
                  title={
                    "FamCast is an Website, Android and IOS developer that has been active since 2017. The current app portfolio contains more than 60 apps."
                  }
                  quote={
                    "FamCast is an Website, Android and IOS developer that has been active since 2017. The current app portfolio contains more than 60 apps."
                  }
                />
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    "https://dashboard.famcast.co.za/wp-json/wp/v2/pages?slug=about"
  );
  const res2 = await fetch(
    "https://radiodb.famcast.co.za/mohodi/wp-json/wp/v2/zbfm_team"
  );
  const aboutpage = await res.json();
  const team = await res2.json();
  return {
    props: {
      aboutpage: aboutpage[0],
      team,
    },
    revalidate: 1,
  };
}
