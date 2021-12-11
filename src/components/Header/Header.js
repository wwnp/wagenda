import React from 'react'
import classes from './Header.module.css'
import logo from '../../images/logo.png'
const Header = props => {
  return (
    <div className={classes.Header}>
      <div>
        <img src={logo} alt="" />
        <h1>Compareville</h1>
      </div>
    </div>
  )
}
export default Header