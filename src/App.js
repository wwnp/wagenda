import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./HOC/Layout/Layout.js";
import Home from "./containers/Home/Home.js";
import NotFound from "./containers/NotFound/NotFound.js";
import Compare from "./containers/Compare/Compare.js";
import { Transition } from 'react-transition-group';
export default function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width <= 768;
  useEffect( () => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  })
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/compare' element={<Compare isMobile={isMobile}/>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Route>
    </Routes>
  )
}

