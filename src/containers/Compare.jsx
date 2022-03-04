import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { countriesFlags } from '../config';
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
// const API_KEY = 'AIzaSyA8zlguZvshGclLLgePtXJrO7z3LDq8xl8'
const LIMIT = 3
const AMOUNT_TIMER = 300
export class Compare extends Component {
  state = {
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
  }
  isFinished() {
    return this.state.activeQuestion + 1 === 5 + 3
  }
  mapContainerStyle = {
    display: 'inline-block',
    width: '50%',
    background: 'rgb(255, 255, 255)',
    height: '600px',
    border: '1px solid rgb(0, 0, 0)',
    overflow: 'hidden',
  }
  incFirst = () => {
    this.setState({
      currTest: this.state.currTest + 1,
      counterFirst: this.state.counterFirst + 1,
      toggle1: !this.state.toggle1,
      time: AMOUNT_TIMER
    })
  }
  incSecond = () => {
    this.setState({
      currTest: this.state.currTest + 1,
      counterSecond: this.state.counterSecond + 1,
      toggle2: !this.state.toggle2,
      time: AMOUNT_TIMER
    })
  }
  drawHandle = () => {
    this.setState({
      currTest: this.state.currTest + 1,
      toggleDraw: !this.state.toggleDraw,
      time: AMOUNT_TIMER
    })
  }
  async componentDidMount() {
    try {
      document.body.setAttribute('data-theme', 'dark')
      // await delay(2000)
      const countryOne = localStorage.getItem('countryOne')
      const countryTwo = localStorage.getItem('countryTwo')
      const response = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryOne}/Capital.json`)
      const response2 = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryTwo}/Capital.json`)
      const temp1 = Object.values(response.data)
      const temp2 = Object.values(response2.data)
      const filteredOne = filterLocations(temp1)
      const filteredTwo = filterLocations(temp2)
      // await delay(200000000000000)
      this.setState({
        locOne: temp1,
        filteredOne,
        filteredTwo,
        locTwo: temp2,
        loading: false,
        countryOne,
        countryTwo
      })
      this.interval = setInterval(() => {
        if (this.state.currTest === this.state.filteredOne.length) {
          clearInterval(this.interval)
        }
        if (this.state.time === 1) {
          this.drawHandle()
          this.setState({
            time: AMOUNT_TIMER
          })
        } else {
          this.setState({
            time: this.state.time - 1
          })
        }

      }, 1000);
    } catch (error) {
      console.log(error)
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval)
    this.interval = null
    document.body.removeAttribute('data-theme')
  }
  render() {
    if (this.props.isMobile) {
      return <h1>Unavailable on mobile devices</h1>
    }
    const { changeModal, modal } = this.props
    return (
      <div className='Compare-wrapper hero-particles'>
        {
          this.state.loading
            ? <Preloader color='linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 54%, rgba(255,0,0,1) 100%)'></Preloader>
            :
            this.state.currTest === this.state.filteredOne.length
              ? <Finish
                countryOne={this.state.countryOne}
                countryTwo={this.state.countryTwo}
                counterFirst={this.state.counterFirst}
                counterSecond={this.state.counterSecond}
              >
              </Finish>
              :
              <div className='Compare hero-particles'>
                <div style={{ borderBottom: '2px solid #ccc' }}>
                  <Map1 ArrOne={this.state.filteredOne} ArrTwo={this.state.filteredTwo} currTest={this.state.currTest}></Map1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '10px' }}>
                  <div className='d-flex align-center'>
                    <motion.button
                      whileHover={{
                        scale: 1.2
                      }}
                      className={'modalButton'}
                      onClick={this.incFirst}
                      style={this.state.countryOne
                        ? {
                          backgroundImage: 'url(' + countriesFlags[this.state.countryOne.toLowerCase()] + ')'
                        }
                        : null
                      }
                    >
                    </motion.button>
                    <span style={{ color: 'white', fontSize: '2.2rem', marginLeft: '1rem', fontWeight: 'bold' }}>
                      {this.state.counterFirst}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{
                      scale: 1.2
                    }}
                    className={'modalButton'}
                    variant="light"
                    onClick={this.drawHandle}
                    style={
                      {
                        backgroundImage: 'url(' + draw + ')',
                      }
                    }
                  >
                  </motion.button>
                  <div className='d-flex align-center'>
                    <span style={{ color: 'white', fontSize: '2.2rem', marginRight: '1rem', fontWeight: 'bold' }}>
                      {this.state.counterSecond}
                    </span>
                    <motion.button
                      whileHover={{
                        scale: 1.2
                      }}
                      className={'modalButton'}
                      onClick={this.incSecond}
                      style={this.state.countryTwo
                        ? {
                          backgroundImage: 'url(' + countriesFlags[this.state.countryTwo.toLowerCase()] + ')'
                        }
                        : null
                      }
                    >
                    </motion.button>
                  </div>
                </div>
                <div className='d-flex justify-center' style={{ marginTop: '10px', color: 'white' }}>
                  <h2>{
                    this.state.time > 60
                      ? Math.floor(this.state.time / 60) + ':' + (
                        (this.state.time % 60).toLocaleString().length === 1
                          ? '0' + this.state.time % 60
                          : this.state.time % 60
                      )
                      : this.state.time
                  }
                  </h2>
                  {/* this.state.time % 60).length === 1
                        ? '0' + this.state.time % 60
                        : this.state.time % 60 */}
                </div>
                <div className='d-flex justify-center' style={{ marginTop: '10px', color: 'white' }}>
                  <h5>
                    {this.state.currTest} of {LIMIT}
                  </h5>
                </div>
                <div className='d-flex justify-center' style={{ marginTop: 'auto' }}>
                  <button className="btn btn-warning" onClick={() => {
                    this.props.changeMenu(!this.props.menu)
                    this.props.navigate(-1)
                  }}>Back</button>
                </div>
              </div>
        }
        <Drawer
          menu={this.props.menu}
          onToggleHandler={this.props.onToggleHandler}
          changeMenu={this.props.changeMenu}
        >
        </Drawer>
        <MenuToggle onToggleHandler={this.props.onToggleHandler} menu={this.props.menu}></MenuToggle>
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
        <Button
          className='btn btn-success btn-sm'
          onClick={() => changeModal(!modal)}
          style={{
            position: 'fixed',
            bottom: '12px',
            left: '4rem',
          }}
        >
          Hints: how to compare
        </Button>
      </div>
    )
  }
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
