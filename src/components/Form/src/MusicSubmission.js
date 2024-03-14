import React, { useState, useRef } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Toast } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { repository } from "./utiles/repository";
import Animation from "./aniamtions/LoadingAnimation";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "react-bootstrap/Modal";

const URL = /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  message: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  artist: Yup.string().required("Required"),
  song: Yup.string().required("Required"),
  composer: Yup.string().required("Required"),
  sambro: Yup.string().required("Required"),
  publisher: Yup.string().required("Required"),
  isrc: Yup.string().required("Required"),
  record: Yup.string().required("Required"),
  genre: Yup.string().required("Required"),
  wetransfer: Yup.string().matches(URL, "Enter a valid url"),
});

const MusicSubmission = () => {
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
    var bodyFormData = new FormData();
    bodyFormData.append("your-name", datapost.name);
    bodyFormData.append("your-email", datapost.email);
    bodyFormData.append("your-phone", datapost.phone);
    bodyFormData.append("your-message", datapost.message);

    bodyFormData.append("artist", datapost.artist);
    bodyFormData.append("song", datapost.song);
    bodyFormData.append("sambro", datapost.sambro);
    bodyFormData.append("publisher", datapost.publisher);
    bodyFormData.append("isrc", datapost.isrc);
    bodyFormData.append("record", datapost.record);
    bodyFormData.append("genre", datapost.genre);
    bodyFormData.append("wetransfer", datapost.wetransfer);

    const { data, status } = await repository
      .cotnact(bodyFormData)
      .then((x) => x)
      .then((x) => x);
    console.log(data, status);
    if (status == 200 || status == 201) {
      datapost.name = "";
      datapost.email = "";
      datapost.message = "";
      datapost.phone = "";

      datapost.artist = "";
      datapost.song = "";
      datapost.sambro = "";
      datapost.publisher = "";
      datapost.isrc = "";
      datapost.record = "";
      datapost.genre = "";
      datapost.wetransfer = "";

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
    <div className="">
      {showanimation ? <Animation /> : null}
      {showmessage ? (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>{message}</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setshowmessage(false)}
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}

      <div className="">
        <Container>
          <Row className="justify-content-center pt-10">
            <Col lg="12" xl="12">
              <div className="px-md-15 ">
                <p className="gr-text-10 mb-3">
                  So, you’re an innovative and talented music artist with a
                  riveting track that’s waiting to be exposed to the African
                  music scene? Upload your track and include ALL the track
                  information. Our music compilers will listen to it and if it’s
                  hot, we’ll play it on Sky Alpha HD!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pb-5 ">
        <Container>
          <Row className="justify-content-center">
            <Col xs="12">
              <div className="login-form  border-gray-0 px-8 pt-8 pb-9 px-sm-11 py-sm-11 shadow-0 rounded-10">
                <div name="contact2">
                  <input type="hidden" name="form-name" value="contact2" />
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      phone: "",
                      artist: "",
                      song: "",
                      composer: "",
                      sambro: "",
                      publisher: "",
                      isrc: "",
                      record: "",
                      genre: "",
                      wetransfer: "",
                      message: "",
                    }}
                    validationSchema={DisplayingErrorMessagesSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                      await postData(values);
                    }}
                  >
                    {({ errors, touched, getFieldProps, handleSubmit }) => {
                      // cstErrors = errors;

                      return (
                        <Form>
                          <Row>
                            <Col md="6">
                              <div className="form-group mb-7">
                                <label
                                  htmlFor="name"
                                  className="gr-text-11 font-weight-bold text-blackish-blue"
                                >
                                  First &amp; Last Name
                                </label>
                                <input
                                  className="form-control gr-text-11 border-0"
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
                              <div className="form-group mb-7">
                                <label
                                  htmlFor="email"
                                  className="gr-text-11 font-weight-bold text-blackish-blue"
                                >
                                  Email
                                </label>
                                <input
                                  className="form-control gr-text-11 border-0 "
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
                              <div className="form-group mb-7">
                                <label
                                  htmlFor="phone"
                                  className="gr-text-11 font-weight-bold text-blackish-blue"
                                >
                                  Phone Number
                                </label>
                                <input
                                  className="form-control gr-text-11 border-0 inputbg"
                                  {...getFieldProps("phone")}
                                  placeholder="i.e. 087 700 7521"
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
                              <div className="form-group mb-7">
                                <label
                                  htmlFor="artist"
                                  className="gr-text-11 font-weight-bold text-blackish-blue"
                                >
                                  Artist
                                </label>
                                <input
                                  className="form-control gr-text-11 border-0"
                                  {...getFieldProps("artist")}
                                  placeholder=""
                                  required
                                />
                                {touched.artist && errors.artist && (
                                  <div
                                    style={{
                                      color: "red",
                                      marginTop: 10,
                                      maxWidth: 320,
                                    }}
                                  >
                                    {errors.artist}
                                  </div>
                                )}
                              </div>
                            </Col>
                            <Col md="6">
                              <div className="form-group mb-7">
                                <label
                                  htmlFor="song"
                                  className="gr-text-11 font-weight-bold text-blackish-blue"
                                >
                                  Song Title
                                </label>
                                <input
                                  className="form-control gr-text-11 border-0"
                                  {...getFieldProps("song")}
                                  placeholder=""
                                  required
                                />
                                {touched.song && errors.song && (
                                  <div
                                    style={{
                                      color: "red",
                                      marginTop: 10,
                                      maxWidth: 320,
                                    }}
                                  >
                                    {errors.song}
                                  </div>
                                )}
                              </div>
                            </Col>
                            <Col md="6">
                              <div className="form-group mb-7">
                                <label
                                  htmlFor="composer"
                                  className="gr-text-11 font-weight-bold text-blackish-blue"
                                >
                                  Composer
                                </label>
                                <input
                                  className="form-control gr-text-11 border-0"
                                  {...getFieldProps("composer")}
                                  placeholder=""
                                  required
                                />
                                {touched.composer && errors.composer && (
                                  <div
                                    style={{
                                      color: "red",
                                      marginTop: 10,
                                      maxWidth: 320,
                                    }}
                                  >
                                    {errors.composer}
                                  </div>
                                )}
                              </div>
                            </Col>

                            <Col md="6">
                              <div className="form-group mb-7">
                                <label
                                  htmlFor="sambro"
                                  className="gr-text-11 font-weight-bold text-blackish-blue"
                                >
                                  SAMRO Number
                                </label>
                                <input
                                  className="form-control gr-text-11 border-0"
                                  {...getFieldProps("sambro")}
                                  placeholder=""
                                  required
                                />
                                {touched.sambro && errors.sambro && (
                                  <div
                                    style={{
                                      color: "red",
                                      marginTop: 10,
                                      maxWidth: 320,
                                    }}
                                  >
                                    {errors.sambro}
                                  </div>
                                )}
                              </div>
                            </Col>

                            <Col md="6">
                              <div className="form-group mb-7">
                                <label
                                  htmlFor="publisher"
                                  className="gr-text-11 font-weight-bold text-blackish-blue"
                                >
                                  Publisher
                                </label>
                                <input
                                  className="form-control gr-text-11 border-0"
                                  {...getFieldProps("publisher")}
                                  placeholder=""
                                  required
                                />
                                {touched.publisher && errors.publisher && (
                                  <div
                                    style={{
                                      color: "red",
                                      marginTop: 10,
                                      maxWidth: 320,
                                    }}
                                  >
                                    {errors.publisher}
                                  </div>
                                )}
                              </div>
                            </Col>

                            <Col md="6">
                              <div className="form-group mb-7">
                                <label
                                  htmlFor="isrc"
                                  className="gr-text-11 font-weight-bold text-blackish-blue"
                                >
                                  ISRC Code
                                </label>
                                <input
                                  className="form-control gr-text-11 border-0"
                                  {...getFieldProps("isrc")}
                                  placeholder=""
                                  required
                                />
                                {touched.isrc && errors.isrc && (
                                  <div
                                    style={{
                                      color: "red",
                                      marginTop: 10,
                                      maxWidth: 320,
                                    }}
                                  >
                                    {errors.isrc}
                                  </div>
                                )}
                              </div>
                            </Col>

                            <Col md="6">
                              <div className="form-group mb-7">
                                <label
                                  htmlFor="record"
                                  className="gr-text-11 font-weight-bold text-blackish-blue"
                                >
                                  Record Label
                                </label>
                                <input
                                  className="form-control gr-text-11 border-0"
                                  {...getFieldProps("record")}
                                  placeholder=""
                                  required
                                />
                                {touched.record && errors.record && (
                                  <div
                                    style={{
                                      color: "red",
                                      marginTop: 10,
                                      maxWidth: 320,
                                    }}
                                  >
                                    {errors.record}
                                  </div>
                                )}
                              </div>
                            </Col>

                            <Col md="6">
                              <div className="form-group mb-7">
                                <label
                                  htmlFor="genre"
                                  className="gr-text-11 font-weight-bold text-blackish-blue"
                                >
                                  Genre
                                </label>
                                <input
                                  className="form-control gr-text-11 border-0"
                                  {...getFieldProps("genre")}
                                  placeholder=""
                                  required
                                />
                                {touched.genre && errors.genre && (
                                  <div
                                    style={{
                                      color: "red",
                                      marginTop: 10,
                                      maxWidth: 320,
                                    }}
                                  >
                                    {errors.genre}
                                  </div>
                                )}
                              </div>
                            </Col>

                            <Col md="6">
                              <div className="form-group mb-7">
                                <label
                                  htmlFor="wetransfer"
                                  className="gr-text-11 font-weight-bold text-blackish-blue"
                                >
                                  WeTransfer/Dropbox link *
                                </label>
                                <input
                                  className="form-control gr-text-11 border-0"
                                  {...getFieldProps("wetransfer")}
                                  placeholder="Upload your file to WeTransfer or Dropbox and paste the link here.
"
                                  required
                                />
                                {touched.wetransfer && errors.wetransfer && (
                                  <div
                                    style={{
                                      color: "red",
                                      marginTop: 10,
                                      maxWidth: 320,
                                    }}
                                  >
                                    {errors.wetransfer}
                                  </div>
                                )}
                              </div>
                            </Col>

                            <Col md="12">
                              <div className="form-group mb-7">
                                <label
                                  htmlFor="message"
                                  className="gr-text-11 font-weight-bold text-blackish-blue"
                                >
                                  Message
                                </label>
                                <textarea
                                  {...getFieldProps("message")}
                                  className="form-control gr-text-11 gr-textarea-height"
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
                            <Col xs="3">
                              <div className="form-group button-block mt-3 ">
                                <div className="form-group button-block mt-3"></div>

                                <Button
                                  className="form-btn btn btn-primary w-100"
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

                              <ReCAPTCHA
                                style={{
                                  display: "inline-block",
                                }}
                                theme="light"
                                ref={_reCaptchaRef}
                                sitekey="6LfxDDAUAAAAAAvxaih8txhAXr5hqoO8y26xP8bb"
                                onChange={handleChange}
                              />
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
    </div>
  );
};
export default MusicSubmission;
