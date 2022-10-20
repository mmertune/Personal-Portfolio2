import React from "react";
import "../assets/css/contact.css";
import { Button } from "../components/";
import { TextField } from "@mui/material";

const Contact = () => {
  // const submitForm = (event) => {
  //   event.preventDefault();
  // };
  return (
    <div className="contact grid_contact" id="contact">
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="text" name="subject" />
        <input type="email" name="email" />
        <input type="message" name="message" />
      </form>

      <form
        action="submit"
        className="contact_formContainer"
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="contact" value="Contact" />
        <div className="contact_nameEmailContainer">
          <TextField
            id="outlined-basic"
            label="Name"
            name="name"
            type="text"
            variant="outlined"
            fullWidth={true}
            className="contact_nameField contact_inputArea"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            required={true}
            fullWidth={true}
            className="contact_emailField contact_inputArea"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Subject"
          name="subject"
          type="text"
          variant="outlined"
          fullWidth={true}
          className="contact_subjectField contact_inputArea"
        />
        <TextField
          id="outlined-basic"
          label="Message"
          name="message"
          type="text"
          variant="outlined"
          multiline={true}
          minRows={4}
          required={true}
          fullWidth={true}
          className="contact_messageField contact_inputArea"
        />
        <Button title="Submit" type="button" />
      </form>
    </div>
  );
};

export default Contact;
