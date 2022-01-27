import React, { useContext, useEffect } from 'react'
import { Col, Button } from 'react-bootstrap';
import { countriesFlags } from '../../countriesFlags';
import { CSSTransition } from 'react-transition-group';
// import classes from './Home.module.css'
import Loader from '../../components/Loader/Loader'
import CountryButton from '../../components/CountryButton/CountryButton';
import noImage from '../../images/noImage.png'
import { Video } from '../../components/Video/Video'
import { useNavigate } from "react-router-dom"
import { CAPITAL, CountryContex, PROVINCE } from './../../contex/contex';
import axios from 'axios';

export default function Home(props) {
  const {
    setCountries,
    countries,
    loading,
    stopLoading,
    setOneCountry,
    setTwoCountry,
    oneCountry,
    twoCountry,
    resetCountries,
    radioType,
    changeRadioType,
    addElToDom,
  } = useContext(CountryContex)
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/countries.json')
      const { data } = response
      setCountries(data)
      stopLoading()
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const countryBtnHandler = (event) => {
    event.preventDefault()
    const country = event.target.dataset.country
    if (!oneCountry || !twoCountry) {
      if (!oneCountry) {
        addElToDom(event.target)
        setOneCountry(country)
      } else if (!twoCountry && country !== oneCountry) {
        addElToDom(event.target)
        setTwoCountry(country)
      }
    }
  }
  const resetBtnHandler = () => {
    // oneCountry.el.classList.remove('active')
    // twoCountry.el.classList.remove('active')
    resetCountries()
  }
  const beforeCompare = (event) => {
    event.preventDefault()
    if (!(oneCountry, twoCountry)) {
      alert('Choose countries!')
    } else {
      localStorage.setItem('countryOne', oneCountry)
      localStorage.setItem('countryTwo', twoCountry)
      navigate('/compare')
    }
  }
  console.log(oneCountry)
  console.log(twoCountry)
  return (
    <React.Fragment>
      <Video windowWidth={props.windowWidth}></Video>
      <div className={'formWrapper'}>
        {loading
          ? <Loader></Loader>
          : <div style={{ marginTop: '55px', padding: '5px' }}>
            <form className={'formCountries'}>
              {countries.map((country, index) => {
                return <Col
                  key={index}
                  xs='4'
                  className='text-center my-3'
                >
                  <CountryButton
                    oneCountry={oneCountry}
                    twoCountry={twoCountry}
                    country={country}
                    onClick={countryBtnHandler}
                    urlFlag={
                      countriesFlags[country.toLowerCase()]
                        ? countriesFlags[country.toLowerCase()]
                        : noImage
                    }
                  >
                  </CountryButton>
                </Col>
              })}
            </form>
            <div className="text-center">
              <Button
                className='btn btn-sm btn-warning text-white mt-5'
                onClick={e => {
                  resetBtnHandler()
                }}
              >
                Reset
              </Button>
            </div>
            <form>
              <CSSTransition
                timeout={500}
                classNames='os'
              >
                {state => (
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        checked={radioType === CAPITAL}
                        onChange={() => changeRadioType(CAPITAL)}
                      />
                      <label className="form-check-label float-left" htmlFor="flexRadioDefault1">
                        Capital
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked={radioType === PROVINCE}
                        onChange={() => changeRadioType(PROVINCE)}
                      />
                      <label className="form-check-label float-left" htmlFor="flexRadioDefault2">
                        Province
                      </label>
                    </div>
                  </div>
                )}
              </CSSTransition>
            </form>
            <div className="text-center">
              <Button
                className='btn btn-dark btn-lg'
                disabled={!(oneCountry && twoCountry)}
                onClick={e => beforeCompare(e)}
              >
                Start
              </Button>
            </div>
          </div>
        }
      </div>
    </React.Fragment>
  )
}
