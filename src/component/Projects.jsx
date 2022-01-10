import React, { useEffect } from "react";
import { animateLoading, animateLoadingBackground, animateLayers } from "../globalFunctions/globalAnimation";

import brandImage from "../material/images/brand.jpg";
import websiteImage from "../material/images/website.jpg";
import socialImage from "../material/images/social.jpg";
import animationImage from "../material/images/animation.jpg";
import videoGrapghyImage from "../material/images/videoGrahpy.jpg";
import productionImage from "../material/images/production.jpg";
import ProjectsDetails from "./ProjectsDetails";

const Projects = () => {
  useEffect(() => {
    return () => {
      animateLoadingBackground("normal");
      setTimeout(() => {
        animateLoading(".loading span", "normal");
        setTimeout(() => {
          animateLoadingBackground("reverse");
          animateLoading(".loading span", "reverse");
        }, 1000);
      }, 1000);
    };
  }, []);
  return (
    <>
      <p className="services_text-header">our projects</p>
      <span className="services_text-header-line"></span>
      <div className="projects">
        <div className="singleProject" onClick={() => animateLayers(".projectsDetails", "normal")}>
          <img src={websiteImage} alt="" />
          <div>
            <span>websites</span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>

        <div className="singleProject">
          <img src={brandImage} alt="" />
          <div>
            <span>branding</span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>

        <div className="singleProject">
          <img src={socialImage} alt="" />
          <div>
            <span>social media</span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>

        <div className="singleProject">
          <img src={animationImage} alt="" />
          <div>
            <span>animation</span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>

        <div className="singleProject">
          <img src={videoGrapghyImage} alt="" />
          <div>
            <span>videoGraphy</span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>

        <div className="singleProject">
          <img src={productionImage} alt="" />
          <div>
            <span>production</span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>

        <ProjectsDetails />
      </div>
    </>
  );
};

export default Projects;
