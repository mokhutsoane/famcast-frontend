import React, { useState, useRef } from "react";
import { Row, Col, Container, Button, Form, Toast } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Formik } from "formik";
import * as Yup from "yup";
import { repository } from "./utiles/repository";
import ReCAPTCHA from "react-google-recaptcha";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  phone: Yup.string().required("Invalid Phone"),
});
const Contact = () => {
  const [showanimation, setshowanimation] = React.useState(false);
  const [showmessage, setshowmessage] = React.useState(false);
  const [message, setmessage] = React.useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [verify, setverify] = useState(false);

  const _reCaptchaRef = useRef(null);
  const handleChange = (value) => {
    // if value is null recaptcha expired
    if (value != null) {
      setverify(true);
      console.log(value);
    }
  };

  const postData = async (datapost) => {
    console.log(datapost);
    setshowanimation(true);
    let bodyFormData = new FormData();
    bodyFormData.append("your-name", datapost.name);
    bodyFormData.append("your-email", datapost.email);
    bodyFormData.append("your-subject", datapost.subject);
    bodyFormData.append("your-message", datapost.message);
    bodyFormData.append("your-phone", datapost.phone);

    const { data, status } = await repository
      .cotnact(bodyFormData)
      .then((x) => x)
      .then((x) => x);
    console.log(data, status);
    if (status == 200 || status == 201) {
      datapost.name = "";
      datapost.email = "";
      datapost.subject = "";
      datapost.message = "";
      setmessage(data.message);
      setshowmessage(true);
      setshowanimation(false);
      handleShow();
    } else {
      setmessage("Error");
      setshowmessage(true);
      setshowanimation(false);
      handleShow();
    }
  };

  return (
    <>
      {showmessage ? (
        <div className="p-3">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{
              position: "fixed",

              zIndex: 10001,
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Status</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={(() => setshowmessage(false), handleClose)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : null}

      {showanimation ? (
        <div className="  bg-azureish-white   rounded-10  text-bright-blue border-top-5">
          <span className="py-7 px-2 text-danger">Loading...</span>
        </div>
      ) : (
        <div className="pb-0 pb-md-0 ">
          <Container>
            <Row className="justify-content-center">
              <Col xs="12">
                <div className="login-form bg-white border-gray-3 px-0 pt-0  px-sm-3 py-sm-3  rounded-10">
                  <div name="contact2">
                    <input type="hidden" name="form-name" value="contact2" />
                    <Formik
                      initialValues={{
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                        phone: "",
                      }}
                      validationSchema={DisplayingErrorMessagesSchema}
                      onSubmit={async (values, { setSubmitting }) => {
                        await postData(values);
                      }}
                    >
                      {({ errors, touched, getFieldProps, handleSubmit }) => {
                        return (
                          <Form>
                            <Row>
                              <Col md="6">
                                <div className="form-group mb-3">
                                  <label
                                    htmlFor="name"
                                    className="gr-text-11 font-weight-bold text-blackish-blue"
                                  >
                                    First &amp; Last Name
                                  </label>
                                  <input
                                    className="form-control gr-text-11 border"
                                    {...getFieldProps("name")}
                                    placeholder="i.e. John Doe"
                                    required
                                  />
                                  {touched.name && errors.name && (
                                    <div
                                      style={{
                                        color: "red",
                                        marginTop: 10,
                                        maxWidth: 320,
                                      }}
                                    >
                                      {errors.name}
                                    </div>
                                  )}
                                </div>
                              </Col>
                              <Col md="6">
                                <div className="form-group mb-3">
                                  <label
                                    htmlFor="email"
                                    className="gr-text-11 font-weight-bold text-blackish-blue"
                                  >
                                    Email
                                  </label>
                                  <input
                                    className="form-control gr-text-11 border"
                                    {...getFieldProps("email")}
                                    placeholder="i.e. john@mail.com"
                                    required
                                  />
                                  {touched.email && errors.email && (
                                    <div
                                      style={{
                                        color: "red",
                                        marginTop: 10,
                                        maxWidth: 320,
                                      }}
                                    >
                                      {errors.email}
                                    </div>
                                  )}
                                </div>
                              </Col>
                              <Col md="6">
                                <div className="form-group mb-3">
                                  <label
                                    htmlFor="phone"
                                    className="gr-text-11 font-weight-bold text-blackish-blue"
                                  >
                                    Phone Number
                                  </label>
                                  <input
                                    className="form-control gr-text-11 border"
                                    {...getFieldProps("phone")}
                                    placeholder="i.e. +27 87 700 7521"
                                    required
                                  />
                                  {touched.phone && errors.phone && (
                                    <div
                                      style={{
                                        color: "red",
                                        marginTop: 10,
                                        maxWidth: 320,
                                      }}
                                    >
                                      {errors.phone}
                                    </div>
                                  )}
                                </div>
                              </Col>
                              <Col md="6">
                                <div className="form-group mb-3">
                                  <Form.Label htmlFor="subject">
                                    Subject
                                  </Form.Label>
                                  <Form.Control
                                    as="select"
                                    className="form-control gr-text-11 border-gray-3 rounded-10"
                                    id="inlineFormCustomSelectPref"
                                    custom
                                    {...getFieldProps("subject")}
                                    required
                                  >
                                    <option disabled hidden value=""></option>
                                    <option value="General enquiries">
                                      General enquiries
                                    </option>
                                    <option value="Audio Streaming">
                                      Audio Streaming
                                    </option>
                                    <option value="Audio Streaming Free Trial Request">
                                      Audio Streaming Free Trial Request
                                    </option>
                                    <option value="Video Streaming Free Trial Request">
                                      Video Streaming Free Trial Request
                                    </option>
                                    <option value="Video Restream Free Trial Request">
                                      Video Restream Free Trial Request
                                    </option>

                                    <option value="Web Development">
                                      Web Development
                                    </option>
                                    <option value="Live video Streaming">
                                      Live video Streaming
                                    </option>
                                    <option value="Hosting">Hosting</option>
                                    <option value="Mobile App Development">
                                      Mobile App Development
                                    </option>
                                    <option value="E-commerce solutions">
                                      E-commerce solutions
                                    </option>
                                    <option value="Led screens for rent">
                                      Led screens for rent
                                    </option>
                                  </Form.Control>

                                  {touched.subject && errors.subject && (
                                    <div
                                      style={{
                                        color: "red",
                                        marginTop: 10,
                                        maxWidth: 320,
                                      }}
                                    >
                                      {errors.subject}
                                    </div>
                                  )}
                                </div>
                              </Col>
                              <Col md="12">
                                <div className="form-group mb-3">
                                  <label
                                    htmlFor="message"
                                    className="gr-text-11 font-weight-bold text-blackish-blue"
                                  >
                                    Message
                                  </label>
                                  <textarea
                                    {...getFieldProps("message")}
                                    className="form-control gr-text-11 border-gray-3 gr-textarea-height"
                                    required
                                  ></textarea>
                                  {touched.message && errors.message && (
                                    <div
                                      style={{
                                        color: "red",
                                        marginTop: 10,
                                        maxWidth: 320,
                                      }}
                                    >
                                      {errors.message}
                                    </div>
                                  )}
                                </div>
                              </Col>
                              <Col className=" " xs="12" lg="6">
                                <ReCAPTCHA
                                  style={{ display: "inline-block" }}
                                  theme="dark"
                                  ref={_reCaptchaRef}
                                  sitekey="6LemIF4UAAAAABu34I1wjPJVjI3JhGg9LLEX-dY3"
                                  onChange={handleChange}
                                />

                                {showmessage ? (
                                  <Toast
                                    className="bg-danger"
                                    size="lg"
                                    onClose={() => setShow(false)}
                                    show={show}
                                    delay={5000}
                                    autohide
                                  >
                                    <Toast.Header
                                      onClick={() => setshowmessage(false)}
                                    >
                                      <img
                                        src="holder.js/20x20?text=%20"
                                        className="rounded mr-2"
                                        alt=""
                                      />
                                      <strong className="mr-auto">
                                        {message}
                                      </strong>
                                    </Toast.Header>
                                  </Toast>
                                ) : null}

                                <div className="form-group button-block mt-3 pt-5 ">
                                  <Button
                                    className="form-btn btn btn-dark w-50 "
                                    type="button"
                                    onClick={() => {
                                      if (verify == true) {
                                        handleSubmit();
                                      } else {
                                        setmessage("Please verify yourself");
                                        setshowmessage(true);
                                      }
                                    }}
                                  >
                                    Send
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                          </Form>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};
export default Contact;
