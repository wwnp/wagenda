import React from 'react'
import classes from './Button.css'
const Button = props => {
  return (
    <React.Fragment>
      <button
        className={'Button ' + props.state}
        style={props.customStyle}
        data-country={props.country}
        onClick={props.onCLick}
      >
        <p className={'Button-label'}>{props.country}</p>
      </button>
    </React.Fragment>
  )
}
export default Button