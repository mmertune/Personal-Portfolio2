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
        <div className="projects_featuredText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          asperiores aut saepe rem earum? Sed non ea, similique facere
          consequatur ratione quasi temporibus voluptatum quo dignissimos
          asperiores voluptate cum? Similique quos cum iste porro consequuntur.
        </div>
      </div>
      <div className="projects_featuredContainer2">
        <img className="projects_featuredImg" src={seabnbImage} alt="" />
        <div className="projects_featuredText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          eaque in accusantium, maiores et facilis repellendus sit tenetur eos
          error, unde expedita impedit consequuntur nihil optio placeat
          temporibus beatae officia, sunt dolorum omnis corrupti voluptates?
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
