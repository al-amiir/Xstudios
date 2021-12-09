import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./component/AboutUs";
import Menu from "./sub_component/Menu";
import MenuButton from "./sub_component/MenuButton";
import Transition from "./sub_component/Transition";

ReactDOM.render(
  <BrowserRouter>
    <Transition />
    <MenuButton />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about-us" element={<AboutUs />} />
    </Routes>
    <Menu />
  </BrowserRouter>,
  document.getElementById("root")
);
