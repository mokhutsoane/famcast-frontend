import React, { useState } from "react";
import { Row, Col, Collapse } from "react-bootstrap";

const Content = ({
  short_description,
  description,
  email_address,
  contacts_details,
  children,
}) => {
  const [openItem, setOpenItem] = useState(1);

  return (
    <>
      {/* <!-- Content section --> */}
      <div className="">
        <Row className="">
          <Col
            md="8"
            className=" mt-9 mt-lg-8 pb-20"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div
              className="accordion ps-9 pe-8 px-8 rounded-10 bg-light border-red border-top-5"
              id="accordionExample"
            >
              <div className="border-bottom  overflow-hidden">
                <div className="mb-0 border-bottom-0" id="heading2-1">
                  <button
                    className="btn-reset gr-text-7 fw-bold text-left text-blackish-blue px-0 py-8 accordion-trigger arrow-icon w-100 collapsed"
                    type="button"
                    aria-controls="collapse2-1"
                    onClick={() => setOpenItem(1)}
                    aria-expanded={openItem === 1}
                  >
                    Intro{" "}
                  </button>
                </div>

                <Collapse in={openItem === 1}>
                  <div>
                    <div className="gr-color-blackish-blue-opacity-7 mt-n3 gr-text-9 pb-8 pr-8">
                      {short_description}
                    </div>
                  </div>
                </Collapse>
              </div>
              <div className="border-bottom  overflow-hidden">
                <div className="mb-0 border-bottom-0" id="heading2-2">
                  <button
                    className="btn-reset gr-text-7 fw-bold text-left text-blackish-blue px-0 py-8 accordion-trigger arrow-icon w-100 collapsed"
                    type="button"
                    data-target="#collapse2-2"
                    onClick={() => setOpenItem(2)}
                    aria-expanded={openItem === 2}
                  >
                    About
                  </button>
                </div>

                <Collapse in={openItem === 2}>
                  <div
                    className="gr-color-blackish-blue-opacity-7 mt-n3 gr-text-9 pb-8 pr-8"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></div>
                </Collapse>
              </div>
              <div className="border-bottom  overflow-hidden">
                <div className="mb-0 border-bottom-0" id="heading2-3">
                  <button
                    className="btn-reset gr-text-7 fw-bold text-left text-blackish-blue px-0 py-8 accordion-trigger arrow-icon w-100"
                    type="button"
                    data-target="#collapse2-3"
                    onClick={() => setOpenItem(3)}
                    aria-expanded={openItem === 3}
                  >
                    Contacts
                  </button>
                </div>

                <Collapse in={openItem === 3}>
                  <div> {contacts_details}</div>
                </Collapse>
              </div>
            </div>
          </Col>

          <Col md="4">
            <div className="pt-10">
              <div className="mb-5">{children}</div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Content;
