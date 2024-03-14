import { React } from "react";
import { Container, Row } from "react-bootstrap";
import FeatureCol from "./FeatureCol";

const Feature = ({ appItems }) => {
  return (
    <div>
      {/* <!-- Feature section --> */}
      <div className="feature-section bg-default-4 pt-8 pt-lg-15 pb-2 pb-lg-17">
        <Container>
          <Row className="">
            {appItems.map((item, i) => {
              i *= 500;

              return <FeatureCol item={item} key={i} count={i + 500} />;
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Feature;
