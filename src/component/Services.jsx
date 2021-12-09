import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const Services = () => {
  let text1 = "Branding  media production  websites  applications  motion graphics  social media  marketing  photography  videography  media coverage  media production  printing";
  let condition = true;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (condition && window.scrollY >= 1141) {
        condition = false;
        document.querySelector(".services_text").style.visibility = "visible";
        anime({
          targets: ".services_text-header",
          translateX: ["-50vw", "0vw"],
          easing: "easeOutQuad",
          delay: 500,
          duration: 1500,
        });
        anime({
          targets: ".services_text-header-line",
          width: ["0%", "100%"],
          easing: "easeOutQuad",
        });
        anime({
          targets: ".services_text-words-singleWord",
          translateX: [-250, 0],
          duration: 1000,
          easing: "easeOutQuad",

          delay: function (el, i, l) {
            return i * 100;
          },
        });
      }
    });
  }, []);

  return (
    <div>
      <section className="services">
        <div className="services_text">
          <p className="services_text-header">our services</p>
          <span className="services_text-header-line"></span>
          <p className="services_text-words">
            {text1.split("  ").map((w) => (
              <span className="services_text-words-singleWord">{w}</span>
            ))}
          </p>
        </div>
        {/* <iframe src="https://my.spline.design/noisedisplacecopy-1a00b4a8b6023fc2d71cd1abac975979/" frameborder="0"></iframe>{" "} */}
      </section>
    </div>
  );
};

export default Services;
