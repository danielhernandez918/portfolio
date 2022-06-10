import React, {useState, useEffect} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import "./views/styles.css";
import "./views/script.js";
// import './App.css';
import Header from "./views/header";
import About from "./views/about";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      {/* <About/> */}
    </BrowserRouter>
  );
}

export default App;
