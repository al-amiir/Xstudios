import React, { useEffect } from "react";
import { animateLoading, animateLoadingBackground } from "../globalFunctions/globalAnimation";
const AboutUs = () => {
  let text1 = "Ostudios, is a Creative Advertising agency located in Egypt.";
  let text2 = "Through continuous improvement of our knowledge and skills, we maintain our reputation of delivering exceptional software products and services.";
  let text3 = "To be the center of excellence for the Software Industry in the MENA region. We build the most innovative software solutions out of the region.";

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
      <section className="aboutUs">
        <div className="aboutUs_text">
          <p className="aboutUs_text-header">about us</p>
          <span className="aboutUs_text-header-line"></span>
          <p className="aboutUs_text-1-words">
            {text1.split(" ").map((w, i) => (
              <span key={i} className="aboutUs_text-1-words-singleWord">
                {w}
              </span>
            ))}
          </p>
        </div>

        <div className="aboutUs_text">
          <p className="aboutUs_text-header">our mission</p>
          <span className="aboutUs_text-header-line"></span>
          <p className="aboutUs_text-1-words">
            {text2.split(" ").map((w, i) => (
              <span key={i} className="aboutUs_text-1-words-singleWord">
                {w}
              </span>
            ))}
          </p>
        </div>

        <div className="aboutUs_text">
          <p className="aboutUs_text-header">our vission</p>
          <span className="aboutUs_text-header-line"></span>
          <p className="aboutUs_text-1-words">
            {text3.split(" ").map((w, i) => (
              <span key={i} className="aboutUs_text-1-words-singleWord">
                {w}
              </span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
