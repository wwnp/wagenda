import React, { useState } from 'react'
import { Form } from '../../components/Form'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from 'react';
import { CountryContex } from '../../contex/contex';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import Cookies from 'js-cookie'
import { auth } from '../../firebase';

export const LoginPage = ({user,}) => {

  const navigate = useNavigate()
  const {
    changeMenu,
    menu,
    theme,
    changeTheme
  } = useContext(CountryContex)

  const handleLogin = async (email,password)=> {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  // useEffect(() => {
  //   document.body.setAttribute('data-theme', Cookies.get('theme') || 'dark')
  // }, [theme])

  return (
    <>
      <div className='text-center'>LoginPage</div>
      <Form title={'Log In'} handleClick={handleLogin}></Form>
    </>
  )
}
