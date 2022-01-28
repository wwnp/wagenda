import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { CountryContex } from '../contex/contex';
export const Drawer = props => {
  const { menu, changeMenu } = props
  const cls = [
    'Drawer',
    menu ? null : 'close'
  ]
  return (
    <React.Fragment >
      <nav className={cls.join(' ')}>
        <ul>
          <li>
            <NavLink
              to={'/'}
              className={({ isActive }) => (isActive ? 'side-a active-side' : 'side-a')}
              onClick={e => changeMenu(!menu)}
            >Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/add'}
              className={({ isActive }) => (isActive ? 'side-a active-side' : 'side-a')}
              onClick={e => changeMenu(!menu)}
            >
              Add
            </NavLink>
          </li>


        </ul>
      </nav>
      {/* {isOpen
      ?
      :
      } */}
    </React.Fragment>
  )
}