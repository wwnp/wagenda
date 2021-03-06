import React, { Component, useEffect, useRef, useState } from 'react'
import { AMOUNT_TIMER, countriesFlags, LIMIT } from '../config';
import { CSSTransition } from 'react-transition-group';
import Loader from '../components/Loader';
import { delay } from '../auxillary';
import axios from 'axios';
import draw from '../assets/images/draw.png'
import Map1 from '../components/Map';
import { Finish } from '../components/Finish';
import { Drawer } from './../components/Drawer';
import MenuToggle from './../components/MenuToggle';
import { Modal } from './../components/Modal';
import { Preloader } from '../components/Preloader';
import { motion } from 'framer-motion';
import { Unavailable } from '../components/Unavailable';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export function Compare(props) {
  const { changeModal, modal, isMobile } = props

  const [isRunning, setIsRunning] = useState(true);
  const [delay, setDelay] = useState(1000);

  const [state, setState] = useState({
    activeQuestion: 0,
    toggle1: true,
    toggle2: true,
    toggleDraw: true,
    counterFirst: 0,
    counterSecond: 0,
    loading: true,
    countryOne: null,
    countryTwo: null,
    locOne: [],
    locTwo: [],
    filteredOne: [],
    filteredTwo: [],
    start: true,
    currTest: 0,
    time: AMOUNT_TIMER,
  })

  const mapContainerStyle = {
    display: 'inline-block',
    width: '50%',
    background: 'rgb(255, 255, 255)',
    height: '600px',
    border: '1px solid rgb(0, 0, 0)',
    overflow: 'hidden',
  }
  const incFirst = () => {
    setState({
      ...state,
      currTest: state.currTest + 1,
      counterFirst: state.counterFirst + 1,
      toggle1: !state.toggle1,
      time: AMOUNT_TIMER
    })
  }
  const incSecond = () => {
    setState({
      ...state,
      currTest: state.currTest + 1,
      counterSecond: state.counterSecond + 1,
      toggle2: !state.toggle2,
      time: AMOUNT_TIMER
    })
  }
  const drawHandle = () => {
    setState({
      ...state,
      currTest: state.currTest + 1,
      toggleDraw: !state.toggleDraw,
      time: AMOUNT_TIMER
    })
  }

  useInterval(() => {
    if ((state.loading === false) && (state.currTest === state.filteredOne.length)) {
      setIsRunning(false)
    }
    if (state.time === 1) {
      drawHandle()
    } else {
      setState({
        ...state,
        time: state.time - 1
      })
    }
  }, isRunning ? delay : null);

  useEffect(() => {

    async function fetchLocations() {
      const countryOne = localStorage.getItem('countryOne')
      const countryTwo = localStorage.getItem('countryTwo')
      const response = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryOne}/Capital.json`)
      const response2 = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryTwo}/Capital.json`)
      const temp1 = Object.values(response.data)
      const temp2 = Object.values(response2.data)
      const filteredOne = filterLocations(temp1)
      const filteredTwo = filterLocations(temp2)

      setState({
        ...state,
        locOne: temp1,
        filteredOne,
        filteredTwo,
        locTwo: temp2,
        loading: false,
        countryOne,
        countryTwo,
      })
    }
    fetchLocations()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isMobile) {
    return <Unavailable></Unavailable>
  }

  return (
    <div className='Compare-wrapper hero-particles'>
      {
        state.loading
          ? <Loader></Loader>
          :
          state.currTest === state.filteredOne.length
            ? (
              <Finish
                countryOne={state.countryOne}
                countryTwo={state.countryTwo}
                counterFirst={state.counterFirst}
                counterSecond={state.counterSecond}
              >
              </Finish>
            )
            : (
              <div className='Compare hero-particles'>
                <div style={{ borderBottom: '2px solid #ccc' }}>
                  <Map1 ArrOne={state.filteredOne} ArrTwo={state.filteredTwo} currTest={state.currTest}></Map1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '10px' }}>
                  <div className='d-flex align-center'>
                    <motion.button
                      whileHover={{
                        scale: 1.2
                      }}
                      className={'modalButton'}
                      onClick={incFirst}
                      style={state.countryOne
                        ? {
                          backgroundImage: 'url(' + countriesFlags[state.countryOne.toLowerCase()] + ')'
                        }
                        : null
                      }
                    >
                    </motion.button>
                    <span style={{ color: 'white', fontSize: '2.2rem', marginLeft: '1rem', fontWeight: 'bold' }}>
                      {state.counterFirst}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{
                      scale: 1.2
                    }}
                    className={'modalButton'}
                    variant="light"
                    onClick={drawHandle}
                    style={
                      {
                        backgroundImage: 'url(' + draw + ')',
                      }
                    }
                  >
                  </motion.button>
                  <div className='d-flex align-center'>
                    <span style={{ color: 'white', fontSize: '2.2rem', marginRight: '1rem', fontWeight: 'bold' }}>
                      {state.counterSecond}
                    </span>
                    <motion.button
                      whileHover={{
                        scale: 1.2
                      }}
                      className={'modalButton'}
                      onClick={incSecond}
                      style={state.countryTwo
                        ? {
                          backgroundImage: 'url(' + countriesFlags[state.countryTwo.toLowerCase()] + ')'
                        }
                        : null
                      }
                    >
                    </motion.button>
                  </div>
                </div>
                <div className='d-flex justify-center' style={{ marginTop: '10px', color: 'white' }}>
                  <h4>{
                    state.time > 60
                      ? Math.floor(state.time / 60) + ':' + (
                        (state.time % 60).toLocaleString().length === 1
                          ? '0' + state.time % 60
                          : state.time % 60
                      )
                      : state.time
                  }
                  </h4>
                </div>
                <div className='d-flex justify-center' style={{ marginTop: '10px', color: 'white' }}>
                  <h5>
                    {state.currTest} of {LIMIT}
                  </h5>
                </div>
                <div className='d-flex justify-center' style={{ marginTop: 'auto' }}>
                  <button className="btn btn-warning" onClick={() => {
                    props.changeMenu(!props.menu)
                    props.navigate(-1)
                  }}>Back</button>
                </div>
              </div>
            )
      }
      <Drawer
        menu={props.menu}
        onToggleHandler={props.onToggleHandler}
        changeMenu={props.changeMenu}
      >
      </Drawer>
      <MenuToggle onToggleHandler={props.onToggleHandler} menu={props.menu}></MenuToggle>
      {modal
        ? <Modal>
          <h1>Pay attention to</h1>
          <ol>
            <li>Roads state</li>
            <li>Graphities. Don't downgrade if allowed.</li>
            <li>Garbage on the street</li>
            <li>Building modernity</li>
            <li>Monetary condition of surrounding things</li>
          </ol>
        </Modal>
        : null
      }
      <button
        className='btn btn-success btn-sm'
        onClick={() => changeModal(!modal)}
        style={{
          position: 'fixed',
          bottom: '12px',
          left: '4rem',
        }}
      >
        Hints: how to compare
      </button>
    </div>
  )
}

function generateRandNum(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1))
}
function filterLocations(a) {
  const used = []
  while (used.length !== (a.length <= LIMIT ? a.length : LIMIT)) {
    let el = a[generateRandNum(0, a.length - 1)]
    if (used.includes(el)) {
      continue
    } else {
      used.push(el)
    }
  }
  return used
}
