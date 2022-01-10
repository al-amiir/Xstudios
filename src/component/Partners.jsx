import React, { useEffect } from "react";
import { animateLoading, animateLoadingBackground } from "../globalFunctions/globalAnimation";

import partner1 from "../material/images/partner1.jpg";
import partner2 from "../material/images/partner2.png";
import partner3 from "../material/images/partner3.png";
import partner4 from "../material/images/partner4.jpg";
import partner5 from "../material/images/partner5.jpg";
import partner6 from "../material/images/partner6.jpg";

const Partners = () => {
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
    <div className="partners">
      <p className="services_text-header">our partners</p>
      <span className="services_text-header-line"></span>
      <div className="partners-content">
        <img src={partner1} alt="" />
        <img src={partner2} alt="" />
        <img src={partner3} alt="" />
        <img src={partner4} alt="" />
        <img src={partner5} alt="" />
        <img src={partner6} alt="" />
        <img src={partner1} alt="" />
        <img src={partner2} alt="" />
        <img src={partner3} alt="" />
        <img src={partner4} alt="" />
        <img src={partner5} alt="" />
        <img src={partner6} alt="" />
        <img src={partner1} alt="" />
        <img src={partner2} alt="" />
        <img src={partner3} alt="" />
        <img src={partner4} alt="" />
        <img src={partner5} alt="" />
        <img src={partner6} alt="" />
        <img src={partner1} alt="" />
        <img src={partner2} alt="" />
        <img src={partner3} alt="" />
        <img src={partner4} alt="" />
        <img src={partner5} alt="" />
        <img src={partner6} alt="" />
      </div>
    </div>
  );
};

export default Partners;
