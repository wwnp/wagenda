import React, { useContext } from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { CountryContex } from '../contex/contex'

export const Burger = (props) => {
  const {
    theme,
  } = useContext(CountryContex)
  const {
    handleBurgerClick
  } = props
  return (
    <AiOutlineMenuFold
      onClick={handleBurgerClick}
      size={30}
      style={{
        position: 'absolute',
        right: 0,
        top: '1rem',
        color: theme === 'dark' ? '#fff' : '#000'
      }}
    ></AiOutlineMenuFold>
  )
}
