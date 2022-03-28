import React, { useState } from 'react'
import { Form } from '../../components/Form'
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useContext } from 'react';
import { CountryContex } from '../../contex/contex';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import Cookies from 'js-cookie'
import { auth } from '../../firebase';
import { motion, AnimatePresence } from 'framer-motion';
import Recaptcha from "react-recaptcha";
import { useForm } from 'react-hook-form';
import { API_RECAPCHA, emailPattern, passwordPattern } from '../../config';
import { Link } from 'react-router-dom';
import { delay } from '../../auxillary';

let recaptchaInstance;

export const LoginPage = () => {
  const { user } = useContext(CountryContex)

  const [loading, setLoading] = useState(false)
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
  const callback = () => {
    recaptchaInstance.reset();
  }
  return (
    <>
      <div className="background">
        <motion.div
          initial={{
            rotate: 0,
            x: 30,
            y: 0
          }}
          animate={{
            rotate: 360,
            x: 200,
            y: 300
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
            x: 200,
            y: 300
          }}
          animate={{
            rotate: 360,
            x: 30,
            y: 0
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
      <form className='form-login' onSubmit={handleSubmit(handleLogin)}>
        <h3>Sign In</h3>
        <label className='login-label' htmlFor="username">Email</label>
        <input
          {...register(
            'email', {
            required: true,
            pattern: {
              value: emailPattern,
              message: 'sex'
            }
          })}
          className='login-input'
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

        <Recaptcha
          className="g-recaptcha mt-1"
          ref={(e) => (recaptchaInstance = e)}
          sitekey={API_RECAPCHA}
          verifyCallback={verifyCallback}
          // onloadCallback={callback}
          size="recaptcha"
        />

        {/* <AnimatePresence> */}
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
        {/* </AnimatePresence> */}
        <p className='mt-2'>Don't have an account? <Link to='/signup'>Sign up</Link></p>


        {error && <p className='country-invalid mt-1'>{error}</p>}
        {success && <p className='country-valid mt-1'>{success}</p>}
      </form>
      {/* <Form title={'Log In'} handleClick={handleLogin} error={error} success={success}></Form> */}
    </>
  )
}
