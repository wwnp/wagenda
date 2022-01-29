import React from 'react'
import classes from './Header.module.css'
import logo from '../../images/logo.png'
const Header = props => {
  return (
    <div className={classes.Header}>
      <h3>Country Comparer <img src={logo} alt="" /></h3>
    </div>
  )
}
export default Header