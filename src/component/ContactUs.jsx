import React, { useEffect } from "react";
import { animateLoading, animateLoadingBackground } from "../globalFunctions/globalAnimation";

const ContactUs = () => {
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
    <div>
      <p className="services_text-header">contact us</p>
      <span className="services_text-header-line"></span>
      <ul style={{ color: "#f7a630", fontSize: "3rem", fontWeight: 600, margin: "19px", listStyle: "none" }}>
        <li>Phone: 00000000</li>
        <li>Adress: -----------</li>
        <li>email: ---------</li>
        <li>Behance: ----------</li>
      </ul>
    </div>
  );
};

export default ContactUs;
