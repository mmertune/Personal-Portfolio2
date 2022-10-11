import React from "react";
import "../assets/Hero.css";
import { Button } from "../components";

const Hero = () => {
  return (
    <div className="hero grid_hero">
      <h1 className="hero_intro">Hello, I'm</h1>
      <h2 className="hero_name">Marvens Mertune</h2>
      <h2 className="hero_shortSummary">I build cool websites</h2>
      <p className="hero_summary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
        consectetur amet! Illo harum quia ea accusamus totam dolorem tenetur, ex
        pariatur asperiores nobis placeat error autem molestias quasi voluptatum
        ipsam.
      </p>
      <div className="hero_bttnContainer">
        <Button title="Contact Me!" />
      </div>
    </div>
  );
};

export default Hero;
