import { Select } from "../../../components/Core";
import React, { useState, useRef } from "react";
import { Row, Col, Container, Button, Form, Toast } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Formik } from "formik";
import * as Yup from "yup";
import { repository } from "./utiles/appRepository";
import ReCAPTCHA from "react-google-recaptcha";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  subject: Yup.string().required("Required"),

  phone: Yup.string().required("Invalid Phone"),
});
const defaultOptions = [
  { value: "dm", label: "Digital Marketing" },
  { value: "cr", label: "Content Writing" },
  { value: "gd", label: "Graphic Design" },
  { value: "seo", label: "SEO for Business" },
];
function AppContactForm() {
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
    bodyFormData.append("your-examples", datapost.examples);
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
      datapost.examples = "";
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
    <div>
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
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            examples: "",
            subject: "Mobile App Development Services",
          }}
          validationSchema={DisplayingErrorMessagesSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await postData(values);
          }}
        >
          {({ errors, touched, getFieldProps, handleSubmit }) => {
            return (
              <Form className="cta-form bg-white light-mode rounded-10 px-8 py-8">
                <div className="form-group mb-6 gr-text-11 fw-bold text-blackish-blue">
                  <label htmlFor="name">Name </label>
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
                <div className="form-group mb-6 gr-text-11 fw-bold text-blackish-blue">
                  <label htmlFor="ctaEmail">Email </label>
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
                <div className="form-group mb-6 gr-text-11 fw-bold text-blackish-blue">
                  <label htmlFor="ctaPhone">Phone </label>
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

                <div className="form-group mb-6 gr-text-11 fw-bold text-blackish-blue">
                  <label htmlFor="examples">
                    Got any examples or references you could share?
                  </label>
                  <input
                    className="form-control gr-text-11 border"
                    {...getFieldProps("examples")}
                    placeholder="https://"
                  />
                </div>
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
                    <Toast.Header onClick={() => setshowmessage(false)}>
                      <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                      />
                      <strong className="mr-auto">{message}</strong>
                    </Toast.Header>
                  </Toast>
                ) : null}

                <div className="form-group button-block mt-3 pt-5 ">
                  <Button
                    className="gr-hover-y rounded-8 w-100 "
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
                    Get Free Quote{" "}
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
    </div>
  );
}

export default AppContactForm;
