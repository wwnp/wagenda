import React, { useState } from 'react'
import { signInWithEmailAndPassword, } from "firebase/auth";
import { useContext } from 'react';
import { CountryContex } from '../../contex/contex';
import { useEffect } from 'react';
import { auth } from '../../firebase';
import { motion, } from 'framer-motion';
import Recaptcha from "react-recaptcha";
import { useForm } from 'react-hook-form';
import { API_RECAPCHA, emailPattern, passwordPattern } from '../../config';
import { Link } from 'react-router-dom';
import { Balls } from '../../components/Balls';
import { ErrorHelper } from '../../components/ErrorHelper';

let recaptchaInstance;

export const LoginPage = () => {
  const [loading, setLoading] = useState(false)

  const {
    changeMenu,
    menu,
  } = useContext(CountryContex)

  useEffect(() => {
    if (menu === true) {
      changeMenu(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all'
  });

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleLogin = async (data) => {
    console.log(recaptchaInstance)
    setLoading(true)
    const { email, password, capcha } = data

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
      // await delay(700)
      // navigate('/countrycomparer')
    } catch (error) {
      setError(error.message)
    }
    finally {
      setLoading(false)
    }
  }

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const [recaptcha, setRecaptcha] = useState(null)
  const verifyCallback = (token) => {
    setRecaptcha(token)
  }
  // const callback = () => {
  //   recaptchaInstance.reset();
  // }
  return (
    <>
      <Balls></Balls>
      <form className='form-login' onSubmit={handleSubmit(handleLogin)}>
        <h3>Sign In</h3>
        <div className="input-group">
          <label htmlFor="username">Email</label>
          <input
            {...register(
              'email', {
              required: 'Email is required',
              pattern: {
                value: emailPattern,
                message: 'Email pattern be like: example@test.com'
              }
            })}
            className='form-control'
            type="email"
            placeholder='Email'
          />
          <ErrorHelper type={errors?.email}></ErrorHelper>
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: passwordPattern,
                message: 'Minimum six in length'
              }
            })}
            className='form-control'
            type="password"
            placeholder="Password"
            id="password"
          />
          <ErrorHelper type={errors?.password}></ErrorHelper>
        </div>


        <Recaptcha
          className="g-recaptcha mt-1"
          ref={(e) => (recaptchaInstance = e)}
          sitekey={API_RECAPCHA}
          verifyCallback={verifyCallback}
          // onloadCallback={callback}
          size="recaptcha"
        />

        <motion.button
          // initial={{
          //   opacity: 0,
          //   x: -100
          // }}
          // animate={{
          //   opacity: 1,
          //   x: 0
          // }}
          whileHover={isValid && {
            scale: 1.05
          }}
          className='login-button mt-2'
          type='submit'
          disabled={!isValid || recaptcha === null || loading === true}
        // onClick={event => handleSignup(event, email, password)}
        >
          Sign In
        </motion.button>
        <p className='mt-2'>Don't have an account? <Link to='/signup'>Sign up</Link></p>


        {error && <p className='country-invalid mt-1'>{error}</p>}
        {success && <p className='country-valid mt-1'>{success}</p>}
      </form>
    </>
  )
}
