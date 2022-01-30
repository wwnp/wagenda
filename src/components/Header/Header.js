import React from 'react'
import classes from './Header.module.css'
import logo from '../../images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
const Header = props => {
  let { innerRef } = props
  return (
    <Navbar fixed="top" bg="dark" expand="lg" variant="dark" ref={innerRef} style={{ flexGrow: '0!important' }}>
      <Container>
        <Navbar.Brand ><Link to={'/'}><img className="d-inline-block align-top" src={logo} width={24} alt="" /></Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <a className={'nav-link'} href={'https://github.com/wwnp/react-countries'} target={'_blank'} rel="noreferrer">GitHub Repo</a>
            {/* <a href={'https://wwnp.github.io/react-countries/'}>GitHub Demo</a> */}
            {/* <NavLink className={'nav-link'} to="/">Home</NavLink> */}
            {/* <NavLink className={'nav-link'} to="/add">Add</NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Nav
    //   activeKey="/home"
    //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    // >
    //   <Nav.Item>
    //     <NavLink className={'nav-link'} to={'/'}>Home</NavLink>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <NavLink className={'nav-link'} to={'/'}>Home</NavLink>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <NavLink className={'nav-link'} to={'/'}>Home</NavLink>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <NavLink className={'nav-link'} to={'/'}>Home</NavLink>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <NavLink className={'nav-link'} to={'/'}>Home</NavLink>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <NavLink className={'nav-link'} to={'/add'}>Add</NavLink>
    //   </Nav.Item>
    //   <Nav.Item>
    //   </Nav.Item>
    //   <Nav.Item>
    //   </Nav.Item>
    // </Nav>
    // <div className={classes.Header}>
    //   <h3>Country Comparer <img src={logo} alt="" /></h3>
    // </div>
  )
}
export default Header