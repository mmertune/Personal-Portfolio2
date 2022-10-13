import React from 'react'
import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import "../assets/css/header.css";

const Header = () => {
  return (
    <header className="header">
    <div className="header_iconContainer">
      <HomeIcon />
    </div>
    <nav className="header_navContainer">
      <ul className="header_listContainer">
        <li className="header_listItem">
          &#60;<span>About </span>&#47;&#62;
        </li>
        <li className="header_listItem">
          &#60;<span>Projects </span>&#47;&#62;
        </li>
        <li className="header_listItem">
          &#60;<span>Contact </span>&#47;&#62;
        </li>
      </ul>
    </nav>
  </header>  )
}

export default Header