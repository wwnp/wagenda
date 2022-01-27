import React, { useContext, useEffect } from 'react'
import { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { countriesFlags } from '../../countriesFlags';
import { CSSTransition } from 'react-transition-group';
import classes from './Home.module.css'
import Loader from '../../components/Loader/Loader'
import CountryButton from '../../components/CountryButton/CountryButton';
import { HookCountySetter } from './HomeLogic';
import { HookFetchCountries } from './HookFetchCountries';
import { countryButtonHandler } from './HomeLogic';
import { resetCountries } from './HomeLogic';
import noImage from '../../images/noImage.png'
import { Video } from '../../components/Video/Video'
import { beforeCompare } from './HomeLogic';
import { useNavigate } from "react-router-dom"
import { HookLoading } from './HookFetchCountries';
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
    resetElDom,
    countriesDOM
  } = useContext(CountryContex)
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/countries.json')
      const { data } = response
      setCountries(data)
      stopLoading()
      const a = document.getElementById('countryForm').querySelectorAll('[data-take="true"]')
      console.log(a)
    }
    fetchData()

  }, []);
  const countryBtnHandler = (event) => {
    event.preventDefault()
    const country = event.target.dataset.country
    if (!oneCountry || !twoCountry) {
      // event.target.classList.add('active')

      if (!oneCountry) {
        addElToDom(event.target)
        setOneCountry({
          country,
          el: event.target
        })
      } else if (!twoCountry && country !== twoCountry?.country) {
        addElToDom(event.target)
        setTwoCountry({
          country, el: event.target
        })
      }
    }
  }
  const resetBtnHandler = () => {
    oneCountry.el.classList.remove('active')
    twoCountry.el.classList.remove('active')
    resetElDom()
    resetCountries()
  }
  const beforeCompare = (event) => {
    event.preventDefault()
    if (!(oneCountry, twoCountry)) {
      alert('Choose countries!')
    } else {
      localStorage.setItem('countryOne', oneCountry.country)
      localStorage.setItem('countryTwo', twoCountry.country)
      navigate('/compare')
    }
  }
  return (
    <React.Fragment>
      <Video windowWidth={props.windowWidth}></Video>
      <div className={classes.formWrapper}>
        {loading
          ? <Loader></Loader>
          : <div style={{ padding: '15px' }}>
            <form className={classes.formCountries} id='countryForm'>
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
              // onClick={(e) => resetCountries(e, {
              //   countryOne,
              //   countryTwo,
              //   setCountryOne,
              //   setCountryTwo,
              //   setTypeRadio
              // })}
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
