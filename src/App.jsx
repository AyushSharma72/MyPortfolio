import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import Projects from "./components/projects";
function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <WhatIDo />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
