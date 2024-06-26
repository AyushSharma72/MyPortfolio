import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import WhatIDo from "./components/WhatIDo";
function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <WhatIDo />
      </div>
    </>
  );
}

export default App;
