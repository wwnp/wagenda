import React from 'react'
import up from '../images/arrow-up-solid.svg'
import arrow from '../images/arrow.png'
export const ToTop = React.forwardRef((props, ref) => (
  <img  className="ToTop hide" src={arrow} width={100} alt='up' onClick={props.toTopHandler} ref={ref}/>
  // <span className="ToTop hide" ref={ref}>
  //   <img src={arrow} width={150} alt='up' onClick={props.toTopHandler} />
  // </span>
))