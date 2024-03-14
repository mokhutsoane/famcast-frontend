import Layout from "../components/Layout";
import { GlobalProvider } from "../context/GlobalContext";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/aos/dist/aos.css";

import "../assets/fonts/icon-font/css/style.css";
import "../assets/fonts/typography-font/typo.css";
import "../assets/fonts/fontawesome-5/css/all.css";

import "../scss/bootstrap.scss";
import "../scss/main.scss";
import "../scss/service-11.scss";
import "../scss/blog_home3.css";

import Script from "next/script";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <GlobalProvider>
      <Layout pageContext={{}}>
        <Script
          id="Adsense-id"
          data-ad-client="ca-pub-8139631059262464"
          async
          strategy="afterInteractive"
          onError={(e) => {
            console.error("Script failed to load", e);
          }}
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />

        <Script
          id="Adsense-id"
          async
          onError={(e) => {
            console.error("Script failed to load", e);
          }}
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8139631059262464"
          crossorigin="anonymous"
        />

        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
};

export default MyApp;
