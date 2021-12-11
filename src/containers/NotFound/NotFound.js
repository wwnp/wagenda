import React from 'react'
import classes from './NotFound.module.css'
import {Link} from "react-router-dom";
const NotFound = props => {
  return (
    <div className={classes.NotFound}>
      <h1>Page not Found</h1>
      <Link to='/'>To Home</Link>
    </div>
  )
}
export default NotFound