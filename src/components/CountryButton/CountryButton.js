import React from 'react'
import './CountryButton.css'
const CountryButton = props => {
  const modalButton = {
    backgroundImage: 'url(' + props.urlFlag + ')',
  }
  return (
    <div className='CountryWrapper'>
      <button
        className={'CountryButton ' + props.state}
        style={modalButton}
        data-country={props.country}
        onClick={e => {
          props.onClick(e)
        }}
      >
      </button>
      <p className={'CountryButton-label badge bg-white text-black'}>{props.country}</p>
    </div>
  )
}
export default CountryButton