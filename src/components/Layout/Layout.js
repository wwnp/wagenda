import React from 'react'
import classes from './Layout.module.css'
import { Outlet } from "react-router-dom";
// import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';
// import { useState } from 'react';
import { Drawer } from './../Drawer';
import MenuToggle from './../MenuToggle';
export const Layout = (props) => {
  const { onToggleHandler, menu, changeMenu } = props
  return (
    <React.Fragment>
      <div className={classes.Layout}>
        <Header></Header>
        <Drawer
          menu={menu}
          onToggleHandler={onToggleHandler}
        >
        </Drawer>
        <MenuToggle
          menu={menu}
          onToggleHandler={onToggleHandler}
        >
        </MenuToggle>
        <Container fluid>
          <Outlet></Outlet>
          {/* {this.props.isMobile
              ? <div className="text-center display-6"><h6>Unavailable on mobile version</h6></div>
              : <Outlet></Outlet>
            } */}
        </Container>
        {/* <Footer></Footer> */}
      </div>
    </React.Fragment>
  )
}