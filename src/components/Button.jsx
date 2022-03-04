import React from 'react'
import { useNavigate } from 'react-router-dom'
import { delay } from '../../dox'
const Button = props => {
  const navigate = useNavigate()
  let cls = ['btn']
  if (props.classAdd) {
    cls.push(props.classAdd)
  }
  return (
    <button
      className={cls.join(' ')}
      onClick={async (e) => {
        if (props.onClick) {
          await props.onClick()
        }
        navigate(props.navTo)
      }}
    >
      Start
    </button>
  )
}
export default Button