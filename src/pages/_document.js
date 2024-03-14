import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-81711224-2"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-81711224-2');
        `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-KZ9ZSDZ');`,
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://www.schema.org",
                "@type": "Organization",
                name: "Famcast",
                url: "https://famcast.co.za/",
                logo: "https://famcast.co.za/ico/favicon.png",
                image: "https://famcast.co.za/ico/favicon.png",
                description:
                  "FamCast is an Website, Android and IOS developer that has been active since 2017. The current app portfolio contains more than 60 apps.FamCast is a trusted cloud platform where you create and manage your own online radio station easily and professionally",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "9247 Lekgatla St",
                  addressLocality: "Mohlakeng",
                  addressRegion: "Randfontein",
                  postalCode: "1766",
                  addressCountry: "South Africa",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "-26.247593",
                  longitude: ",27.6934527",
                },
                hasMap:
                  "https://www.google.com/maps/place/9247+Lekgatla+St,+Mohlakeng,+Randfontein,+1766/@-26.247593,27.6934527,17z/data=!4m6!1m3!3m2!1s0x1e95bcf455685b31:0x3c53b0e127fc6bc1!2s9247+Lekgatla+St,+Mohlakeng,+Randfontein,+1766!3m1!1s0x1e95bcf455685b31:0x3c53b0e127fc6bc1",
                openingHours: "Mo, Tu, We, Th, Fr 08:00-05:30 Sa 08:00-13:30",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "087 700 7521",
                  contactType: "general",
                },
              }),
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
