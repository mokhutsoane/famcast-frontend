import Link from "../components/Link";
import PageWrapper from "../components/PageWrapper";
import { Container, Row, Col } from "react-bootstrap";

export default function FourOhFour() {
  return (
    <PageWrapper
      headerConfig={{
        theme: "light",
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
      <div className="pb-11 pb-lg-14 pt-25 pt-lg-29 bg-default-1 position-relative">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col
              md="11"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="hero-content text-center">
                <h1 className="gr-text-3 mb-8 heading-color">
                  Oops! Page Not Found.
                </h1>
                <p className="gr-text-8 text-color-opacity">
                  The page you are looking for is not available or has been
                  moved. Try a different page or go to homepage with the button
                  below.
                </p>
                <div className="hero-btns d-flex flex-column flex-md-row justify-content-md-center mt-11">
                  <Link
                    to="https://famcast.co.za/home/"
                    className="btn btn-white gr-hover-y"
                  >
                    Go back home
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </PageWrapper>
  );
}
