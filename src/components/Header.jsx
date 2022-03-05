import React, { useEffect, useState } from 'react'
import logo from '../assets/images/wagenda.png'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { CountryContex } from '../contex/contex';
import { useContext } from 'react';
import { Burger } from './Burger';
import { motion, AnimatePresence } from 'framer-motion';

const collapseVariants = {
  hidden: {
    opacity: 0,
    height: 0
  },
  visible: {
    opacity: 1,
    height: 'auto'
  },
  exit: {
    opacity: 0,
    height: 0
  },
}

const Header = () => {
  const {
    theme,
    changeTheme
  } = useContext(CountryContex)

  const [menu, setChangeMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)

    console.log(window.innerWidth)

  }, [theme])

  useEffect(() => {
    determineMobiled()

    window.addEventListener('resize', determineMobiled)

    function determineMobiled() {
      if (window.innerWidth <= 576) {
        setIsMobile(true)
        setChangeMenu(false)
      } else {
        setChangeMenu(true)
        setIsMobile(false)
      }
    }
    return () => {
      window.removeEventListener('resize', determineMobiled)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const modeSwitch = () => changeTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <header className='header'>
      <Link className='brand' to={'/'}><img className="d-inline-block align-top" src={logo} width={120} alt="" /></Link>
      {
        menu &&
        (
          <AnimatePresence>
            <ul
              variants={collapseVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              transition={{
                duration: .2,
              }}

              className={`nav ${isMobile ? 'nav-mobile' : ''}`}
              style={{
                overflow: 'hidden',
              }}
            >
              <li onClick={modeSwitch}>
                {
                  theme === 'light'
                    ? (
                      <span style={{ color: '--colors-text', cursor: 'pointer' }}>Light Mode&nbsp;<IoMoonOutline size="14px" className='mr-1' /></span>
                    )
                    : (
                      <span style={{ color: '--colors-text', cursor: 'pointer' }}>Dark Mode&nbsp;<IoMoon size="14px" className='mr-1' /></span>
                    )
                }
              </li>
              <li>
                <ScrollLink
                  onClick={() => {
                    if (isMobile) {
                      setChangeMenu(false)
                    }
                  }}
                  className={'nav-link'}
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
              <li>
                <ScrollLink
                  // onClick={() => {
                  //   if (isMobile) {
                  //     setChangeMenu(false)
                  //   }
                  // }}
                  to="about"
                  // smooth={true}
                  // duration={200}
                  // style={{
                  //   cursor: 'pointer'
                  // }}
                >
                  About
                </ScrollLink>
              </li>
            </ul>
          </AnimatePresence>
        )
      }

      {isMobile && <Burger handleBurgerClick={() => setChangeMenu(!menu)}></Burger>}
    </header >
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