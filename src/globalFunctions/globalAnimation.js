import anime from "animejs/lib/anime.es.js";

export function animateWord(className, direction) {
  anime({
    targets: `${className}`,
    translateY: [70, 0],
    delay: function (el, i, l) {
      return i * 100;
    },
    direction: `${direction}`,
  });
}
export function animateMenu(className, direction) {
  anime({
    targets: `${className}`,
    translateY: ["0vw", "-100vw"],
    easing: "easeOutQuart",
    duration: 1000,
    direction: `${direction}`,
  });
}

export function animateLine(className, direction) {
  anime({
    targets: `${className}`,
    width: ["0%", "100%"],
    easing: "easeOutQuad",
    delay: function (el, i, l) {
      return i * 100;
    },
    direction: `${direction}`,
  });
}

export function animateLoadingBackground(direction) {
  anime({
    targets: ".loading_background",
    // translateY: ["0vh", "-100vh"],
    opacity: [0, 1],
    direction: `${direction}`,
    easing: "linear",
    duration: 100,
  });
}
export function animateLoading(className, direction) {
  anime({
    targets: `${className}`,
    translateY: ["0vh", "-100vh"],
    delay: function (el, i, l) {
      return i * 100;
    },
    // easing: "easeOutQuad",
    direction: `${direction}`,
  });
}
// .transition span
