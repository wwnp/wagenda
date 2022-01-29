import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { CountryContex } from '../contex/contex';
import { Backdrop } from './Backdrop';
export const Drawer = props => {
  const { menu, changeMenu, onToggleHandler } = props
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
          <li>
            <NavLink
              to={'/countrycomparer'}
              className={({ isActive }) => (isActive ? 'side-a active-side' : 'side-a')}
              onClick={e => changeMenu(!menu)}
            >
              Country Comparer
            </NavLink>
          </li>
        </ul>
      </nav>
      {menu
      ? <Backdrop onToggleHandler={onToggleHandler}></Backdrop>
      : null
      }
    </React.Fragment>
  )
}