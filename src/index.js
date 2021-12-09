import ReactDOM from "react-dom";
import App from "./App";
import AboutUs from "./component/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./sub_component/Menu";
import MenuButton from "./sub_component/MenuButton";
import Loading from "./sub_component/Loading";
import Intro from "./component/Intro";

ReactDOM.render(
  <BrowserRouter>
    <Loading />
    <MenuButton />
    <Routes>
      <Route exact path="/" element={<Intro />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
    <Menu />
  </BrowserRouter>,
  document.getElementById("root")
);
