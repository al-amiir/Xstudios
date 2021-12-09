import React, { useEffect } from "react";
import { animateLoading, animateLoadingBackground } from "../globalFunctions/globalAnimation";

const Services = () => {
  let text1 = "Branding  media production  websites  applications  motion graphics  social media  marketing  photography  videography  media coverage  media production  printing";
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
      <section className="services">
        <div className="services_text">
          <p className="services_text-header">our services</p>
          <span className="services_text-header-line"></span>
          <p className="services_text-words">
            {text1.split("  ").map((w, i) => (
              <span key={i} className="services_text-words-singleWord">
                {w}
              </span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
