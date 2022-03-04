import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import { Compare } from "./containers/Compare";
import Add from "./containers/Add";
import { CountryComparer } from './containers/CountryComparer';
import { CountryContex } from "./contex/contex.js";
export default function App() {
  const { changeMenu, menu, modal, changeModal } = useContext(CountryContex);
  const onToggleHandler = () => {
    changeMenu(!menu)
  }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 700;
  const navigate = useNavigate()
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
    <Routes>
      <Route path='/' element={<Layout onToggleHandler={onToggleHandler} menu={menu} changeMenu={changeMenu} isMobile={isMobile} />} >
        <Route path='countrycomparer' element={<CountryComparer />}></Route>
        <Route path='add' element={<Add />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='compare' element={<Compare onToggleHandler={onToggleHandler} menu={menu} changeMenu={changeMenu} navigate={navigate} isMobile={isMobile} modal={modal} changeModal={changeModal} />} ></Route>
      </Route>
      <Route index element={<Home windowWidth={windowWidth} />}></Route>

    </Routes>
  )
}

