import React from 'react'
import { Form } from '../components/Form'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from 'react';
import { CountryContex } from '../contex/contex';
import { useNavigate } from 'react-router';
import useCookie, { getItem, setItem } from '../hooks/useCookie';
import { useEffect } from 'react';

export const LoginPage = () => {
  const navigate = useNavigate()

  const {
    user,
    setUser
  } = useContext(CountryContex)

  const [cookie] = useCookie("username", "BrandonBaars");

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
        setItem('userToken', user.accessToken, 1)
        navigate(`/add`);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }

  useEffect(() => {
    const token = getItem('userToken')
    if (token) {
      navigate('/profile')
    }
  }, [])

  return (
    <>
      <div className='text-center'>LoginPage</div>
      <Form title={'Log In'} handleClick={handleLogin}></Form>
    </>
  )
}
