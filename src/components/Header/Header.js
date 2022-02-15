import React from 'react'
import classes from './Header.module.css'
import logo from '../../images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
const Header = props => {
  let { scrollTo, aboutRef, gamesRef } = props
  return (
    <Navbar fixed='top' bg="dark" expand="lg" variant="dark" style={{ flexGrow: '0!important' }}>
      <Container>
        <Navbar.Brand ><Link to={'/'}><img className="d-inline-block align-top" src={logo} width={24} alt="" /></Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <ScrollLink
              className={'nav-link'}
              activeClass="active"
              to="games"
              smooth={true}
              duration={200}
              style={{
                cursor:'pointer'
              }}
            >
              Games
            </ScrollLink>
            <ScrollLink
              className={'nav-link'}
              activeClass="active"
              to="about"
              smooth={true}
              duration={200}
              style={{
                cursor:'pointer'
              }}
            >
              About
            </ScrollLink>
            {/* <ScrollLink className={'nav-link'} to={'games'} onClick={() => scrollTo(aboutRef)}>About</ScrollLink> */}
            {/* <Link className={'nav-link'} to={'/'} onClick={() => scrollTo(aboutRef)}>About</Link> */}
            {/* <Link className={'nav-link'} to={'/'} onClick={() => scrollTo(gamesRef)}>Games</Link> */}
            <a className={'nav-link'} href={'https://github.com/wwnp/react-countries'} target={'_blank'} rel="noreferrer">GitHub Repo</a>
            {/* <a href={'https://wwnp.github.io/react-countries/'}>GitHub Demo</a> */}
            {/* <NavLink className={'nav-link'} to="/">Home</NavLink> */}
            {/* <NavLink className={'nav-link'} to="/add">Add</NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header