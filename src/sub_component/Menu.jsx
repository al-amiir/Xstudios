import React from "react";
import { NavLink } from "react-router-dom";
import { animateWord, animateMenu, animateLine } from "../globalFunctions/globalAnimation";
import { TiTimes } from "react-icons/ti";

const Menu = () => {
  let word1 = "Home";
  let word2 = "About us";
  let word3 = "Services";
  let word4 = "Projects";
  let word5 = "Partners";
  let word6 = "Contact us";

  function handleCloseButton() {
    animateWord(".menu_link-word-1", "reverse");
    animateWord(".menu_link-word-2", "reverse");
    animateWord(".menu_link-word-3", "reverse");
    animateWord(".menu_link-word-4", "reverse");
    animateWord(".menu_link-word-5", "reverse");
    animateWord(".menu_link-word-6", "reverse");
    animateLine(".menu_link-line", "reverse");
    setTimeout(() => {
      animateMenu(".menu", "reverse");
    }, 1000);
  }
  return (
    <div className="menu">
      <NavLink onClick={handleCloseButton} to="/" className={({ isActive }) => (isActive ? " menu_link activeLink" : "menu_link")}>
        {word1.split("").map((w, i) => (
          <span key={i} className="menu_link-word menu_link-word-1">
            {w}
          </span>
        ))}
      </NavLink>
      <span className="menu_link-line"></span>

      <NavLink onClick={handleCloseButton} to="/about-us" className={({ isActive }) => (isActive ? " menu_link activeLink" : "menu_link")}>
        {word2.split("").map((w, i) => (
          <span key={i} className="menu_link-word menu_link-word-2">
            {w}
          </span>
        ))}
      </NavLink>
      <span className="menu_link-line"></span>

      <NavLink onClick={handleCloseButton} to="/services" className={({ isActive }) => (isActive ? " menu_link activeLink" : "menu_link")}>
        {word3.split("").map((w, i) => (
          <span key={i} className="menu_link-word menu_link-word-3">
            {w}
          </span>
        ))}
      </NavLink>
      <span className="menu_link-line"></span>

      <NavLink onClick={handleCloseButton} to="/projects" className={({ isActive }) => (isActive ? " menu_link activeLink" : "menu_link")}>
        {word4.split("").map((w, i) => (
          <span key={i} className="menu_link-word menu_link-word-4">
            {w}
          </span>
        ))}
      </NavLink>
      <span className="menu_link-line"></span>

      <NavLink onClick={handleCloseButton} to="/partners" className={({ isActive }) => (isActive ? " menu_link activeLink" : "menu_link")}>
        {word5.split("").map((w, i) => (
          <span key={i} className="menu_link-word menu_link-word-5">
            {w}
          </span>
        ))}
      </NavLink>
      <span className="menu_link-line"></span>

      <NavLink onClick={handleCloseButton} to="/contact-us" className={({ isActive }) => (isActive ? " menu_link activeLink" : "menu_link")}>
        {word6.split("").map((w, i) => (
          <span key={i} className="menu_link-word menu_link-word-6">
            {w}
          </span>
        ))}
      </NavLink>
      <span className="menu_link-line"></span>

      <button onClick={handleCloseButton} className="menu_link menu_link-close">
        <TiTimes />
      </button>
    </div>
  );
};

export default Menu;
