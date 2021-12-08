import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import ink from "../material/ink.mp4";
const Intro = () => {
  function handleIntroButton() {
    anime({
      targets: ".word-2",
      translateX: -400,
      translateY: -20,
      duration: 2000,
      easing: "easeOutQuart",
    });
    anime({
      targets: ".word-1",
      translateX: 400,
      translateY: 20,
      duration: 2000,
      easing: "easeOutQuart",
    });
    anime({
      targets: ".word-3",
      translateY: [0, 20],
      delay: function (el, i, l) {
        return i * 100;
      },
      begin: () => {
        anime({
          targets: ".mainContent",
          translateY: "-100%",
          delay: 500,
          easing: "easeOutQuart",
        });
      },
    });
  }

  useEffect(() => {
    anime({
      targets: ".intro_first",
      translateX: [-43, 43],
      translateY: [-28, 28],
      duration: 2000,
      complete: () => {},
    });
    anime({
      targets: ".intro_second",
      translateX: [81, -81],
      translateY: [52, -52],
      duration: 2000,
      complete: () => {
        // anime({
        //   targets: ".word-2",
        //   translateX: -300,
        //   duration: 1000,
        //   easing: "linear",
        // });
      },
    });
    setTimeout(() => {
      anime({
        targets: ".word-3",
        translateY: [20, 0],
        duration: 2000,
        delay: function (el, i, l) {
          return i * 100;
        },
      });
    }, 800);
    anime({
      targets: ".intro_button-line",
      translateY: [0, -10],
      opacity: [1, 0],
      loop: true,
      easing: "linear",
      duration: 2000,
    });
  }, []);
  return (
    <div className="intro">
      <div className="video">
        {/* <video autoPlay muted>
          <source src={ink} type="video/mp4" />
        </video> */}
      </div>
      <div className="intro_first">
        <span className="dot"></span>
        <span className="word-1">OSTUDIOS</span>
      </div>
      <div className="intro_second">
        <span className="word-2">OSTUDIOS</span>
      </div>
      <div className="intro_third">
        <span className="word-3">where</span>
        <span className="word-3">all</span>
        <span className="word-3">your</span>
        <span className="word-3">ideas</span>
        <span className="word-3">come</span>
        <span className="word-3">to</span>
        <span className="word-3">live</span>
      </div>
      <button className="intro_button" onClick={handleIntroButton}>
        <span className="intro_button-cover">
          <span className="intro_button-line"> </span>
        </span>
      </button>
    </div>
  );
};

export default Intro;
