import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import AllHero from "../sections/famcast/AllPagesHero";
export default function PrivacyPolicy({ privacy }) {
  return (
    <PageWrapper
      headerConfig={{
        theme: "dark",
        align: "right",
        isFluid: true,
        button: "tman2", // cta, account, null
        buttonText: "Get started free",
      }}
    >
      <AllHero
        title={"Privacy Policy"}
        subtitle=""
        imgUrl="/q/image/svg/bg.svg"
      />

      <div className="main-block pb-21 pt-10 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg="11" xl="11">
              <div className="px-lg-8 px-xl-3">
                <div className="single-block mb-11">
                  <h3 className="gr-text-8 fw-bold pb-3 heading-color"></h3>
                  <div
                    className="gr-text-8 mb-8 text-black "
                    dangerouslySetInnerHTML={{
                      __html: privacy.content.rendered,
                    }}
                  ></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </PageWrapper>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    "https://dashboard.famcast.co.za/wp-json/wp/v2/pages?slug=privacy-policy"
  );

  const privacy = await res.json();
  return {
    props: {
      privacy: privacy[0],
    },
    revalidate: 1,
  };
}
