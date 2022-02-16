import React from 'react'
import logo from '../../images/wagenda.png'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

const Header = props => {
  return (
    <Navbar fixed='top' bg="dark" expand="lg" variant="dark" style={{ flexGrow: '0!important' }}>
      <Container>
        <Navbar.Brand ><Link to={'/'}><img className="d-inline-block align-top" src={logo} width={120} alt="" /></Link> </Navbar.Brand>
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
                cursor: 'pointer'
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
                cursor: 'pointer'
              }}
            >
              About
            </ScrollLink>
            <a className={'nav-link'} href={'https://github.com/wwnp/react-countries'} target={'_blank'} rel="noreferrer">GitHub Repo</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header