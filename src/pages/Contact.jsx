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
      <form
        action="submit"
        className="contact_formContainer"
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
      >
        <div className="contact_nameEmailContainer">
          <TextField
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
            fullWidth={true}
            className="contact_nameField contact_inputArea"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
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
          variant="outlined"
          fullWidth={true}
          className="contact_subjectField contact_inputArea"
        />
        <TextField
          id="outlined-basic"
          label="Message"
          name="message"
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
