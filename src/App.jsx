import React, { useContext, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import { Compare } from "./containers/Compare";
import Add from "./containers/Add";
import { CountryComparer } from './containers/CountryComparer';
import { CountryContex } from "./contex/contex.js";
import { LoginPage } from "./containers/LoginPage/LoginPage";
// import { getItem } from "./hooks/useCookie";
import GuestRoute from './routes/GuestRoute';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from "./routes/PrivateRoute";
import { ProfilePage } from "./containers/ProfilePage";
import { SignupPage } from "./containers/RegistrationPage/SignupPage";
import TestPage from "./containers/TestPage";

export default function App() {
  const navigate = useNavigate()
  const { changeMenu, menu, modal, changeModal } = useContext(CountryContex);
  const onToggleHandler = () => {
    changeMenu(!menu)
  }


  // console.log(currentUser)
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const isMobile = windowWidth <= 700;


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
      <Route path='/' element={<Layout onToggleHandler={onToggleHandler} menu={menu} changeMenu={changeMenu} />} >
        <Route index element={<Home />}></Route>
        <Route path='countrycomparer' element={<CountryComparer />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='compare' element={<Compare onToggleHandler={onToggleHandler} menu={menu} changeMenu={changeMenu} navigate={navigate} modal={modal} changeModal={changeModal} />} ></Route>

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
          // <GuestRoute>
          <SignupPage />
          // </GuestRoute>
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
      <Route path='test' element={ <TestPage /> }></Route>

    </Routes>
  )
}

