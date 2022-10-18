import React, { useState } from "react";
import "./assets/css/app.css";
import { Contact, Hero, Header, Projects, Footer, About} from "./pages";
import { UIContext } from "./context/UIContext";
import {SideNav} from "./pages"

const App = () => {
  const[isDarkTheme, setTheme]=useState(true)
  const[isBurgerIcon, setBurgerIcon]=useState(true)

  return (
    <div className={`app ${isDarkTheme ? "app_darkTheme" : "app_lightTheme"} ${isBurgerIcon ? "":"app_preventScroll"}`}>
      <UIContext.Provider value={{isDarkTheme, setTheme, isBurgerIcon, setBurgerIcon}}>
        <Header />
        {!isBurgerIcon && <SideNav />}
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
