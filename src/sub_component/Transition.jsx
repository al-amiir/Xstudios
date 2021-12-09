import React, { useEffect } from "react";
import { animateTransition } from "../globalFunctions/globalAnimation";

const Transition = () => {
  let positions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  useEffect(() => {
    // animateTransition(".transition span", "normal");
  }, []);
  return (
    <div className="transition">
      {positions.map((p, i) => (
        <span className={i} style={{ left: `${p * 10}vw` }}></span>
      ))}
    </div>
  );
};

export default Transition;
