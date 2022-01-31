import React, { useContext, useEffect } from 'react'
import { Col, Button, Container } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
// import classes from './Home.module.css'
import Loader from '../components/Loader/Loader';
import noImage from '../images/noImage.png'
import { Video } from '../components/Video/Video'
import { useNavigate } from "react-router-dom"
import { CAPITAL, CountryContex, PROVINCE } from './../contex/contex';
import axios from 'axios';
import CountryButton from '../components/CountryButton/CountryButton';
import { countriesFlags } from './../countriesFlags';
import medalGold from '../images/medalGold.png'
import medalSilver from '../images/medalSilver.png'
import medalBronze from '../images/medalBronze.png'
export function CountryComparer(props) {
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
    setEstimates,
    estimates,
    menu,
    changeMenu
  } = useContext(CountryContex)
  const navigate = useNavigate()
  useEffect(() => {
    if (menu === true) {
      changeMenu(!menu)
    }

    async function fetchData() {
      const response = await axios.get('https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/countries.json')
      const response2 = await axios.get('https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/estimates.json')
      const { data } = response
      const { data: data2 } = response2
      setCountries(data)
      const entries = Object.entries(data2)
      setEstimates(quickSort(entries).reverse())
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
  return (
    <React.Fragment>
      <Video windowWidth={props.windowWidth}></Video>
      {
        loading
          ? <Loader></Loader>
          : (
            <Container>
              <div className={'formWrapper'}>
                <div style={{ marginTop: '55px', padding: '5px' }}>
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
              </div>
              <div className="Winner-wrapper">
                <h3>Leaderboard:</h3>
                <ul style={{ listStyle: 'none' }}>
                  {estimates.map((item, index) => {
                    let medal = null
                    if (index === 0) {
                      medal = medalGold
                    }
                    if (index === 1) {
                      medal = medalSilver
                    }
                    if (index === 2) {
                      medal = medalBronze
                    }
                    return (
                      <li key={index + item[0] + item[1]} style={{ position: 'relative' }}>

                        <span>{item[0]} :</span><span style={{ float: 'right' }}>{item[1]}</span>
                        {
                          medal
                            ? <img style={{ position: 'absolute', left: '-20px', top: '5px' }} src={medal} alt="" width={16} />
                            : null
                        }
                      </li>
                    )
                  })}
                  {/* <li>1. Belgium</li>
                  <li>2. USA</li>
                  <li>3. UK</li>
                  <li>4. France</li>
                  <li>5. Germany</li>
                  <li>6. Russia</li> */}
                </ul>
              </div>
            </Container>
          )
      }


    </React.Fragment>
  )
}
function quickSort(arr) {
  if (arr.length < 1) {
    return arr
  }
  let pivot = arr[Math.floor(arr.length / 2)][1]
  let less = []
  let equal = []
  let greater = []
  let common = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] < pivot) {
      less.push(arr[i])
    }
    if (arr[i][1] === pivot) {
      equal.push(arr[i])
    }
    if (arr[i][1] > pivot) {
      greater.push(arr[i])
    }
  }
  return common.concat(quickSort(less), equal, quickSort(greater))
}
