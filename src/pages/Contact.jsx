import React, { useContext } from "react";
import "../assets/css/contact.css";
import { Button } from "../components/";
import { UIContext } from "../context/UIContext";
// import { TextField } from "@mui/material";

const Contact = () => {
  const { isDarkTheme } = useContext(UIContext);

  // const submitForm = (event) => {
  //   event.preventDefault();
  // };
  return (
    <div className="contact grid_contact" id="contact">
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="subject" />
        <textarea name="message"></textarea>
      </form>
<h2 className="contact_header">Contact me!</h2>
      <form className={`contact_formContainer ${isDarkTheme ? "contact_darkTheme" : "contact_lightTheme"}`} name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <div className="contact_nameEmailContainer">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="contact_formName"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="contact_formEmail"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="contact_formSubject"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          maxLength={250}
          rows={10}
          className="contact_formTxtArea"
        ></textarea>
        <div className="contact_bttnContainer">
          <Button title="Submit" type="button" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
