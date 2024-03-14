import React from "react";
import Link from "../../../components/Link";
import { Col, Container, Row } from "react-bootstrap";
import PodcastCard from "../PodcastCard";

function AllRadioData({ station }) {
  return (
    <div className="feature-section border-0   pt-2 pt-lg-2 pb-9 pb-md-0 pb-lg-7">
      <Container>
        <Row className="">
          {station.map((item) => {
            return (
              <Col
                className="mb-lg-n-8 mb-8"
                key={item.id}
                lg="4"
                md="6"
                xs="12"
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={`/stations/${item.slug}`}
                >
                  <PodcastCard
                    imageSrc={item.logo}
                    title={item.title}
                    subtitle={item.short_description}
                  ></PodcastCard>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default AllRadioData;
