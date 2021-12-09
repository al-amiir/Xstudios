import React, { useEffect } from "react";
import { animateLoading, animateLoadingBackground } from "../globalFunctions/globalAnimation";
const AboutUs = () => {
  let text1 = "Ostudios, is a Creative Advertising agency located in Egypt.";
  let text2 = "Through continuous improvement of our knowledge and skills, we maintain our reputation of delivering exceptional software products and services.";
  let text3 = "To be the center of excellence for the Software Industry in the MENA region. We build the most innovative software solutions out of the region.";
  let condition = true;

  useEffect(() => {
    // setTimeout(() => {
    //   animateTransition(".transition span", "reverse");
    // }, 4000);
    // animateLoading(".transition span", "reverse");
    // window.addEventListener("scroll", () => {
    //   if (condition && window.scrollY >= 400) {
    //     condition = false;
    //     document.querySelector(".aboutUs_text").style.display = "initial";
    //     anime({
    //       targets: ".aboutUs_text-header",
    //       translateX: ["-33vw", "0vw"],
    //       easing: "easeOutQuad",
    //       delay: 500,
    //       duration: 1500,
    //     });
    //     anime({
    //       targets: ".aboutUs_text-header-line",
    //       width: ["0%", "100%"],
    //       easing: "easeOutQuad",
    //     });
    //     anime({
    //       targets: ".aboutUs_text-1-words-singleWord",
    //       translateY: [-120, 0],
    //       duration: 1000,
    //       easing: "easeOutQuad",
    //       delay: function (el, i, l) {
    //         return i * 80;
    //       },
    //     });
    //   }
    // });
  }, []);

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
            {text1.split(" ").map((w) => (
              <span className="aboutUs_text-1-words-singleWord">{w}</span>
            ))}
          </p>
        </div>

        <div className="aboutUs_text">
          <p className="aboutUs_text-header">our mission</p>
          <span className="aboutUs_text-header-line"></span>
          <p className="aboutUs_text-1-words">
            {text2.split(" ").map((w) => (
              <span className="aboutUs_text-1-words-singleWord">{w}</span>
            ))}
          </p>
        </div>

        <div className="aboutUs_text">
          <p className="aboutUs_text-header">our vission</p>
          <span className="aboutUs_text-header-line"></span>
          <p className="aboutUs_text-1-words">
            {text3.split(" ").map((w) => (
              <span className="aboutUs_text-1-words-singleWord">{w}</span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
