import React from "react";
import {
  BrowserRouter,
  // Switch,
  // Route,
} from "react-router-dom";

import Nav from "./views/nav/nav";
import About from "./views/about/about";
import Projects from "./views/projects/projects";
import Skills from "./views/skills/skills";
import Work from "./views/work/work";
import Education from "./views/education/education"
import Contact from "./views/contact/contact";

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
    </BrowserRouter>
  );
}

export default App;
