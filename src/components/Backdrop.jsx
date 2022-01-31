import React from 'react'
export const Backdrop = props => {
  return (
    <div
      className='Backdrop'
      onClick={props.onToggleHandler}
    >
    </div>
  )
}