import React from "react";
import PageWrapper from "../../components/PageWrapper";
import AllHero from "../../sections/famcast/AllPagesHero";
import Blog from "../../sections/famcast/Blog";
import Head from "next/head";
const baseUrl = `https://famcast.co.za/q`;

const apiUrl = process.env.API_URL;

export default function index({ homenews }) {
  return (
    <div>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "right",
          isFluid: true,
          button: "tman2", // cta, account, null
          buttonText: "Get started free",
        }}
        footerConfig={{
          theme: "dark",
          style: "style1", //style1, style2
        }}
      >
        <Head>
          <title>Innovative Radio blog | Audio Streaming Blog</title>
          <meta
            name="twitter:title"
            content="Innovative Radio blog | Audio Streaming Blog"
          />
          <meta
            property="og:title"
            content="Innovative Radio blog | Audio Streaming Blog"
          />

          <meta name="keywords" content="Innovative, Radio, Technology"></meta>
          <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />

          <meta
            property="article:publisher"
            content="https://www.facebook.com/SekgoseseInsider/"
          />

          <meta property="og:type" content="article" />

          <meta
            name="description"
            content="Read the latest blog posts about our new features and Radio advice to help you innovate and improve"
          />
          <meta
            property="og:description"
            content="Read the latest blog posts about our new features and Radio advice to help you innovate and improve"
          />
          <meta
            name="twitter:description"
            content="Read the latest blog posts about our new features and Radio advice to help you innovate and improve"
          />
        </Head>
        <AllHero
          title={"Articles"}
          imgUrl="/q/image/blog.webp"
          subtitle="
            Read the latest blog posts about our new features and Radio advice
            to help you innovate and improve
          "
        />
        <Blog homenews={homenews} />
      </PageWrapper>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${apiUrl}/wp-json/wp/v2/posts/?per_page=10&_embed`);

  const homenews = await res.json();

  return {
    props: {
      homenews: homenews,
    },
    revalidate: 1,
  };
}
