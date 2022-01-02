import React from 'react'
import classes from './Add.module.css'
import { GetCountries } from './AddLogic'
import { HandleRadio } from './AddLogic'
import { HandleLocation } from './AddLogic'
import { AddHook } from './AddLogic'
import { AddError } from './AddLogic'
import { HandleItems } from './AddLogic'
import { finishLocations } from './AddLogic'
import Loader from '../../components/Loader/Loader'
const CAPITAL = 'Capital'
const PROVINCE = 'Province'
const Add = props => {
  const { countries, loading, country, setCountry } = GetCountries()
  const { urbanType, setUrbanType } = HandleRadio()
  const { location, setLocation } = HandleLocation()
  const { error, setError } = AddError()
  const { items, setItems } = HandleItems()
  return (
    <div className={classes.Add}>
      <h1 className='text-center'>Add</h1>
      <form>
        {loading
          ? <Loader></Loader>
          :
          <React.Fragment>
            <div className='form-group mb-3'>
              <label htmlFor="">Countries</label>
              <select
                className='form-select'
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
                  AddHook(country, urbanType, location, setError, setItems, items,setLocation)
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
                  finishLocations(items,setItems,setLocation)
                }}
                disabled={items.length === 0}
              >
                Submit
              </button>
            </div>

          </React.Fragment>
        }
        {
          Object.values(error).length !== 0
            ? Object.values(error).map((errorItem, index) => {
              return <p className={classes.not} key={index}>{errorItem}</p>
            })
            : null
        }
      </form>


    </div>
  )
}
export default Add
// 52.379156, -2.227493