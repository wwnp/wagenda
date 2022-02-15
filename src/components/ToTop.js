import React from 'react'
import  up from '../images/arrow-up-solid.svg'
export const ToTop = React.forwardRef((props,ref) => (
  // <span className="ToTop" ref={ref}> ^ </span>
  <span className="ToTop hide" ref={ref}>
    <img src={up} alt='up'  onClick={props.toTopHandler}/>
  </span>
  
  // <FontAwesomeIcon className='ToTop' icon="fa-solid fa-arrow-up" />
  // <button className='ToTop' ref={ref} onClick={props.toTopHandler}>t0_TOP</button>
))