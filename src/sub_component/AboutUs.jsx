import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const AboutUs = () => {
  let text1 = "Ostudios, is a Creative Advertising agency located in Egypt. It presents variations of advertising solutions.";
  let condition = true;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (condition && window.scrollY >= 400) {
        condition = false;
        anime({
          targets: ".aboutUs_text-header",
          translateX: ["-33vw", "0vw"],
          easing: "easeOutQuad",
          delay: 500,
          duration: 1500,
        });
        anime({
          targets: ".aboutUs_text-header-line",
          width: ["0%", "100%"],
          easing: "easeOutQuad",
        });
        anime({
          targets: ".aboutUs_text-1-words-singleWord",
          translateY: [-60, 0],
          duration: 2000,
          delay: function (el, i, l) {
            return i * 100;
          },
        });
      }
    });
  }, []);
  return (
    <div>
      {/* <iframe src="https://my.spline.design/pos-8dd5b15f728c93a425f5bbb7cddb7953/" frameborder="0" width="100%" height="100%"></iframe> */}
      {/* <iframe src="https://my.spline.design/pyramids-80d7779b36e98a57256fd5ac0ed9a0bd/" frameBorder="0"></iframe> */}
      <section className="aboutUs">
        <div className="aboutUs_text">
          <p className="aboutUs_text-header">about us</p>
          <span className="aboutUs_text-header-line"></span>
          <p className="aboutUs_text-1-words">
            {text1.split(" ").map((w) => (
              <span className="aboutUs_text-1-words-singleWord">{w}</span>
            ))}
          </p>
          <p className="aboutUs_text-span">
            <span className="aboutUs_text-span-word">experience</span>
            <span className="aboutUs_text-span-word">professionalism</span>
            <span className="aboutUs_text-span-word">at</span>
            <span className="aboutUs_text-span-word">its</span>
            <span className="aboutUs_text-span-word">finest,</span>
            <span className="aboutUs_text-span-word">every</span>
            <span className="aboutUs_text-span-word">partner</span>
            <span className="aboutUs_text-span-word">is</span>
            <span className="aboutUs_text-span-word">a</span>
            <span className="aboutUs_text-span-word">KING</span>
            <span className="aboutUs_text-span-word">to</span>
            <span className="aboutUs_text-span-word">us</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
