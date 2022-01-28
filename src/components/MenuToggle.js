import React from 'react'
import burger from '../images/menu.png'
const MenuToggle = props => {
  console.log(props.menu)
  const cls = [
    'MenuToggle',
    props.menu ? 'open' : ''
  ]
  // or
  // if(props.isOpen == true){
  //   cls.push('fa-times')
  // }else{
  //   cls.push('fa-bars')
  // }
  return (
    <button
      className={cls.join(' ')}
      onClick={props.onToggleHandler}
    >
      {/* <img src={burger} alt="burger" style={/> */}
    </button>
  )
}
export default MenuToggle