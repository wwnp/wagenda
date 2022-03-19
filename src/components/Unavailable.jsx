import React from 'react'
import { Link } from 'react-router-dom';

export const Unavailable = () => {
  return (
    <div className='text-center'>
      <h1>Unavailable at mobile version</h1>
      <Link to={'/'} className='btn btn-success'>Home</Link>
    </div>
  )
}
