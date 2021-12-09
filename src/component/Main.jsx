import React from "react";
import AboutUs from "../sub_component/AboutUs";
import Services from "../sub_component/Services";

const MainContent = () => {
  return (
    <div className="mainContent">
      <AboutUs />
      <Services />
    </div>
  );
};

export default MainContent;
