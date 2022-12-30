import React from "react";
import "../assets/css/projects.css";
import portfolioImage from "../assets/images/web_portfolio1.png";
import seabnbImage from "../assets/images/seabnb.png";
import techredditImage from "../assets/images/tech_reddit.png";

import { Button } from "../components";

const Projects = () => {
  return (
    <div className="projects grid_projects" id="projects">
      <h2 className="projects_title">Featured Projects</h2>
      <div className="projects_featuredContainer1 projects_hrzntlFlex">
        <img className="projects_featuredImg" src={portfolioImage} alt="" />
        <div className="projects_featuredTextbox">
          <p className="projects_featuredText">
            This was my first attempt at creating a portfolio website. This was
            made shortly after Learning HTML/CSS and Javascript. The website
            includes CSS animations and CSS layout models such as CSS flexbox
            and CSS Grid.
          </p>
        </div>
      </div>
      <div className="projects_featuredContainer2">
        <img className="projects_featuredImg" src={seabnbImage} alt="" />
        <div className="projects_featuredTextbox">
          <p className="projects_featuredText">
            This is a full-stack website utilizing the MERN (MongoDB, Express,
            React.js, Node.js) stack. The website also include authentication
            and autorization for users. To maintain a user's session, JWT
            (Javascript Web Tokens) are issued to users upon login or signup.
          </p>
        </div>
      </div>
      {/* <div className="projects_featuredContainer3">
        <img className="projects_featuredImg" src={techredditImage} alt="" />
        <div className="projects_featuredText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          sint vel odit aperiam ad assumenda aspernatur sequi molestiae? Quod
          eaque sed enim ipsa aliquid magnam tempora quisquam. Ex optio
          doloribus corporis similique a, repellendus est.
        </div>
      </div> */}
      <div className="projects_bttnContainer">
        <Button title="More Projects!" />
      </div>
    </div>
  );
};

export default Projects;
