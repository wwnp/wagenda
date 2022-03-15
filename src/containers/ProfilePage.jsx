import { signOut } from 'firebase/auth';
import React, { useContext } from 'react'
import { auth } from '../firebase';
import { CountryContex } from './../contex/contex';

export const ProfilePage = () => {
  const { user } = useContext(CountryContex)
  const logout = async () => {
    await signOut(auth);
  }
  return (
    <div>
      <h1>ProfilePage</h1>
      {!!user && <p>{user.displayName}</p>}
      {!!user && <img src={user.photoURL} width={200} height='auto' alt='profile_pic' />}
      <br />
      <button style={{ marginLeft: '1rem' }} onClick={logout}>
        logout
      </button>
    </div>
  )
}
