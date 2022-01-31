import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { countriesFlags } from '../../countriesFlags';
import { CSSTransition } from 'react-transition-group';
import Loader from '../../components/Loader/Loader';
import { delay } from '../../dox';
import axios from 'axios';
import draw from '../../images/draw.png'

import Map1 from '../../components/map';
import { Finish } from '../../components/Finish.jsx';
import { Drawer } from './../../components/Drawer';
import MenuToggle from './../../components/MenuToggle';
const API_KEY = 'AIzaSyA8zlguZvshGclLLgePtXJrO7z3LDq8xl8'
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
      await delay(2000)
      const countryOne = localStorage.getItem('countryOne')
      const countryTwo = localStorage.getItem('countryTwo')
      const response = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryOne}/Capital.json`)
      const response2 = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryTwo}/Capital.json`)
      const temp1 = Object.values(response.data)
      const temp2 = Object.values(response2.data)
      const filteredOne = filterLocations(temp1)
      const filteredTwo = filterLocations(temp2)
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
  }
  render() {
    if (this.props.isMobile) {
      return <h1>Unavailable on mobile devices</h1>
    }
    // if (this.props.comparedCountries === null) {
    //   this.props.navigate('/')
    //   // return <React.Fragment></React.Fragment>
    // } // __gives an error about somethg: Can't perform a state ... __
    return (
      <div className='Compare-wrapper hero-particles'>
        {
          this.state.loading
            ? <Loader></Loader>
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
                  <div>
                    <CSSTransition
                      in={this.state.toggle1}
                      timeout={500}
                      classNames='os'
                    >
                      <Button
                        className={'modalButton'}
                        onClick={this.incFirst}
                        style={this.state.countryOne
                          ? {
                            backgroundImage: 'url(' + countriesFlags[this.state.countryOne.toLowerCase()] + ')'
                          }
                          : null
                        }
                      >
                      </Button>
                    </CSSTransition>
                    <span style={{ color: 'white', fontSize: '2.2rem', marginLeft: '1rem', fontWeight: 'bold' }}>
                      {this.state.counterFirst}
                    </span>
                  </div>
                  <CSSTransition
                    in={this.state.toggleDraw}
                    timeout={500}
                    classNames='es'
                  >
                    <Button
                      className={'modalButton'}
                      variant="light"
                      onClick={this.drawHandle}
                      style={
                        {
                          backgroundImage: 'url(' + draw + ')',
                        }
                      }
                    >
                    </Button>
                  </CSSTransition>
                  <div>
                    <span style={{ color: 'white', fontSize: '2.2rem', marginRight: '1rem', fontWeight: 'bold' }}>
                      {this.state.counterSecond}
                    </span>
                    <CSSTransition
                      in={this.state.toggle2}
                      timeout={500}
                      classNames='as'
                    >
                      <Button
                        className={'modalButton'}
                        onClick={this.incSecond}
                        style={this.state.countryTwo
                          ? {
                            backgroundImage: 'url(' + countriesFlags[this.state.countryTwo.toLowerCase()] + ')'
                          }
                          : null
                        }
                      >
                      </Button>
                    </CSSTransition>
                  </div>
                </div>
                <div className='d-flex justify-content-center' style={{ marginTop: '10px', color: 'white' }}>
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
                <div className='d-flex justify-content-center' style={{ marginTop: 'auto' }}>
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
      </div>
    )
    // this.state.loading
    //   ? <Loader></Loader>
    //   :
    //   this.state.currTest === this.state.filteredOne.length
    //     ? <Finish></Finish>
    //     :
    // (
    //   <div className='Compare'>
    //     <Map1 ArrOne={this.state.filteredOne} ArrTwo={this.state.filteredTwo} currTest={this.state.currTest}></Map1>
    //     <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '100px' }}>
    //       <div>
    //         <CSSTransition
    //           in={this.state.toggle1}
    //           timeout={500}
    //           classNames='os'
    //         >
    //           <Button
    //             className={'modalButton'}
    //             onClick={this.incFirst}
    //             style={this.state.countryOne
    //               ? {
    //                 backgroundImage: 'url(' + countriesFlags[this.state.countryOne.toLowerCase()] + ')'
    //               }
    //               : null
    //             }
    //           >
    //           </Button>
    //         </CSSTransition>
    //         <span style={{ color: 'white', fontSize: '2.2rem', marginLeft: '1rem', fontWeight: 'bold' }}>
    //           {this.state.counterFirst}
    //         </span>
    //       </div>
    //       <CSSTransition
    //         in={this.state.toggleDraw}
    //         timeout={500}
    //         classNames='es'
    //       >
    //         <Button
    //           className={'modalButton'}
    //           variant="light"
    //           onClick={this.drawHandle}
    //           style={
    //             {
    //               backgroundImage: 'url(' + draw + ')',
    //             }
    //           }
    //         >
    //         </Button>
    //       </CSSTransition>
    //       <div>
    //         <span style={{ color: 'white', fontSize: '2.2rem', marginRight: '1rem', fontWeight: 'bold' }}>
    //           {this.state.counterSecond}
    //         </span>
    //         <CSSTransition
    //           in={this.state.toggle2}
    //           timeout={500}
    //           classNames='as'
    //         >
    //           <Button
    //             className={'modalButton'}
    //             onClick={this.incSecond}
    //             style={this.state.countryTwo
    //               ? {
    //                 backgroundImage: 'url(' + countriesFlags[this.state.countryTwo.toLowerCase()] + ')'
    //               }
    //               : null
    //             }
    //           >
    //           </Button>
    //         </CSSTransition>
    //       </div>
    //     </div>
    //   </div>
    // )
    // this.state.activeQuestion === 0
    //   ? <React.Fragment>
    //     <h1>Sex</h1>
    //     <StreetView
    //       address={this.state.locOne[this.state.activeQuestion]}
    //       APIkey={API_KEY}
    //       streetView
    //       zoomLevel={15}
    //       mapStyle={{ display: 'none' }}
    //     />
    //     <StreetView
    //       address={this.state.locTwo[this.state.activeQuestion]}
    //       APIkey={API_KEY}
    //       streetView
    //       zoomLevel={15}
    //       mapStyle={{ display: 'none' }}
    //     />
    //     <StreetView
    //       address={this.state.locOne[this.state.activeQuestion]}
    //       APIkey={API_KEY}
    //       streetView
    //       zoomLevel={15}
    //       mapStyle={{ display: 'none' }}
    //     />
    //     <StreetView
    //       address={this.state.locTwo[this.state.activeQuestion]}
    //       APIkey={API_KEY}
    //       streetView
    //       zoomLevel={15}
    //       mapStyle={{ display: 'none' }}
    //     />
    //     {this.setState({
    //       activeQuestion: this.state.activeQuestion + 1
    //     })}
    //   </React.Fragment>
    //   :
    //   <React.Fragment>
    //     <h2>2</h2>
    //     <StreetView
    //       address={this.state.locOne[this.state.activeQuestion]}
    //       APIkey={API_KEY}
    //       streetView
    //       zoomLevel={15}
    //       mapStyle={this.mapContainerStyle}
    //     />
    //     <StreetView
    //       address={this.state.locTwo[this.state.activeQuestion]}
    //       APIkey={API_KEY}
    //       streetView
    //       zoomLevel={15}
    //       mapStyle={this.mapContainerStyle}
    //     />
    //     {/* <Versus></Versus> */}
    // <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
    //   <CSSTransition
    //     in={this.state.toggle1}
    //     timeout={500}
    //     classNames='os'
    //   >
    //     <Button
    //       className={classes.modalButton}
    //       onClick={() => { this.incFirst() }}
    //       style={this.state.countryOne
    //         ? {
    //           backgroundImage: 'url(' + countriesFlags[this.state.countryOne.toLowerCase()] + ')'
    //         }
    //         : null
    //       }
    //     >
    //     </Button>
    //   </CSSTransition>
    //   <CSSTransition
    //     in={this.state.toggleDraw}
    //     timeout={500}
    //     classNames='es'
    //   >
    //     <Button
    //       className={classes.modalButton}
    //       variant="light"
    //       onClick={() => { this.drawHandle() }}
    //       style={
    //         {
    //           backgroundImage: 'url(' + draw + ')',
    //         }
    //       }
    //     >
    //     </Button>
    //   </CSSTransition>
    //   <CSSTransition
    //     in={this.state.toggle2}
    //     timeout={500}
    //     classNames='as'
    //   >
    //     <Button
    //       className={classes.modalButton}
    //       onClick={() => { this.incSecond() }}
    //       style={this.state.countryTwo
    //         ? {
    //           backgroundImage: 'url(' + countriesFlags[this.state.countryTwo.toLowerCase()] + ')'
    //         }
    //         : null
    //       }
    //     >
    //     </Button>
    //   </CSSTransition>
    // </div>
    //   </React.Fragment >
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
