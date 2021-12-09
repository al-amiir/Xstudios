import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import ink from "../material/ink.mp4";
// import { animateWord, animateMenu, animateLine } from "../globalFunctions/globalAnimation";
const Intro = () => {
  function handleIntroButton() {
    // animateMenu(".menu", "normal");
    // setTimeout(() => {
    //   animateWord(".menu_button-word-1", "normal");
    //   animateWord(".menu_button-word-2", "normal");
    //   animateWord(".menu_button-word-3", "normal");
    //   animateWord(".menu_button-word-4", "normal");
    //   animateWord(".menu_button-word-5", "normal");
    //   animateWord(".menu_button-word-6", "normal");
    //   animateLine(".menu_button-line", "normal");
    // }, 1000);
    // anime({
    //   targets: ".word-2",
    //   translateX: -400,
    //   translateY: -20,
    //   duration: 2000,
    //   easing: "easeOutQuart",
    // });
    // anime({
    //   targets: ".word-1",
    //   translateX: 400,
    //   translateY: 20,
    //   duration: 2000,
    //   easing: "easeOutQuart",
    // });
    // anime({
    //   targets: ".word-3",
    //   translateY: [0, 20],
    //   delay: function (el, i, l) {
    //     return i * 100;
    //   },
    //   begin: () => {
    //     anime({
    //       targets: ".mainContent",
    //       translateY: "-100%",
    //       delay: 500,
    //       easing: "easeOutQuart",
    //     });
    //   },
    // });
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
    });
    setTimeout(() => {
      anime({
        targets: ".word-3",
        translateY: [40, 0],
        duration: 2000,
        delay: function (el, i, l) {
          return i * 100;
        },
      });
    }, 800);
  }, []);
  return (
    <div className="intro">
      <div className="video">
        <video autoPlay muted>
          <source src={ink} type="video/mp4" />
        </video>
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
      {/* <button className="intro_button" onClick={handleIntroButton}>
        <span className="intro_button-cover">
          <span className="intro_button-line"> </span>
        </span>
      </button> */}
    </div>
  );
};

export default Intro;
