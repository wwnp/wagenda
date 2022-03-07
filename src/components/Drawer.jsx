import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { CountryContex } from '../contex/contex';
import { getItem } from '../hooks/useCookie';
import { Backdrop } from './Backdrop';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

export const Drawer = props => {
  const {
    theme,
    changeTheme
  } = useContext(CountryContex)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const navigate = useNavigate()
  const { menu, changeMenu, onToggleHandler } = props
  const cls = [
    'Drawer',
    menu ? null : 'close'
  ]
  const token = getItem('userToken')
  return (
    <>
      <nav className={cls.join(' ')}>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'side-a active-side' : 'side-a')}
            // onClick={e => changeMenu(!menu)}
            >Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/countrycomparer'
              className={({ isActive }) => (isActive ? 'side-a active-side' : 'side-a')}
            // onClick={e => changeMenu(!menu)}
            >
              Country Comparer
            </NavLink>
          </li>
          {
            token
              ? (
                <li>
                  <NavLink
                    to='/add'
                    className={({ isActive }) => (isActive ? 'side-a active-side' : 'side-a')}
                  >
                    Add
                  </NavLink>
                </li>
              )
              : <li>
                <NavLink
                  to='/login'
                  className={({ isActive }) => (isActive ? 'side-a active-side' : 'side-a')}
                >
                  Login
                </NavLink>
              </li>
          }
          <li>
            <span
              className='side-a'
              onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
              style={{
                cursor: 'pointer'
              }}
            >
              {theme} mode
              <span style={{ marginLeft: '1rem' }}>
                {
                  theme === 'dark'
                    ? <IoMoon size={12}></IoMoon>
                    : <IoMoonOutline size={12}></IoMoonOutline>
                }
              </span>
            </span>
          </li>
        </ul>
      </nav>
      {menu
        ? <Backdrop onToggleHandler={onToggleHandler}></Backdrop>
        : null
      }
    </>
  )
}