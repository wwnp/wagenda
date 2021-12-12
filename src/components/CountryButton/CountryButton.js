import React from 'react'
import './CountryButton.css'
import { useNavigate } from "react-router-dom"

const Button = props => {
  const navigate = useNavigate()
  return (
    <div className='CountryWrapper'>
      <button
        className={'CountryButton ' + props.state}
        style={props.customStyle}
        data-country={props.country}
        onClick={props.onCLick}
      >
      </button>
      <p className={'CountryButton-label badge bg-white text-black'}>{props.country}</p>
    </div>
  )
}
export default Button