import Head from "next/head";
import { Container } from "react-bootstrap";
import React, { useState } from "react";
import AllRadioData from "../../sections/famcast/Radio/AllRadioData";
import PageWrapper from "../../components/PageWrapper";
import PageHero from "../../sections/famcast/PageHero";
import GoogleAds from "../../components/Layout/GoogleAds";
const baseurl = "https://famcast.co.za/q/stations/";

export default function Home({ station }) {
  const [search, setSearch] = useState("");

  function searchRadio(items) {
    return items.filter(
      (item) =>
        item.title.toLowerCase().indexOf(search) > -1 ||
        item.title.toUpperCase().indexOf(search) > -1
    );
  }
  return (
    <div className="bg-dark">
      <Head>
        <title>Radio Stations | FamCast Online Radio Platform</title>

        <meta
          name="Description"
          content="Listen to Live Internet Radio - AM ,FM and Online Radio Station |
          Audio Streaming platform in South Africa | Online Radio, webradio,
          internet radio & Audio Streaming"
        ></meta>
        <meta name="theme-color" content="#151515" />

        <link
          rel="icon"
          type="image/png"
          href="https://famcast.co.za/ico/favicon.png"
        />
      </Head>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          isFluid: true,
          align: "right",
          button: "tman2", // cta, account, null
          buttonText: "Start a free trial",
        }}
        footerConfig={{
          theme: "dark",
          style: "style3", //style1, style2
        }}
      >
        <PageHero title="Find and Listen To Your Favorite Stations" />

        <Container>
          <div className="form-group mb-3">
            <input
              className="form-control "
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <GoogleAds currentPath={`${baseurl}/`} />

          <AllRadioData station={searchRadio(station)} />
        </Container>
      </PageWrapper>
    </div>
  );
}
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
