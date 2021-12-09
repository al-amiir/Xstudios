import React, { useEffect } from "react";

const Loading = () => {
  let positions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="loading">
      <div className="loading_background"></div>
      {positions.map((p, i) => (
        <span className={i} style={{ left: `${p * 10}vw` }}></span>
      ))}
    </div>
  );
};

export default Loading;
