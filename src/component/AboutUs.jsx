import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { animateLoading, animateLoadingBackground } from "../globalFunctions/globalAnimation";
const AboutUs = () => {
  let text1 = "Ostudios, is a Creative Advertising agency located in Egypt.";
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
      animateLoading(".loading span", "normal");
      setTimeout(() => {
        animateLoadingBackground("reverse");
        animateLoading(".loading span", "reverse");
      }, 1000);
    };
  }, []);

  return (
    <div>
      {/* <iframe src="https://my.spline.design/pos-8dd5b15f728c93a425f5bbb7cddb7953/" frameborder="0" width="100%" height="100%"></iframe> */}
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
      </section>
    </div>
  );
};

export default AboutUs;
