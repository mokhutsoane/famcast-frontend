import React, { Component } from "react";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
const recaptchaRef = React.createRef();


export class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    subject: "",
    phone: "",
    emailStatus: "",
  };

  // handle the value
  handleCHange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // when submit btn is clicked
  submitForm = (e) => {
    const { name, phone, email, message, subject } = this.state;

    


    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener("load", () => {
      // update the response state and the step

      this.setState({
        emailStatus: xhr.responseText,
      });
    });
    // open the request with the verb and the url
    xhr.open(
      "GET",
      "https://famcast.co.za/api/reactmail/index.php?sendto=" +
        email +
        "&name=" +
        name +
        "&message=" +
        message +
        "&subject=" +
        subject +
        "&phone=" +
        phone
    );
    // send the request
    xhr.send();

    // reset the fields
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    });
    e.preventDefault();
  };
  render() {
    const { name, email, subject, message, emailStatus, phone } = this.state;
    return (
      <div>
        <Col xs="12">
          <div className="login-form bg-white border-gray-3 px-8 pt-8 pb-9 px-sm-11 py-sm-11 shadow-1 rounded-10">
            <form
              name="contact2"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.submitForm}
            >
              {/* You still need to add the hidden input with the form name to your JSX form */}
              <input type="hidden" name="form-name" value="contact2" />
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
                      className="form-control gr-text-11 border"
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={this.handleCHange("name")}
                    />
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
                      className="form-control gr-text-11 border"
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={this.handleCHange("email")}
                      required
                    />
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
                      className="form-control gr-text-11 border"
                      type="text"
                      placeholder="082 092 0901"
                      value={phone}
                      onChange={this.handleCHange("phone")}
                      required
                    />
                  </div>
                </Col>
                <Col md="6">
                  <div className="form-group mb-7">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      as="select"
                      className="my-1 mr-sm-2"
                      id="inlineFormCustomSelectPref"
                      custom
                      value={subject}
                      onChange={this.handleCHange("subject")}
                    >
                      <option disabled hidden value=""></option>
                      <option value="General enquiries">
                        General enquiries
                      </option>
                      <option value="Audio Streaming">Audio Streaming</option>
                      <option value="Audio Streaming Free Trial Request">
                        Audio Streaming Free Trial Request
                      </option>
                      <option value="Video Streaming Free Trial Request">
                        Video Streaming Free Trial Request
                      </option>
                      <option value="Video Restream Free Trial Request">
                        Video Restream Free Trial Request
                      </option>

                      <option value="Web Development">Web Development</option>
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
                      value={message}
                      onChange={this.handleCHange("message")}
                      className="form-control gr-text-11 border-gray-3 gr-textarea-height"
                      required
                    ></textarea>
                  </div>
                </Col>
                <Col xs="3">
                  <div className="form-group button-block mt-3 ">
                     <ReCAPTCHA
                      sitekey="6LemIF4UAAAAABu34I1wjPJVjI3JhGg9LLEX-dY3"
                      onChange={this.handleCHange}
                    />

                    <Button
                      className="form-btn btn btn-primary w-100"
                      type="submit"
                    >
                      Send
                    </Button>
                    <h4>{emailStatus ? emailStatus : null}</h4>
                    <br></br>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </Col>
      </div>
    );
  }
}

export default ContactForm;
