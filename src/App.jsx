import React, { useState } from "react";
import "./assets/css/app.css";
import { Contact, Hero, Header, Projects, Footer, About } from "./pages";
import { UIContext } from "./context/UIContext";

const App = () => {
  const[isDarkTheme, setTheme]=useState(true)
  const[isDrawerOpen, setDrawer]=useState(false)

  return (
    <div className="app">
      <UIContext.Provider value={{isDarkTheme, setTheme, isDrawerOpen, setDrawer}}>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </UIContext.Provider>
    </div>
  );
};

export default App;
