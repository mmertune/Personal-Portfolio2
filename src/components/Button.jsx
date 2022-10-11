import React from 'react'
import "../assets/Button.css"

const Button = ({title}) => {
  return (
    <button className='button'>
      {title}
    </button>
  )
}

export default Button