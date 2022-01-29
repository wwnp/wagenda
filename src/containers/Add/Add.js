import React, { useContext } from 'react'
import classes from './Add.module.css'
import Loader from '../../components/Loader/Loader'
import { CountryContex } from '../../contex/contex'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const CAPITAL = 'Capital'
const PROVINCE = 'Province'
const Add = props => {
  const [urbanType, setUrbanType] = useState(null)
  const [location, setLocation] = useState('')
  const [error, setError] = useState({})
  const [items, setItems] = useState([])
  const [country, setCountry] = useState('')

  const {
    setCountries,
    countries,
    loading,
    stopLoading
  } = useContext(CountryContex);

  useEffect(() => {
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
    <div className={classes.Add}>
      <h1 className='text-center'>Add</h1>
      <React.Fragment>
        {loading
          ? <Loader></Loader>
          :
          <form>
            <div className='form-group mb-3'>
              <label htmlFor="">Countries</label>
              <select
                className='form-select'
                name="countries"
                id="countries"
                onChange={e => {
                  // setCountry(e.target.value)
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
            <div className="form-check">
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
            <div className="form-check mb-3">
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
            <div className='form-group'>
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
            <div className="form-group mt-3 pb-3 border-bottom">
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
            <div className="form-group mt-3 text-center">
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
                  return <p className={classes.not} key={index}>{errorItem}</p>
                })
                : null
            }
          </form>
        }

      </React.Fragment>

    </div>
  )
}
export default Add