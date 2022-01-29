import React from 'react'
export const Backdrop = props => {
  console.log(props)
  return (
    <div
      className='Backdrop'
      onClick={props.onToggleHandler}
    >
    </div>
  )
}