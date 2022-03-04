import React, { useContext } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';
import { CountryContex } from '../contex/contex';
export const ToTop = React.forwardRef((props, ref) => {
  const {
    toTopHandler = Function.prototype,
    color = 'black'
  } = props
  const {
    theme
  } = useContext(CountryContex)
  return (
    <div className="ToTop hide" ref={ref} onClick={toTopHandler}>
      <AiOutlineArrowUp size={36} color={theme === 'dark' ? 'white' : 'black'}></AiOutlineArrowUp>
    </div>
  )
})