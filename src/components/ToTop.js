import React from 'react'
import up from '../images/arrow-up-solid.svg'

export const ToTop = React.forwardRef((props, ref) => (
  <span className="ToTop hide" ref={ref}>
    <img src={up} alt='up' onClick={props.toTopHandler} />
  </span>
))