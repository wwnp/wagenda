import React from 'react'
import { Link } from 'react-router-dom';
const NotFound = props => {
  return (
    <div className={'NotFound bg-got h-100'}>
      <h1>Page not Found</h1>
      <Link to='/'>To Home</Link>
    </div>
  )
}
export default NotFound