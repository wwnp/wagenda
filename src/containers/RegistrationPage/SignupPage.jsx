import React, { useState } from 'react'
import {
  createUserWithEmailAndPassword, sendSignInLinkToEmail, signInWithEmailAndPassword, updateProfile, sendEmailVerification
} from "firebase/auth";
import { useContext } from 'react';
import { CountryContex } from '../../contex/contex';
import { useEffect } from 'react';
import { actionCodeSettings, auth } from '../../firebase';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { emailPattern, passwordPattern } from '../../config';
import { API_RECAPCHA } from './../../config';
import Recaptcha from "react-recaptcha";
import { Link } from 'react-router-dom';
import { Balls } from '../../components/Balls';
import { ErrorHelper } from '../../components/ErrorHelper';

let recaptchaInstance;

export const SignupPage = ({ user, }) => {
  const {
    changeMenu,
    menu,
  } = useContext(CountryContex)

  useEffect(() => {
    if (menu === true) {
      changeMenu(false)
    }
  }, [])

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSignup = async (data) => {
    setError(null)
    setSuccess(null)
    const { email, password, name } = data
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name, photoURL: "https://www.pngitem.com/pimgs/m/661-6619328_default-avatar-png-blank-person-transparent-png.png"
      })

      await sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          window.localStorage.setItem('emailForSignIn', email);
        })

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      await sendEmailVerification(auth.currentUser)
        .then(() => {
          console.log('Email verification sent!')
        })

      setSuccess('Successfully registered')
    } catch (error) {
      setError(error.message)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all'
  });

  const [recaptcha, setRecaptcha] = useState(null)
  const verifyCallback = (token) => {
    setRecaptcha(token)
  }

  return (
    <>
      <Balls></Balls>
      <form className='form-login' onSubmit={handleSubmit(handleSignup)}>
        <h3>Sign Up</h3>
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
            {...register('password',
              {
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


        <label htmlFor="name">Name</label>
        <input
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 2,
              message: 'Minimum two letters'
            }
          })}
          className='form-control'
          type="text"
          placeholder="Name"
          id="name"
        />

        <ErrorHelper type={errors?.name}></ErrorHelper>

        <Recaptcha
          className="g-recaptcha mt-1"
          ref={(e) => (recaptchaInstance = e)}
          sitekey={API_RECAPCHA}
          verifyCallback={verifyCallback}
          // onloadCallback={callback}
          size="recaptcha"
        />

        <motion.button
          whileHover={isValid && {
            scale: 1.05
          }}
          className='login-button'
          type='submit'
          disabled={!isValid || recaptcha === null}
        // onClick={event => handleSignup(event, email, password)}
        >
          Sign Up
        </motion.button>

        <p className='mt-2'>Already have an account? <Link to='/login'>Sign up</Link></p>

        {error && <p className='country-invalid'>{error}</p>}
        {success && <p className='country-valid'>{success}</p>}
      </form>
    </>
  )
}
