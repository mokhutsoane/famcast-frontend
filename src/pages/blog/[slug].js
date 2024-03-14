import React from "react";
import PageWrapper from "../../components/PageWrapper";
import moment from "moment";
import Link from "../../components/Link";

import { useRouter } from "next/router";

import Head from "next/head";
import ShareButton from "../../sections/famcast/Radio/ShareButton";
import AllHero from "../../sections/famcast/AllPagesHero";
const apiUrl = process.env.API_URL;

function MediaCentre({ post, relatednews }) {
  const router = useRouter();
  const baseUrl = `https://famcast.co.za/q`;

  if (router.isFallback) {
    return (
      <div>
        <AllHero title="Loading..." />
      </div>
    );
  }
  return (
    <div className="bg-light">
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content={post.title.rendered}></meta>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={post._embedded["wp:featuredmedia"][0].source_url}
        />
        <meta name="theme-color" content="#000" />
        <link
          rel="icon"
          type="image/png"
          href={post._embedded["wp:featuredmedia"][0].source_url}
        />

        <meta
          name="twitter:title"
          content={`${post.title.rendered} | Live Streaming`}
        />
        <meta name="twitter:description" content={post.title.rendered} />
        <meta
          name="twitter:image:src"
          content={post._embedded["wp:featuredmedia"][0].source_url}
        />
      </Head>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "right",
          isFluid: true,
          button: "tman", // cta, account, null
          buttonText: "Get started free",
        }}
        footerConfig={{
          theme: "dark",
          style: "style1", //style1, style2
        }}
      >
        <AllHero
          title={post.title.rendered}
          imgUrl={
            post._embedded["wp:featuredmedia"][0].media_details
              ? post._embedded["wp:featuredmedia"][0].source_url
              : "/q/image/hero/code4.jpg"
          }
          subtitle={moment(post.date).fromNow()}
        />

        <section className="pt-10 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-15">
                <ShareButton
                  url={`${baseUrl}${post.slug}/`}
                  title={post.title.rendered}
                  quote={post.title.rendered}
                />

                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: post.content.rendered,
                  }}
                ></div>
              </div>

              <div className="col-lg-4 ">
                <ul className="list-unstyled ">
                  <p className="display-8 text-capitalize text-dark font-weight-bold mt-2 mb-4">
                    MOST{" "}
                    <span
                      css={`
                        color: #be1e2d;
                      `}
                    >
                      READ
                    </span>
                  </p>
                  <hr className="new1" />

                  {relatednews.map((items) => {
                    return (
                      <li className="row mb-4" key={items.id}>
                        <Link to={`./${items.slug}`}>
                          <div className="col-3">
                            <img
                              src={
                                items._embedded["wp:featuredmedia"][0]
                                  .media_details
                                  ? items._embedded["wp:featuredmedia"][0]
                                      .media_details.sizes.medium.source_url
                                  : "/q/image/blog2.jpg"
                              }
                              alt="Image"
                              className="rounded img-fluid w-100"
                            />
                          </div>
                        </Link>

                        <div className="col-9">
                          <Link to={`./${items.slug}`}>
                            <h2 className="mb-3 gr-text-11 text-dark">
                              {items.title.rendered}
                            </h2>
                          </Link>

                          <div className="d-flex text-small">
                            <span className="text-muted ml-1">
                              {" "}
                              {moment(items.date).fromNow()}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${apiUrl}/wp-json/wp/v2/posts`);
  const station = await res.json();

  const paths = station.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return { paths, fallback: true };
}
export async function getStaticProps({ params, context }) {
  const res = await fetch(
    `${apiUrl}/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
  );
  const res2 = await fetch(`${apiUrl}//wp-json/wp/v2/posts?_embed`);
  const post = await res.json();

  const relatednews = await res2.json();

  return {
    props: {
      post: post[0],
      relatednews: relatednews.slice(1),
    },
    revalidate: 1,
  };
}

export default MediaCentre;
