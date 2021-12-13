import React from 'react'
import './CountryButton.css'
import { useNavigate } from "react-router-dom"

const CountryButton = props => {
  const navigate = useNavigate()
  const modalButton = {
    backgroundImage: 'url(' + props.urlFlag + ')',
  }
  return (
    <div className='CountryWrapper'>
      <button
        className={'CountryButton ' + props.state}
        style={modalButton}
        data-country={props.country}
        onClick={props.onCLick}
      >
      </button>
      <p className={'CountryButton-label badge bg-white text-black'}>{props.country}</p>
    </div>
  )
}
export default CountryButton