import React from "react";
import "../assets/css/contact.css";
import { Button } from "../components/";
import { TextField } from "@mui/material";

const Contact = () => {
  // const submitForm = (event) => {
  //   event.preventDefault();
  // };
  return (
    <div className="contact grid_contact">


      <form className="contact_formContainer" name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
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
