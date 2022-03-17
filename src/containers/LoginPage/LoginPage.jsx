import React, { useState } from 'react'
import { Form } from '../../components/Form'
import { signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { useContext } from 'react';
import { CountryContex } from '../../contex/contex';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import Cookies from 'js-cookie'
import { auth } from '../../firebase';
import { motion } from 'framer-motion';

export const LoginPage = ({ user, }) => {

  const navigate = useNavigate()
  const {
    changeMenu,
    menu,
  } = useContext(CountryContex)

  useEffect(() => {
    console.log(456)
    if (menu === true) {
      console.log(123)
      changeMenu(false)
    }
  }, [])

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleLogin = async (event, data) => {
    event.preventDefault()
    const { email, password, capcha } = data
    console.log(capcha)

    if(email.length === 0){
      setError('Email required')
      return
    }

    if(password.length === 0){
      setError('Password required')
      return
    }
    console.log(capcha)
    if(!capcha){
      setError('Wrong reCapcha')
      return
    }
    console.log(123)


    setError(null)
    setSuccess(null)
    
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // updateProfile(auth.currentUser, {
      //   displayName: "Megan Rain", photoURL: "https://i.pinimg.com/originals/13/0f/cf/130fcf591707629116cf320e040d45d2.jpg"
      // })
      setSuccess('Successfully login ')
    } catch (error) {
      setError(error.message)
    }
  }

  // useEffect(() => {
  //   document.body.setAttribute('data-theme', Cookies.get('theme') || 'dark')
  // }, [theme])

  return (
    <>
      <div className="background">
        <motion.div
          initial={{
            rotate: 0,
            x: 0,
            y: 0
          }}
          animate={{
            rotate: 360,
            x: 400,
            y: 500
          }}
          transition={{
            delay: 0,
            duration: 5,
            repeat: Infinity,
            repeatDelay: 0,
            repeatType: 'reverse',
            type: 'tween',
            ease: 'easeInOut'
          }}
          className="shape"
        ></motion.div>
        <motion.div
          initial={{
            rotate: 0,
            x: 0,
            y: 0
          }}
          animate={{
            rotate: 360,
            x: -400,
            y: -500
          }}
          transition={{
            delay: 0,
            duration: 5,
            repeat: Infinity,
            repeatDelay: 0,
            repeatType: 'reverse',
            type: 'tween',
            ease: 'easeInOut'
          }}
          className="shape">
        </motion.div>
      </div>
      <Form title={'Log In'} handleClick={handleLogin} error={error} success={success}></Form>
    </>
  )
}
