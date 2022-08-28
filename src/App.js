import React from "react";
// import React, {useState, useEffect} from "react";
import {
  BrowserRouter,
  // Switch,
  // Route,
} from "react-router-dom";
// import logo from './logo.svg';
// import "./views/styles.scss";
import "./views/script.js";

// import './App.css';
import Nav from "./views/nav/nav";
// import Header from "./views/header";
import About from "./views/about/about";
import Projects from "./views/projects/projects";
import Skills from "./views/skills/skills";
import Work from "./views/work/work";
import Education from "./views/education/education"
import Contact from "./views/contact/contact";

// import About from "./views/about";


function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <About/>
      <Projects/>
      <Skills/>
      <Work/>
      <Education/>
      <Contact/>
      {/* <About/> */}
    </BrowserRouter>
  );
}

export default App;
