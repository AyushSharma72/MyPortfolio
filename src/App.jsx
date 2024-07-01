import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <WhatIDo />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
