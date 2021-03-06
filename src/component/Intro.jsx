import React, { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import ink from "../material/ink.mp4";
import { animateLoading, animateLoadingBackground } from "../globalFunctions/globalAnimation";

const Intro = () => {
  const [displayCondition, setDisplayCondition] = useState("none");
  setTimeout(() => {
    document.querySelector("video").play();
    setDisplayCondition("initial");
  }, 2000);

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
    <div className="intro">
      <div className="video">
        <video muted style={{ display: `${displayCondition}` }}>
          <source src={ink} type="video/mp4" />
        </video>
      </div>
      <div className="intro_first">
        <span className="dot"></span>
        <span className="word-1">XSTUDIOS</span>
      </div>
      <div className="intro_second">
        <span className="word-2">XSTUDIOS</span>
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
