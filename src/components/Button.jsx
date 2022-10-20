import React from 'react'
import { HashLink } from "react-router-hash-link";
import "../assets/css/button.css"

const Button = ({title}) => {
  return (
  //   <button className='button' onClick={}>
  //     {title}
  //   </button>
  // 
  <div className='button'><HashLink to="/#contact" smooth>Contact me!</HashLink></div>
  )
}

export default Button