import React from "react";
import PageWrapper from "../components/PageWrapper";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import FeatureCol2 from "../sections/famcast/FeatureCol";
import { webInfo } from "../info/webInfo";

const WebHero = dynamic(() => import("../sections/famcast/WebHero"));
export default function WebDevelopment() {
  return (
    <div className="bg-default-2">
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "right",
          isFluid: true,

          button: "tman", // cta, account, null
          buttonText: "Start a free trial",
        }}
        footerConfig={{
          theme: "dark",
          style: "style3", //style1, style2
        }}
      >
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          />
          <meta name="theme-color" content="#151515" />
          <title>
            Website Design | Digital Agency | E-Commerce, Online Shop
          </title>

          <meta
            name="description"
            content="Website Design And Digital Agency Located In South Africa. Creating Beautiful E-Commerce, Online Shop, Digital Marketing and Web Design Solutions For You"
          />
          <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <link
            rel="canonical"
            href="https://famcast.co.za/q/web_development/"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Web Design South Africa - Website Design &amp; Digital Agency"
          />
          <meta
            property="og:description"
            content="Web Design South Africa: A Website Design And Digital Agency"
          />
          <meta
            property="og:url"
            content="https://famcast.co.za/q/web_development/"
          />
          <meta property="og:site_name" content="famcast" />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/famcast.co.za"
          />

          <meta property="og:image" content="/q/image/logo.png" />

          <meta
            name="twitter:title"
            content="Website Design | Digital Agency |  E-Commerce"
          />
          <meta
            name="twitter:description"
            content="Web Design South Africa: A Website Design And Digital Agency"
          />
          <meta name="twitter:image" content="/q/image/logo.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@famgroupsa" />
          <meta name="twitter:site" content="@famgroupsa" />

          <link rel="icon" type="image/png" href="/q/image/logo.png" />
        </Head>

        <WebHero />
        <div className="container pt-15 bg-default-2">
          <div className="section-title mb-15 mb-sm-15 mb-lg-15">
            <h2 className="title gr-text-12 mb-6 heading-color">WHAT WE DO?</h2>
            <h2 className="gr-text-8 text-color-opacity">
              We bring rapid solutions to make the life of our customers easier.
            </h2>
          </div>
        </div>
        <div className="feature-section  bg-default-2  pb-9 pb-md-0 pb-lg-17">
          <Container>
            <Row className="">
              {webInfo.map((item, i) => {
                i *= 500;
                return <FeatureCol2 item={item} key={i} count={i + 500} />;
              })}
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </div>
  );
}
