import React, { useContext } from "react";
import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import "../assets/css/header.css";
import useScrollDirection from "../hooks/scrollDirection";
import { BsMoonStars as DarkIcon } from "react-icons/bs";
import { MdOutlineLightMode as LightIcon } from "react-icons/md";
import { UIContext } from "../context/UIContext";
import { HiOutlineMenuAlt3 as BurgerIcon } from "react-icons/hi";
import { MdClose as CloseIcon } from "react-icons/md";
const Header = () => {
  const { isDarkTheme, setTheme } = useContext(UIContext);
  const { isDrawerOpen, setDrawer } = useContext(UIContext);

  const scrollDirection = useScrollDirection();
  return (
    <header
      className={`${scrollDirection === "down" ? "header header_hide" : "header"}`}
    >
      <div className="header_leftContainer">
        <HashLink to="/#hero" smooth>
          <HomeIcon />
        </HashLink>
      </div>
      <div className="header_rightContainer">
        <nav className="header_navContainer">
          <ul className="header_listContainer">
            <li className="header_listItem">
              <HashLink to="/#about" smooth>
                &#60;<span>About</span>&#47;&#62;
              </HashLink>
            </li>
            <li className="header_listItem">
              <HashLink to="/#projects" smooth>
                &#60;<span>Projects</span>&#47;&#62;
              </HashLink>
            </li>
            <li className="header_listItem">
              <HashLink to="/#contact" smooth>
                &#60;<span>Contact</span>&#47;&#62;
              </HashLink>
            </li>
          </ul>
        </nav>
        <button
          className="header_themeContainer"
          onClick={() => setTheme(!isDarkTheme)}
        >
          {isDarkTheme ? <DarkIcon /> : <LightIcon />}
        </button>
      </div>
      <div
        className="header_burgerContainer"
        onClick={() => setDrawer(!isDrawerOpen)}
      >
        {isDrawerOpen ? <CloseIcon /> : <BurgerIcon />}
      </div>
    </header>
  );
};

export default Header;
