import React from "react";
import { animateWord, animateMenu, animateLine } from "../globalFunctions/globalAnimation";

const MenuButton = () => {
  function handleIntroButton() {
    animateMenu(".menu", "normal");
    setTimeout(() => {
      animateWord(".menu_button-word-1", "normal");
      animateWord(".menu_button-word-2", "normal");
      animateWord(".menu_button-word-3", "normal");
      animateWord(".menu_button-word-4", "normal");
      animateWord(".menu_button-word-5", "normal");
      animateWord(".menu_button-word-6", "normal");
      animateLine(".menu_button-line", "normal");
    }, 1000);
  }
  return (
    <button className="intro_button" onClick={handleIntroButton}>
      <span className="intro_button-cover">
        <span className="intro_button-line"> </span>
      </span>
    </button>
  );
};

export default MenuButton;
