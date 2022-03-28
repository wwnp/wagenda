import { signOut, updateProfile } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { auth } from '../firebase';
import { CountryContex } from './../contex/contex';

export const ProfilePage = () => {
  const { user } = useContext(CountryContex)
  // const [avatarUrl, setAvatarUrl] = useState(user?.photoURL || '')
  const [error, setError] = useState(null)
  const {
    changeMenu,
    menu,
  } = useContext(CountryContex)

  const updateProfileMy = async (data) => {
    setError(null)
    const { displayName, photoURL } = data
    // if (!avatarUrl) {
    //   setError('Error photo')
    //   return
    // }
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
    <div className='container'>
      <div className="profile__block mt-3">
        <div className="row">

          <div className="col-12 col-md-4 d-flex justify-center border-right">
            {!!user && <img className='img-fit' src={user?.photoURL} alt='profile_pic' />}
          </div>

          <div className="col-6 col-md-8">
            {!!user && <h3 className='display-3 text-center'>{user?.displayName}</h3>}
            <hr className='mt-1 mb-1' />
            <h5 className='display-5 mt-1 mb-1'>Edit info:</h5>
            <form onSubmit={handleSubmit(updateProfileMy)}>
              <div className="input-group">
                <label htmlFor="username">Name</label>
                <input
                  className='form-control'
                  type="text"
                  {...register('displayName', {
                    required: "Not empty",
                    minLength: {
                      value: 5,
                      message: "5 chars need"
                    }
                  })}
                />
                {
                  errors?.displayName
                    ? (
                      <small id="emailHelp" className="form-text invalid">
                        {errors?.displayName.message}
                      </small>
                    )
                    : (
                      <small id="emailHelp" className="form-text system-text">
                        [system_text]
                      </small>
                    )
                }
              </div>
              <div className="input-group">
                <label htmlFor="username">Photo Url</label>
                <input
                  className='form-control'
                  type="url"
                  {...register('photoURL', {
                    required: "Not empty",
                    minLength: {
                      value: 10,
                      message: "10 chars need"
                    },
                    pattern: {
                      value: /https?:\/\//,
                      message: "Url link"
                    }
                  })}
                />
                {
                  errors?.photoURL
                    ? (
                      <small id="emailHelp" className="form-text invalid invalid">
                        {errors?.photoURL.message}
                      </small>
                    )
                    : (
                      <small id="emailHelp" className="form-text system-text">
                        [system_text]asdsadsad
                      </small>
                    )
                }
              </div>
              <button
                disabled={!isValid}
                className='btn btn-success mt-1'
                type='submit'>
                Update Profile
              </button>
            </form>

            {error && <p className="invalid form-text text-muted">{error}</p>}

            <button className='btn btn-danger' style={{ marginLeft: '1rem', float: 'right' }} onClick={logout}>
              logout
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}