import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./sub_component/Menu";
import MenuButton from "./sub_component/MenuButton";
import Loading from "./sub_component/Loading";

const Intro = React.lazy(() => import("./component/Intro"));
const AboutUs = React.lazy(() => import("./component/AboutUs"));
const Services = React.lazy(() => import("./component/Services"));
const Projects = React.lazy(() => import("./component/Projects"));
const Partners = React.lazy(() => import("./component/Partners"));
const ContactUs = React.lazy(() => import("./component/ContactUs"));

ReactDOM.render(
  <BrowserRouter>
    <Loading />
    <MenuButton />
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Intro />
          </Suspense>
        }
      />
      <Route
        path="/about-us"
        element={
          <Suspense fallback={<>Loading...</>}>
            <AboutUs />
          </Suspense>
        }
      />
      <Route
        path="/services"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Services />
          </Suspense>
        }
      />
      <Route
        path="/projects"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Projects />
          </Suspense>
        }
      />
      <Route
        path="/partners"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Partners />
          </Suspense>
        }
      />
      <Route
        path="/contact-us"
        element={
          <Suspense fallback={<>Loading...</>}>
            <ContactUs />
          </Suspense>
        }
      />
    </Routes>
    <Menu />
  </BrowserRouter>,
  document.getElementById("root")
);
