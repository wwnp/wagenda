import React, { forwardRef } from 'react'
import { motion } from 'framer-motion';
export const CountryButton = forwardRef((props, ref) => {
  const modalButton = {
    backgroundImage: 'url(' + props.urlFlag + ')',
  }
  const cls = ['CountryButton']
  if (props.oneCountry) {
    if (props.country.toLowerCase() === props.oneCountry.toLowerCase()) {
      cls.push('active')
    }
  }
  if (props.twoCountry) {
    if (props.country.toLowerCase() === props.twoCountry.toLowerCase()) {
      cls.push('active')
    }
  }

  return (
    <div className='CountryWrapper' ref={ref}>
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
})
export const MCountryButton = motion(CountryButton)