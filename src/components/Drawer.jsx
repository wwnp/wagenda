import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { CountryContex } from '../contex/contex';
import { Backdrop } from './Backdrop';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import Cookies from 'js-cookie';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { adminUid, geIfAdminUid } from '../config';

export const Drawer = props => {
  const {
    theme,
    changeTheme,
    user
  } = useContext(CountryContex)


  // console.log(user)

  const navigate = useNavigate()
  const { menu, changeMenu, onToggleHandler } = props

  // useEffect(() => {
  //   changeMenu(!menu)
  // }, [])

  // const logout = async () => {
  //   await signOut(auth);
  // }
  const cls = [
    'Drawer',
    menu ? null : 'close'
  ]
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
            !!user
              ? (
                <li>
                  <NavLink
                    to='/profile'
                    className={({ isActive }) => (isActive ? 'side-a active-side' : 'side-a')}
                  >
                    Profile
                  </NavLink>
                </li>
              )
              : (
                <li>
                  <NavLink
                    to='/login'
                    className={({ isActive }) => (isActive ? 'side-a active-side' : 'side-a')}
                  >
                    Login
                  </NavLink>
                </li>
              )
          }


          <li>
            <span
              className='side-a'
              onClick={() => {
                Cookies.set('theme', Cookies.get('theme') === 'dark' ? 'light' : 'dark')
                changeTheme(theme === 'light' ? 'dark' : 'light')
              }}
              style={{
                cursor: 'pointer'
              }}
            >
              {theme} mode
              <span style={{ marginLeft: '1rem' }}>
                {
                  Cookies.get('theme') === 'dark'
                    ? <IoMoon size={12}></IoMoon>
                    : <IoMoonOutline size={12}></IoMoonOutline>
                }
              </span>
            </span>
          </li>
          
          {/* <li>
            <span
              className='side-a'
              onClick={logout}
            >
              <span style={{ marginLeft: '1rem' }}>
                logout
              </span>
            </span>
          </li> */}
          {
            !!user
              ? geIfAdminUid(adminUid, user)
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
                : null
              : null
          }
        </ul>
      </nav>
      {menu
        ? <Backdrop onToggleHandler={onToggleHandler}></Backdrop>
        : null
      }
    </>
  )
}