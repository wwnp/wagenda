import React, { useState } from 'react'
import { Form } from '../../components/Form'
import {
  createUserWithEmailAndPassword, sendSignInLinkToEmail, signInWithEmailAndPassword, updateProfile,
} from "firebase/auth";
import { useContext } from 'react';
import { CountryContex } from '../../contex/contex';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import Cookies from 'js-cookie'
import { actionCodeSettings, auth } from '../../firebase';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { emailPattern, passwordPattern } from '../../config';
import { API_RECAPCHA } from './../../config';
import Recaptcha from "react-recaptcha";

let recaptchaInstance;

export const SignupPage = ({ user, }) => {
  const navigate = useNavigate()
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
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name, photoURL: "https://www.pngitem.com/pimgs/m/661-6619328_default-avatar-png-blank-person-transparent-png.png"
      })
      await sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          window.localStorage.setItem('emailForSignIn', email);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
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
  const onSubmit = (data) => {
    console.log(data);
  };
  const callback = () => {
    recaptchaInstance.reset();
  }


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
      <form className='form-login' onSubmit={handleSubmit(onSubmit)}>
        <h3>Sign Up</h3>
        <label className='login-label' htmlFor="username">Username</label>
        <input

          {...register('email', { required: true, pattern: emailPattern })}
          className='login-input'
          id="username"
          type="email"
          placeholder='Email'
        />
        {errors.email?.type === 'required' && <p className='country-invalid'>Email is required</p>}
        {errors.email?.type === 'pattern' && <p className='country-invalid'>Email pattern be like: example@test.com</p>}

        <label className='login-label' htmlFor="password">Password</label>
        <input
          {...register('password', { required: true, pattern: passwordPattern })}
          className='login-input'
          type="password"
          placeholder="Password"
          id="password"
        />
        {errors.password?.type === 'required' && <p className='country-invalid'>Password is required</p>}
        {errors.password?.type === 'pattern' && <p className='country-invalid'>Minimum six in length</p>}

        <label className='login-label' htmlFor="name">Name</label>
        <input
          {...register('name', { required: true, min: 2 })}
          className='login-input'
          type="text"
          placeholder="Name"
          id="name"
        />


        {errors.name?.type === 'required' && <p className='country-invalid'>Name is required</p>}
        {errors.name?.type === 'min' && <p className='country-invalid'>Minimum two letters</p>}

        <Recaptcha
          className="g-recaptcha mt-1"
          ref={(e) => (recaptchaInstance = e)}
          sitekey={API_RECAPCHA}
          verifyCallback={verifyCallback}
          // onloadCallback={callback}
          size="recaptcha"
        // size="invisible"
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
        {error && <p className='country-invalid'>{error}</p>}
        {success && <p className='country-valid'>{success}</p>}
      </form>
    </>
  )
}
