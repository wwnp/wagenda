import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.js";
import Home from "./containers/Home/Home.js";
import NotFound from "./containers/NotFound/NotFound.js";
import { Compare } from "./containers/Compare/Compare.js";
import Add from "./containers/Add/Add.js";
import { CountryComparer } from './containers/CountryComparer';
import { CountryContex } from "./contex/contex.js";
export default function App() {
  const { changeMenu, menu } = useContext(CountryContex);
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
      <Route
        path='/'
        element={
          <Layout
            onToggleHandler={onToggleHandler}
            menu={menu}
            changeMenu={changeMenu}
            isMobile={isMobile}
          />
        }
      >
        <Route index element={<Home windowWidth={windowWidth} />}></Route>

        <Route path='countrycomparer' element={<CountryComparer />}></Route>
        <Route path='add' element={<Add />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Route>

      <Route
        path='compare'
        element={
          <Compare
            onToggleHandler={onToggleHandler}
            menu={menu}
            changeMenu={changeMenu}
            navigate={navigate}
            isMobile={isMobile}
          />
        }
      ></Route>
    </Routes>
  )
}

