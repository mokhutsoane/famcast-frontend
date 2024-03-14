import React from "react";
import PageWrapper from "../components/PageWrapper";

import StreamingHero from "../sections/famcast/StreamingHero";
import Head from "next/head";
import StreamingServices from "../sections/famcast/Radio/StreamingServices";
import AppContent from "../sections/famcast/AppContent";
import Process from "../sections/famcast/Radio/Process";

export default function Streaming() {
  return (
    <>
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
          <title>FamCast: Quick-Start Your Own Internet Radio Station</title>
          <meta
            name="description"
            content="Online Radio Hosting: Create Your Own Online Radio Station, Plans Starts from R135/mo. We offer services specifically designed for you"
          />

          <link rel="canonical" href="https://famcast.co.za/q/streaming/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            property="og:title"
            content="FamCast: Quick-Start Your Own Internet Radio Station"
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:description"
            content="Get your online radio started with Famcast | Audio Streaming"
          />

          <meta property="og:image" content="/q/image/logo.png" />
          <meta name="theme-color" content="#151515" />
          <meta
            property="og:url"
            content="https://famcast.co.za/q/streaming/"
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
            content="FamCast: Quick-Start Your Own Internet Radio Station"
          />
          <meta
            name="twitter:description"
            content="Get your online radio started with Famcast | Audio Streaming"
          />
          <meta name="twitter:image" content="/q/image/logo.png" />

          <link rel="icon" type="image/png" href="/q/image/logo.png" />
        </Head>
        <StreamingHero />
        <StreamingServices />
        <Process />
        <AppContent />
      </PageWrapper>
    </>
  );
}
