import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";

import RadioPlayer from "../../sections/famcast/Radio/RadioPlayer";
import Content from "../../sections/famcast/Content2";
import RadioPageAd from "../../components/Layout/RadioPageAd";
import StationHero from "../../sections/famcast/StationHero";

const Player = dynamic(() => import("../../sections/famcast/Radio/Player"), {
  ssr: false,
});

const baseurl = "https://famcast.co.za/q/stations/";

const PageWrapper = dynamic(() => import("../../components/PageWrapper"));

function Radio({ radio }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-licorice">
      <Head>
        <link rel="icon" type="image/png" href={radio.station.logo} />

        <title>{radio.station.title} | Live Streaming</title>
        <meta name="description" content={radio.station.short_description} />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content={`${radio.station.title}, Online radio, Webstreaming, Live streaming, webcasts, Live stream, streaming solutions, streaming audio solutions, streaming south africa, youtube content, streaming solutions SA, stream your event, stream your meeting, livecast, live streaming solutions for business, 360 stream solutions, youtube streaming solutions, broadcast solutions, business streaming solutions, business streaming, business webcast, product launch, fashioncasts, sports streaming, concert cast`}
        ></meta>
        <link rel="canonical" href={`${baseurl}${radio.station.slug}/`} />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${radio.station.title} | Live Streaming`}
        />
        <meta property="og:image" content={radio.station.logo} />
        <meta name="theme-color" content="#151515" />
        <meta property="og:url" content={`${baseurl}${radio.station.slug}/`} />
        <meta property="og:site_name" content="famcast" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/famcast.co.za"
        />
        <meta
          property="og:description"
          content={radio.station.short_description}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@famgroupsa" />
        <meta
          name="twitter:title"
          content={`${radio.station.title} | Live Streaming`}
        />
        <meta
          name="twitter:description"
          content={radio.station.short_description}
        />
        <meta name="twitter:image:src" content={radio.station.logo} />
        <meta name="twitter:domain" content="FamGroup" />
        <meta name="twitter:creator" content="@famgroupsa" />
      </Head>

      <Script src="https://famcast.co.za/luno/js/lunaradio.min.js" />

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
          style: "style2", //style1, style2
        }}
      >
        <StationHero
          title={radio.station.title}
          slogen={radio.station.short_description}
          logo={radio.station.logo}
          whatsapp={radio.station.whatsapp}
          facebook_handle={radio.station.facebook_handle}
          twitter_handle={radio.station.twitter_handle}
        >
          {" "}
          <Player url={radio.station.stream_url} />
        </StationHero>

        <div className="pt-3 pt-lg-5 ">
          <div className="mx-auto p-0 py-5 py-md-5">
            <div className="container">
              <Content
                short_description={radio.station.short_description}
                description={radio.station.description}
                email_address={radio.station.radio_email_address}
                slug={radio.station.slug}
                contacts_details=<div>
                  {radio.station.radio_email_address && (
                    <div className="gr-color-blackish-blue-opacity-7 mt-n3 gr-text-9 pb-8 pr-8">
                      <a
                        href={`mailto:${radio.station.radio_email_address}`}
                        className="hover link-body"
                      >
                        {radio.station.radio_email_address}
                      </a>
                    </div>
                  )}
                </div>
              >
                <RadioPageAd currentPath={`${baseurl}${radio.station.slug}/`} />
              </Content>
            </div>
          </div>

          <RadioPlayer
            image={radio.station.logo}
            streamurl={radio.station.stream_url}
            radioname={radio.station.title}
          />
        </div>
      </PageWrapper>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const res = await fetch(`https://famcast.co.za/home/api/stations/${slug}/`);

  const radio = await res.json();

  return {
    props: {
      radio: radio,
    },
  };
}

export default Radio;
