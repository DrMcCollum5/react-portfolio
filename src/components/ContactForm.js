import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const initialState = {
  username: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      state.username.trim() !== "" &&
      state.email.trim() !== "" &&
      state.message.trim() !== ""
    ) {
      setSuccessMsg("Thanks for contacting me. I will get back to you soon.");
      setState(initialState);
      setTimeout(() => {
        setSuccessMsg("");
      }, 3000);
      setErrorMsg("");
    } else {
      setErrorMsg("Please enter all the field values.");
      setSuccessMsg("");
    }
  };

  return (
    <>
      <h2>Contact</h2>
      {successMsg && <p className="successMsg">{successMsg}</p>}
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form
        id="contact_form"
        onSubmit={handleFormSubmit}
        className="contact-form"
      >
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter your name"
            value={state.username}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={state.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Enter your message"
            style={{ height: "100px" }}
            value={state.message}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
