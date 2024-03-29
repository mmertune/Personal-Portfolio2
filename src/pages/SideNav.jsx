import React, { useContext } from "react";
import { MdClose as CloseIcon } from "react-icons/md";
import { UIContext } from "../context/UIContext";
import { HashLink } from "react-router-hash-link";
import { BsMoonStars as DarkIcon } from "react-icons/bs";
// import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import {ReactComponent as HomeIcon} from '../assets/images/drk_personal_logo.svg';

import { MdOutlineLightMode as LightIcon } from "react-icons/md";
import "../assets/css/sidenav.css";

const SideNav = () => {
  const { isBurgerIcon, setBurgerIcon } = useContext(UIContext);
  const { isDarkTheme, setTheme } = useContext(UIContext);
  return (
    <div className="sidenav">
      <div className="sidenav_blur" onClick={()=>setBurgerIcon(!isBurgerIcon)}></div>

      <aside className={`sidenav_container ${isDarkTheme ? "sidenav_darkTheme": "sidenav_lightTheme"}`}>
        <div className="sidenav_closeContainer">
          <div
            className="sidenav_closeIcon"
            onClick={() => setBurgerIcon(!isBurgerIcon)}
          >
            <CloseIcon />
          </div>
        </div>

        <div className="sidenav_innerContainer">
          <div className="sidenav_homeContainer" onClick={()=>setBurgerIcon(!isBurgerIcon)}>
            <HashLink to="/#hero" smooth>
              <HomeIcon />
            </HashLink>
          </div>
          <nav className="sidenav_navContainer">
            <ul className="sidenav_listContainer">
              <li className="sidenav_listItem" onClick={()=>setBurgerIcon(!isBurgerIcon)}>
                <HashLink to="/#about" smooth>
                  &#60;<span>About</span>&#47;&#62;
                </HashLink>
              </li>
              <li className="sidenav_listItem" onClick={()=>setBurgerIcon(!isBurgerIcon)}>
                <HashLink to="/#projects" smooth>
                  &#60;<span>Projects</span>&#47;&#62;
                </HashLink>
              </li>
              <li className="sidenav_listItem"  onClick={()=>setBurgerIcon(!isBurgerIcon)}>
                <HashLink to="/#contact" smooth>
                  &#60;<span>Contact</span>&#47;&#62;
                </HashLink>
              </li>
            </ul>
          </nav>
          <button
            className="sidenav_themeContainer"
            onClick={() => setTheme(!isDarkTheme)}
          >
            {isDarkTheme ? <DarkIcon /> : <LightIcon />}
          </button>
        </div>
      </aside>
    </div>
  );
};

export default SideNav;
