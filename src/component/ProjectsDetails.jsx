import React from "react";
import { animateLayers } from "../globalFunctions/globalAnimation";
import website1 from "../material/images/website1.jpg";
import website2 from "../material/images/website2.jpg";
import website3 from "../material/images/website3.jpg";
import website4 from "../material/images/website4.jpg";
import website5 from "../material/images/website5.jpg";

const ProjectsDetails = () => {
  return (
    <>
      <div className="projectsDetails" style={{ backgroundColor: "red" }}></div>
      <div className="projectsDetails" style={{ backgroundColor: "green" }}></div>
      <div className="projectsDetails">
        <i class="projectsDetails-backButton fas fa-arrow-left" onClick={() => animateLayers(".projectsDetails", "reverse")}></i>
        <p className="services_text-header">website projects</p>
        <span className="services_text-header-line"></span>
        <div className="projectsDetails-list">
          <ul>
            <li>
              <img src={website1} alt="" />
              <p>project 1</p>
            </li>
            <li>
              <img src={website2} alt="" />
              <p>project 2</p>
            </li>{" "}
            {/* <li>
              <img src={website3} alt="" />
              <p>project 3</p>
            </li>{" "}
            <li>
              <img src={website4} alt="" />
              <p>project 4</p>
            </li>{" "}
            <li>
              <img src={website5} alt="" />
              <p>project 5</p>
            </li>{" "} */}
          </ul>
        </div>
      </div>
      ;
    </>
  );
};

export default ProjectsDetails;
