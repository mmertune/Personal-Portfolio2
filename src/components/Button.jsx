import React from "react";
import { HashLink } from "react-router-hash-link";
import "../assets/css/button.css";

const Button = ({ title, type }) => {

  if (type === "link") {
    return (
      <div className="button_link">
        <HashLink to="/#contact" smooth>
          {title}
        </HashLink>
      </div>
    );
  }
  if (type === "button") {
    return (
      // <input type='submit' className='button_submit'>{title}
      // </input>h
      <button
        type="submit"
        // onClick={submitForm}
        className="button_submit"
      >{title}</button>
    );
  }
};

export default Button;
