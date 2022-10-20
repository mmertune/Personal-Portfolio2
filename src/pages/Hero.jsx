import React from "react";
import "../assets/css/hero.css";
import { Button } from "../components";

const Hero = () => {
  return (
    <div className="hero grid_hero" id="hero">
      <h1 className="hero_intro">Hello, I'm</h1>
      <h2 className="hero_name">Marvens Mertune</h2>
      <h2 className="hero_shortSummary">I put your ideas on the web</h2>
      <p className="hero_summary">
        I'm a Computer Engineer with a passion for web development. I am
        currently interested in finding work where I primarily use
        frontend/backend technologies with inspiring and motivated people
      </p>
      <div className="hero_bttnContainer">
        <Button title="Contact Me!" type="link" />
      </div>
    </div>
  );
};

export default Hero;
