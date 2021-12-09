import React, { useEffect } from "react";
import { animateLoading, animateLoadingBackground } from "../globalFunctions/globalAnimation";

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
  return <div style={{ color: "#ffa600", fontSize: "3rem", fontWeight: 600 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magnam repellendus et illo cumque incidunt cupiditate, id nobis praesentium tempore reprehenderit. Fugiat saepe officiis ipsum nulla molestiae minima odit distinctio!</div>;
};

export default Projects;
