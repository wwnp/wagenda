import React from 'react'
import classes from './NotFound.module.css'
import {Link} from "react-router-dom";
import { Sidenav } from './../../components/Sidenav';
import { useRef } from 'react';
import { useEffect } from 'react';
const NotFound = props => {
  const sidenavRef = useRef(null)
  console.log(sidenavRef)
  useEffect(()=> {
    sidenavRef.current.classList.remove('close')
    setTimeout(() => {
      sidenavRef.current.classList.add('close')
    }, 3000);
  },[])
  return (
    <div className={'NotFound'}>
      {/* <h1>Page not Found</h1> */}
      {/* <Link to='/'>To Home</Link> */}
      <Sidenav innerRef={sidenavRef}></Sidenav>
    </div>
  )
}
export default NotFound