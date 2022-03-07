import React, { useContext, useEffect } from 'react'
import { Col, Button, Container } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import Loader from '../components/Loader';
import noImage from '../assets/images/noImage.png'
import { Video } from '../components/Video'
import { useNavigate } from "react-router-dom"
import { CAPITAL, CountryContex, PROVINCE } from './../contex/contex';
import axios from 'axios';
import { MCountryButton } from '../components/CountryButton';
import { countriesFlags } from '../config';
import medalGold from '../assets/images/medalGold.png'
import medalSilver from '../assets/images/medalSilver.png'
import medalBronze from '../assets/images/medalBronze.png'
import { delay } from '../auxillary';
import { Modal } from '../components/Modal';
import { Preloader } from '../components/Preloader';
import { AnimatePresence, motion } from 'framer-motion'

const cbAnimation = {
  hidden: {
    x: '-100vw',
    opacity: 0
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: .3,
      delay: custom * .15
    }
  }),
}

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
    changeMenu,
    modal,
    changeModal
  } = useContext(CountryContex)

  const {
    theme,
  } = useContext(CountryContex)
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])


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
    document.addEventListener('keydown', turnOffKey)
    window.addEventListener('wheel', turnOffWheel, { passive: false })
    function turnOffKey(event) {
      if (event.ctrlKey === true && (event.key === '+' || event.key === '-')) {
        event.preventDefault()
      }
    }
    function turnOffWheel(event) {
      if (event.ctrlKey === true) {
        event.preventDefault()
      }
    }
    return () => {
      document.removeEventListener('keydown', turnOffKey)
      window.removeEventListener('wheel', turnOffWheel)
    }
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
    <>
      <Video windowWidth={props.windowWidth}></Video>
      {
        loading
          ? <Preloader color='linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 54%, rgba(255,0,0,1) 100%)'></Preloader>
          : (
            <div className='container'>
              <div className={'formWrapper'}>
                <div style={{ marginTop: '55px', padding: '5px' }}>
                  <motion.form
                    className={'formCountries'}
                    initial='hidden'
                    animate='visible'
                  >
                    {countries.map((country, index) => {
                      return <motion.div

                        key={index}
                        className='text-center my-1 col-countrybutton'
                      >
                        <MCountryButton
                          variants={cbAnimation}
                          custom={index}
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
                        </MCountryButton>
                      </motion.div>
                    })}
                  </motion.form>
                  <div className="text-center mt-2">
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
                      className='btn btn-purple btn-sm'
                      onClick={() => changeModal(!modal)}
                    >
                      Hints: how to compare
                    </Button>
                  </div>
                  <div className="text-center mt-2">
                    <Button
                      className='btn btn-success btn-lg'
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
                </ul>
              </div>
            </div >
          )
      }
      <AnimatePresence>
        {
          modal && (
            <Modal>
              <h1>Pay attention to</h1>
              <ol>
                <li>Roads state</li>
                <li>Graphities. Don't downgrade if allowed.</li>
                <li>Garbage on the street</li>
                <li>Building modernity</li>
                <li>Monetary condition of surrounding things</li>
              </ol>
            </Modal>
          )
        }
      </AnimatePresence>

    </ >
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
