import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.js";
import Home from "./containers/Home/Home.js";
import NotFound from "./containers/NotFound/NotFound.js";
import Compare from "./containers/Compare/Compare.js";
import Add from "./containers/Add/Add.js";
export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 1400;
  // useEffect(() => {
  //   window.addEventListener('resize', handleWindowSizeChange);
  //   return () => {
  //     window.removeEventListener('resize', handleWindowSizeChange);
  //   }
  // })
  // function handleWindowSizeChange() {
  //   setWindowWidth(window.innerWidth);
  // }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout isMobile={isMobile} />}>
          <Route index element={<Home windowWidth={windowWidth}/>}></Route>
          <Route path='compare' element={<Compare isMobile={isMobile} />}></Route>
          <Route path='add' element={<Add />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

