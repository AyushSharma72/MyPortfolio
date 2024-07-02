import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import { ClipLoader } from "react-spinners";

function App() {
  const [load, setload] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setload(false);
    }, 2000);
  });

  return (
    <>
      {load ? (
        <div className="h-screen bg-white flex justify-center items-center">
          <ClipLoader size={40} />
        </div>
      ) : (
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
      )}
    </>
  );
}

export default App;
