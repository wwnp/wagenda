import React from 'react'
import { Outlet } from "react-router-dom";
import { Drawer } from './Drawer';
import MenuToggle from './MenuToggle';

export const Layout = (props) => {
  const { onToggleHandler, menu, changeMenu } = props
  return (
    <React.Fragment>
      <div className={'Layout'}>
        {/* <Header></Header> */}
        <Drawer
          menu={menu}
          changeMenu={changeMenu}
          onToggleHandler={onToggleHandler}
        >
        </Drawer>
        <MenuToggle
          menu={menu}
          onToggleHandler={onToggleHandler}
        >
        </MenuToggle>
        {/* <Container fluid> */}
        <Outlet></Outlet>
        {/* {this.props.isMobile
              ? <div className="text-center display-6"><h6>Unavailable on mobile version</h6></div>
              : <Outlet></Outlet>
            } */}
        {/* </Container> */}
        {/* <Footer></Footer> */}
      </div>
    </React.Fragment>
  )
}