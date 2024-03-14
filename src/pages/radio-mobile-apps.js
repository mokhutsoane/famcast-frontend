import React, { Component } from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/famcast/Hero";

import Head from "next/head";

import Content from "../sections/app/Content1";
import Content2 from "../sections/app/Content2";

export class RadioMobileApp extends Component {
  render() {
    return (
      <div>
        <PageWrapper
          headerConfig={{
            theme: "dark",
            align: "right",
            variant: "danger",
            isFluid: true,
            button: "tman2", // cta, account, null
          }}
          footerConfig={{
            style: "style3", //style1, style2
          }}
        >
          <Head>
            <title>Listen Live | Radio Mobile App | Online Radio</title>
            <meta
              name="description"
              content="We offer Complete mobile solutions for a global audience, at no cost to broadcasters"
            ></meta>
            <meta property="og:image" content="/q/image/logo.png" />

            <meta
              property="og:url"
              content="https://famcast.co.za/q/radio-mobile-apps/"
            />
            <meta property="og:type" content="article" />
            <meta
              property="og:title"
              content="Listen Live | Radio Mobile App | Online Radio"
            />
            <meta
              property="og:description"
              content="We offer Free Complete mobile solutions for a global audience."
            />

            <meta name="theme-color" content="#8240bf" />

            <meta
              property="og:url"
              content="https://famcast.co.za/q/radio-mobile-apps/"
            />
            <meta property="og:site_name" content="famcast" />

            <meta
              property="article:publisher"
              content="https://www.facebook.com/famcast.co.za"
            />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@famgroupsa" />
            <meta
              name="twitter:title"
              content="Listen Live | Radio Mobile App"
            />
            <meta
              name="twitter:description"
              content="We offer Complete mobile solutions for a global audience, at no cost to broadcasters"
            />
            <meta name="twitter:image" content="/q/image/logo.png" />

            <link rel="canonical" href="https://famcast.co.za/q/" />

            <link
              rel="icon"
              type="image/png"
              href="https://famcast.co.za/ico/favicon.png"
            />
          </Head>
          <Hero />
          <Content />
          <Content2 />
          <div className="gradient-sections-wrapper bg-gradient-1"></div>
        </PageWrapper>
      </div>
    );
  }
}

export default RadioMobileApp;
