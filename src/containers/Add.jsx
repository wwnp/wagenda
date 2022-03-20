import React, { useContext } from 'react'
import Loader from '../components/Loader'
import { CountryContex } from '../contex/contex'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';


const CAPITAL = 'Capital'
const PROVINCE = 'Province'
const Add = props => {
  const navigate = useNavigate()
  const [urbanType, setUrbanType] = useState(null)
  const [location, setLocation] = useState('')
  const [error, setError] = useState({})
  const [items, setItems] = useState([])
  const [country, setCountry] = useState('')
  const { changeMenu, menu } = useContext(CountryContex);

  const {
    setCountries,
    countries,
    loading,
    stopLoading,
    theme
  } = useContext(CountryContex);

  // useEffect(() => {
  //   document.body.setAttribute('data-theme', Cookies.get('theme') || 'dark')
  // }, [theme])

  useEffect(() => {
    if (menu === true) {
      changeMenu(false)
    }
    async function fetchData() {
      const response = await axios.get('https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/countries.json')
      const { data } = response
      setCountries(data)
      setCountry(response.data[0])
      stopLoading()
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const addHook = () => {
    const errorLog = {}
    setError({})
    items.forEach(item => {
      if (item.location === location) {
        errorLog['locError'] = 'Same locations in items'
      }
    })
    if (!urbanType) {
      errorLog['radioError'] = 'Select urban type'
    }
    if (location.trim().length === 0) {
      errorLog['locationError'] = 'Type location'
    }


    if (Object.keys(errorLog).length === 0) {
      const loc = location.split(',')
      const itemsNew = [...items, {
        country,
        urbanType,
        location: {
          lat: parseFloat(loc[0]),
          lng: parseFloat(loc[1])
        }
      }]
      setItems(itemsNew)
      setLocation('')
    } else {
      setError(errorLog)
    }

  }

  const finishLocations = () => {
    items.forEach(item => {
      async function helpFetch() {
        const url = (`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${item.country}/${item.urbanType}.json`)
        await axios.post(url, JSON.stringify(item.location))
        setItems([])
        setLocation('')
      }
      helpFetch()
    })
  }

  return (
    <main className='container'>
      <h1 className='text-center'>Add</h1>
      <>
        {loading
          ? <Loader></Loader>
          : <>
            <form className='form-add'>
              <div className='input-group mb-1'>
                <label htmlFor="">Countries</label>
                <select
                  className='custom-select'
                  name="countries"
                  id="countries"
                  onChange={e => {
                    setCountry(e.target.value)
                  }}
                >
                  {loading
                    ? null
                    : countries.map((country, index) => {
                      return (
                        <option
                          value={country}
                          key={index}
                        >
                          {country}
                        </option>
                      )
                    })
                  }
                </select>
              </div>

              <div className="form-check mb-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="capOrPro"
                  value={CAPITAL}
                  id="capitalId"
                  onChange={e => setUrbanType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="capitalId">
                  Capital
                </label>
              </div>

              <div className="form-check mb-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="capOrPro"
                  value={PROVINCE}
                  id="provinceId"
                  onChange={e => setUrbanType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="provinceId">
                  Province
                </label>
              </div>

              <div className='input-group mb-1'>
                <label htmlFor="locId">Locations</label>
                <input
                  className="form-control"
                  type="text"
                  name='loc'
                  value={location}
                  id='locId'
                  onChange={(e) => {
                    setLocation(e.target.value)
                  }}
                />
              </div>

              <div className="input-group border-bottom mb-1">
                <button
                  className="btn btn-warning mr-4"
                  onClick={(e) => {
                    e.preventDefault()
                    addHook()
                  }}
                >
                  Add
                </button>
                <button
                  className="btn btn-warning"
                  onClick={(e) => setItems([])}
                >
                  Reset
                </button>
              </div>

              <hr />

              <div className="input-group text-center mb-1">
                <button
                  className="btn btn-success"
                  onClick={e => {
                    e.preventDefault()
                    finishLocations()
                  }}
                  disabled={items.length === 0}
                >
                  Submit
                </button>
              </div>

              <hr />
              {
                Object.values(error).length !== 0
                  ? Object.values(error).map((errorItem, index) => {
                    return <p className={'not'} key={index}>{errorItem}</p>
                  })
                  : null
              }
            </form>
            <div className='centered-block'>
              {items && items.map(item => {
                const lat = item.location.lat
                const lng = item.location.lng
                return <div key={lat+lng}>
                  <h5>{item.country}</h5>
                  <p>{lat}:{lng}</p>
                </div>
              })}
            </div>
          </>
        }
      </>

    </main>
  )
}
export default Add