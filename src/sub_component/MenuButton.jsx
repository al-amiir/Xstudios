import React from "react";
import { animateWord, animateMenu, animateLine } from "../globalFunctions/globalAnimation";
const MenuButton = () => {
  function handleIntroButton() {
    animateMenu(".menu", "normal");
    setTimeout(() => {
      animateWord(".menu_link-word-1", "normal");
      animateWord(".menu_link-word-2", "normal");
      animateWord(".menu_link-word-3", "normal");
      animateWord(".menu_link-word-4", "normal");
      animateWord(".menu_link-word-5", "normal");
      animateWord(".menu_link-word-6", "normal");
      animateLine(".menu_link-line", "normal");
    }, 1000);
  }
  return (
    <button className="menu_button" onClick={handleIntroButton}>
      <span className="menu_button-cover">
        <span className="menu_button-line"> </span>
      </span>
    </button>
  );
};

export default MenuButton;
