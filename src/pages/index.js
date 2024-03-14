import dynamic from "next/dynamic";
import React from "react";

import Head from "next/head";
const Services = dynamic(() => import("../sections/famcast/Services"));
const AppContent = dynamic(() => import("../sections/famcast/AppContent"));
const HomeHero = dynamic(() => import("../sections/famcast/HomeHero"));
const PageWrapper = dynamic(() => import("../components/PageWrapper"));
const HomeRadios = dynamic(() => import("../sections/famcast/HomeRadios"));

export default function Home({ station }) {
  return (
    <div className="">
      <Head>
        <title>Audio Streaming | Website Design | iPhone Android Apps</title>
        <meta
          name="description"
          content="Online Radio Hosting: Create Your Own Online Radio Station, Plans Starts from R135/mo.Icecast and Shoutcast Hosting. We develop websites and app"
        />

        <meta
          name="keywords"
          content="webstreaming, live streaming, webcasts, Audio Streaming, Start online Radio Station"
        ></meta>

        <link rel="canonical" href="https://famcast.co.za/q/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          property="og:title"
          content="Audio Streaming  | Website Design | iPhone Android Apps"
        />
        <meta property="og:image" content="/q/image/logo.png" />
        <meta name="theme-color" content="#151515" />
        <meta property="og:url" content="https://famcast.co.za/q/" />
        <meta property="og:site_name" content="famcast" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/famcast.co.za"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Audio Streaming | Web Design | IOS and Android Apps"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@famgroupsa" />
        <meta
          name="twitter:title"
          content=" Audio Streaming  | Website Design | iPhone Android Apps "
        />
        <meta
          name="twitter:description"
          content="Audio Streaming platform in South Africa | Online Radio, webradio,
              internet radio & Audio Streaming &amp; Web Design Randfontein"
        />
        <meta name="twitter:image" content="/q/image/logo.png" />
      </Head>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "right",
          isFluid: true,

          button: "tman2", // cta, account, null
          buttonText: "Start a free trial",
        }}
        footerConfig={{
          theme: "dark",
          style: "style3", //style1, style2
        }}
      >
        <HomeHero />
        <Services />
        <AppContent />
        <HomeRadios station={station} />
      </PageWrapper>
    </div>
  );
}

// export async function getStaticProps(context) {
//   const res = await fetch(
//     "https://dashboard.famcast.co.za/wp-json/wp/v2/radio_station"
//   );
//   const station = await res.json();

//   return {
//     props: {
//       station,
//     },
//     revalidate: 1,
//   };
// }
export async function getServerSideProps() {
  const res = await fetch(
    "https://restream.co.za/home/api/stations/?format=json"
  );
  const station = await res.json();

  return {
    props: {
      station,
    },
  };
}
