import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import { Compare } from "./containers/Compare";
import Add from "./containers/Add";
import { CountryComparer } from './containers/CountryComparer';
import { CountryContex } from "./contex/contex.js";
import { LoginPage } from "./containers/LoginPage/LoginPage";
import GuestRoute from './routes/GuestRoute';
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from "./routes/PrivateRoute";
import { ProfilePage } from "./containers/ProfilePage";
import { SignupPage } from "./containers/RegistrationPage/SignupPage";
import TestPage from "./containers/TestPage";
import { WINDOW_SIZE } from "./config";

export default function App() {
  const navigate = useNavigate()
  const { changeMenu, menu, modal, changeModal } = useContext(CountryContex);
  const onToggleHandler = () => {
    changeMenu(!menu)
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= WINDOW_SIZE;

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  })
  function handleWindowSizeChange() {
    setWindowWidth(window.innerWidth);
  }

  return (
    <Routes>
      <Route path='/' element={<Layout onToggleHandler={onToggleHandler} menu={menu} changeMenu={changeMenu} />} >
        <Route path='countrycomparer' element={<CountryComparer isMobile={isMobile} />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='compare' element={<Compare isMobile={isMobile} onToggleHandler={onToggleHandler} menu={menu} changeMenu={changeMenu} navigate={navigate} modal={modal} changeModal={changeModal} />} ></Route>
        <Route path='add' element={
          <AdminRoute >
            <Add />
          </AdminRoute>
        }></Route>
        <Route path='login' element={
          <GuestRoute >
            <LoginPage />
          </GuestRoute>
        }></Route>
        <Route path='signup' element={
          <GuestRoute>
            <SignupPage />
          </GuestRoute>
        }></Route>
        <Route path='profile' element={
          <PrivateRoute >
            <ProfilePage />
          </PrivateRoute>
        }></Route>

        {/* <PrivateRoute></PrivateRoute> */}

        {/* <Route path='signup' element={
          <GuestRoute>
            <RegistrationPage />
          </GuestRoute>
        }></Route> */}
      </Route>
      <Route path='test' element={<TestPage />}></Route>
      <Route index element={<Home />}></Route>
    </Routes>
  )
}

