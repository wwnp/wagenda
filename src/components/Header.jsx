import React, { useEffect, useState } from 'react'
import logo from '../assets/images/wagenda.png'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { CountryContex } from '../contex/contex';
import { useContext } from 'react';

const Header = () => {
  const {
    theme,
    changeTheme
  } = useContext(CountryContex)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const modeSwitch = () => changeTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <header className='header'>
      <Link className='brand' to={'/'}><img className="d-inline-block align-top" src={logo} width={120} alt="" /></Link>

      <ul className='nav'>
        <li onClick={modeSwitch}>
          {
            theme === 'light'
              ? (
                <span style={{ color: '--colors-text', cursor: 'pointer' }}><IoMoonOutline size="14px" className='mr-1' />Light Mode</span>
              )
              : (
                <span style={{ color: '--colors-text', cursor: 'pointer' }}><IoMoon size="14px" className='mr-1' />Dark Mode</span>
              )
          }
        </li>
        <li className='mr-1'>
          <ScrollLink
            className={'nav-link ml-1'}
            activeClass="active"
            to="games"
            smooth={true}
            duration={200}
            style={{
              cursor: 'pointer'
            }}
          >
            Games
          </ScrollLink>

        </li>
        <li className='mr-1'>
          <ScrollLink
            className={'nav-link'}
            activeClass="active"
            to="about"
            smooth={true}
            duration={200}
            style={{
              cursor: 'pointer'
            }}
          >
            About
          </ScrollLink>
        </li>
      </ul>
    </header>
    // <Navbar bg="bg-dark" expand="lg" variant="dark" style={{ flexGrow: '0!important', backgroundColor: '#0c0c0c!important' }}>
    //   <Container>import { Link } from 'react-router-dom';



    //     <Navbar.Brand ><Link to={'/'}><img className="d-inline-block align-top" src={logo} width={120} alt="" /></Link> </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ml-auto">
    // <div onClick={modeSwitch}>
    //   {
    //     theme === 'light'
    //       ? (
    //          <span><IoMoonOutline size="24px" />Light Mode</span>
    //       )
    //       : (
    //         <span><IoMoon size="24px" />Light Mode</span>
    //       )
    //   }
    // </div>
    // <ScrollLink
    //   className={'nav-link'}
    //   activeClass="active"
    //   to="games"
    //   smooth={true}
    //   duration={200}
    //   style={{
    //     cursor: 'pointer'
    //   }}
    // >
    //   Games
    // </ScrollLink>
    // <ScrollLink
    //   className={'nav-link'}
    //   activeClass="active"
    //   to="about"
    //   smooth={true}
    //   duration={200}
    //   style={{
    //     cursor: 'pointer'
    //   }}
    // >
    //   About
    // </ScrollLink>
    //         <a className={'nav-link'} href={'https://github.com/wwnp/react-countries'} target={'_blank'} rel="noreferrer">GitHub Repo</a>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  )
}
export default Header