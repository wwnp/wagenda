import React from 'react'
import './CountryButton.css'
const CountryButton = props => {
  const modalButton = {
    backgroundImage: 'url(' + props.urlFlag + ')',
  }
  console.log(props)
  const cls = ['CountryButton']
  if (props.oneCountry) {
    console.log(props.country)
    if (props.country.toLowerCase() === props.oneCountry.country.toLowerCase()) {
      console.log(123)
      cls.push('active')
    }
  }
  if (props.twoCountry) {
    if (props.country.toLowerCase() === props.twoCountry.country.toLowerCase()) {
      console.log(456)
      cls.push('active')
    }
  }

  return (
    <div className='CountryWrapper'>
      <button
        className={cls.join(' ')}
        style={modalButton}
        data-country={props.country}
        data-take={"true"}
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