import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { Link, NavLink } from "react-router-dom";
import { animateWord, animateMenu, animateLine } from "../globalFunctions/globalAnimation";

const Menu = () => {
  let word1 = "Home";
  let word2 = "About us";
  let word3 = "Services";
  let word4 = "Projects";
  let word5 = "Partners";
  let word6 = "Contact us";

  function handleCloseButton() {
    animateWord(".menu_button-word-1", "reverse");
    animateWord(".menu_button-word-2", "reverse");
    animateWord(".menu_button-word-3", "reverse");
    animateWord(".menu_button-word-4", "reverse");
    animateWord(".menu_button-word-5", "reverse");
    animateWord(".menu_button-word-6", "reverse");
    animateLine(".menu_button-line", "reverse");
    setTimeout(() => {
      animateMenu(".menu", "reverse");
    }, 1000);
  }
  return (
    <div className="menu">
      <NavLink onClick={handleCloseButton} to="/" className={({ isActive }) => (isActive ? " menu_button activeLink" : "menu_button")}>
        {word1.split("").map((w) => (
          <span className="menu_button-word menu_button-word-1">{w}</span>
        ))}
      </NavLink>
      <span className="menu_button-line"></span>

      <NavLink onClick={handleCloseButton} to="/about-us" className={({ isActive }) => (isActive ? " menu_button activeLink" : "menu_button")}>
        {word2.split("").map((w) => (
          <span className="menu_button-word menu_button-word-2">{w}</span>
        ))}
      </NavLink>
      <span className="menu_button-line"></span>

      <NavLink onClick={handleCloseButton} to="/services" className={({ isActive }) => (isActive ? " menu_button activeLink" : "menu_button")}>
        {word3.split("").map((w) => (
          <span className="menu_button-word menu_button-word-3">{w}</span>
        ))}
      </NavLink>
      <span className="menu_button-line"></span>

      <NavLink onClick={handleCloseButton} to="/projects" className={({ isActive }) => (isActive ? " menu_button activeLink" : "menu_button")}>
        {word4.split("").map((w) => (
          <span className="menu_button-word menu_button-word-4">{w}</span>
        ))}
      </NavLink>
      <span className="menu_button-line"></span>

      <NavLink onClick={handleCloseButton} to="/partners" className={({ isActive }) => (isActive ? " menu_button activeLink" : "menu_button")}>
        {word5.split("").map((w) => (
          <span className="menu_button-word menu_button-word-5">{w}</span>
        ))}
      </NavLink>
      <span className="menu_button-line"></span>

      <NavLink onClick={handleCloseButton} to="/contact-us" className={({ isActive }) => (isActive ? " menu_button activeLink" : "menu_button")}>
        {word6.split("").map((w) => (
          <span className="menu_button-word menu_button-word-6">{w}</span>
        ))}
      </NavLink>
      <span className="menu_button-line"></span>

      <button onClick={handleCloseButton} className="menu_button menu_button-close">
        X
      </button>
    </div>
  );
};

export default Menu;
