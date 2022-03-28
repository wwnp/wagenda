import { signOut, updateProfile } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { register } from 'react-scroll/modules/mixins/scroller';
import { auth } from '../firebase';
import { CountryContex } from './../contex/contex';

export const ProfilePage = () => {
  const { user } = useContext(CountryContex)
  const [avatarUrl, setAvatarUrl] = useState(user?.photoURL || '')
  const [error, setError] = useState(null)
  const {
    changeMenu,
    menu,
  } = useContext(CountryContex)


  const updateProfileMy = async (data) => {
    setError(null)
    const { displayName, photoURL } = data
    if (!avatarUrl) {
      setError('Error photo')
      return
    }
    await updateProfile(auth.currentUser, {
      displayName, photoURL
    }).catch((err) => {
      setError(err.message)
    })

  }
  const logout = async () => {

    await signOut(auth);
  }
  useEffect(() => {
    if (menu === true) {
      changeMenu(!menu)
    }
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all'
  });

  return (
    <div>
      <h1>ProfilePage</h1>
      {!!user && <p>{user?.displayName}</p>}
      {!!user && <img src={user?.photoURL} width={200} height='auto' alt='profile_pic' />}
      <br />
      <form onSubmit={handleSubmit(updateProfileMy)}>
        <input type="text" {...register('displayName', { required: true })} />
        <input type="url"  {...register('photoURL', { required: true })} />
        {/* <input type="text" defaultValue={user.displayName} {...register('displayName', { required: true })} />
        <input type="url" defaultValue={user.photoURL} {...register('photoURL', { required: true })} /> */}

        <button
          disabled={!isValid}
          className='btn btn-success'
          style={{ marginLeft: '1rem' }}
          type='submit'>
          Update Profile
        </button>
      </form>

      { error && <p className="invalid">{error}</p> }

      <button className='btn btn-danger' style={{ marginLeft: '1rem' }} onClick={logout}>
        logout
      </button>
    </div>
  )
}
