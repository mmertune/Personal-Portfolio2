import React from 'react'
import "../assets/css/button.css"

const Button = ({title}) => {
  return (
    <button className='button'>
      {title}
    </button>
  )
}

export default Button