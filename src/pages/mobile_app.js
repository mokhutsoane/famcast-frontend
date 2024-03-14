import React from "react";
import Feature from "../sections/famcast/Feature";
import AppDHero from "../sections/mobile-app-development/AppDHero";
import { appItems } from "../info/appInfo";
import PageWrapper from "../components/PageWrapper";
import Head from "next/head";

function MobileAppDevelopment() {
  return (
    <div>
      <Head>
        <title>Mobile App Development | IOS and Android App Design</title>
        <meta
          name="description"
          content="Expert in Mobile app development, functional custom mobile apps for iOS, Android  in south Africa, price From R2500. Contact us today"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <link rel="canonical" href="https://famcast.co.za/q/mobile_app/" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Mobile App Development | IOS and Android App Design"
        />
        <meta
          property="og:description"
          content="Expert in iOS and Android Mobile app development, From R2500"
        />
        <meta property="og:image" content="/q/image/logo.png" />
        <meta
          property="og:url"
          content="https://www.famcast.co.za/mobile_app/"
        ></meta>

        <meta name="theme-color" content="#151515" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@famgroupsa" />
        <meta
          name="twitter:title"
          content=" Mobile App Development | IOS and Android App Design"
        />
        <meta
          name="twitter:description"
          content="Expert in iOS and Android Mobile app development, From R2500. Contact us today"
        />
        <meta name="twitter:image" content="/q/image/logo.png" />
        <link rel="icon" type="image/png" href="/q/image/logo.png" />
      </Head>
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
        <AppDHero />
        <div className="container pt-15">
          <div className="section-title mb-9 mb-sm-0 mb-lg-0">
            <h2 className="title gr-text-12 mb-6 heading-color">WHAT WE DO?</h2>
            <p className="gr-text-8 text-color-opacity">
              We specialize in developing high-quality, user-friendly apps that
              help businesses increase productivity and improve customer
              satisfaction.
            </p>
          </div>
        </div>
        <Feature appItems={appItems} />
      </PageWrapper>
    </div>
  );
}

export default MobileAppDevelopment;
