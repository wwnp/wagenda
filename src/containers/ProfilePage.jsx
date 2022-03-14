import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';

export const ProfilePage = () => {
  const logout = async () => {
    await signOut(auth);
  }
  return (
    <div>
      <h1>ProfilePage</h1>
      <span
        className='side-a'
        onClick={logout}
      >
        <button style={{ marginLeft: '1rem' }}>
          logout
        </button>
      </span>
    </div>
  )
}
