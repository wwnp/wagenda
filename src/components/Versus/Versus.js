import React from 'react'
import classes from './Versus.module.css'
import versus from '../../images/versus.png'
const Versus = props => {
  return (
    <div className={classes.Versus}>
      <img src={versus} alt="versus" style={{width:'100px'}}/>
    </div>
  )
}
export default Versus