import React from "react";
import "../assets/css/contact.css";
import { Button } from "../components/";
import { TextField } from "@mui/material";

const Contact = () => {
  return (
    <div className="contact grid_contact" id="contact">
      <form action="submit" className="contact_formContainer">
        <div className="contact_nameEmailContainer">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth={true}
            className="contact_nameField"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required={true}
            fullWidth={true}
            className="contact_emailField"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Subject"
          variant="outlined"
          fullWidth={true}
          className="contact_subjectField"
        />
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          multiline={true}
          minRows={4}
          required={true}
          fullWidth={true}
          className="contact_messageField"
        />
        <Button title="Submit" type="button" />
      </form>
    </div>
  );
};

export default Contact;
