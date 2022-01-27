import React, { Component } from 'react'
import classes from './Compare.module.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { countriesFlags } from '../../countriesFlags';
import { StreetView } from 'react-google-map-street-view'
import Versus from '../../components/Versus/Versus';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { fetchLocations } from '../../redux/actions/compareActions';
import Loader from '../../components/Loader/Loader';
import { delay } from '../../dox';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Streetview from 'react-google-streetview';
import draw from '../../images/draw.png'
import { API_KEY } from '../../config';
// const API_KEY2 = 'AIzaSyC8vrSRl5lVB0uR506rjvi5b2DtyrREVP8'
export default class Compare extends Component {
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
    start: true
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
      activeQuestion: this.state.activeQuestion + 1,
      counterFirst: this.state.counterFirst + 1,
      toggle1: !this.state.toggle1
    })
  }
  incSecond = () => {
    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
      counterSecond: this.state.counterSecond + 1,
      toggle2: !this.state.toggle2
    })
  }
  drawHandle = () => {
    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
      toggleDraw: !this.state.toggleDraw
    })
  }
  async componentDidMount() {
    try {
      const countryOne = localStorage.getItem('countryOne')
      const countryTwo = localStorage.getItem('countryTwo')
      const response = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryOne}/Capital.json`)
      const response2 = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryTwo}/Capital.json`)
      const temp1 = Object.values(response.data)
      const temp2 = Object.values(response2.data)
      this.setState({
        locOne: temp1,
        locTwo: temp2,
        loading: false,
        countryOne,
        countryTwo,
      })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    console.log(API_KEY)
    if (this.props.isMobile) {
      return <h1>Unavailable on mobile devices</h1>
    }
    // if (this.props.comparedCountries === null) {
    //   this.props.navigate('/')
    //   // return <React.Fragment></React.Fragment>
    // } // __gives an error about somethg: Can't perform a state ... __
    return this.isFinished()
      ? <h1>Finish</h1>
      :
      this.state.loading
        ? <Loader></Loader>
        :
        this.state.activeQuestion === 0
          ? <React.Fragment>
            <h1>Sex</h1>
            {/* <StreetView
              address={this.state.locOne[this.state.activeQuestion]}
              APIkey={API_KEY}
              streetView
              zoomLevel={15}
              mapStyle={{ display: 'none' }}
            />
            <StreetView
              address={this.state.locTwo[this.state.activeQuestion]}
              APIkey={API_KEY}
              streetView
              zoomLevel={15}
              mapStyle={{ display: 'none' }}
            />
            <StreetView
              address={this.state.locOne[this.state.activeQuestion]}
              APIkey={API_KEY}
              streetView
              zoomLevel={15}
              mapStyle={{ display: 'none' }}
            />
            <StreetView
              address={this.state.locTwo[this.state.activeQuestion]}
              APIkey={API_KEY}
              streetView
              zoomLevel={15}
              mapStyle={{ display: 'none' }}
            /> */}
            {this.setState({
              activeQuestion: this.state.activeQuestion + 1
            })}
          </React.Fragment>
          :
          <React.Fragment>
            <h2>2</h2>
            {/* <StreetView
              address={this.state.locOne[this.state.activeQuestion]}
              APIkey={API_KEY}
              streetView
              zoomLevel={15}
              mapStyle={this.mapContainerStyle}
            />
            <StreetView
              address={this.state.locTwo[this.state.activeQuestion]}
              APIkey={API_KEY}
              streetView
              zoomLevel={15}
              mapStyle={this.mapContainerStyle}
            /> */}
            {/* <Versus></Versus> */}
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
              <CSSTransition
                in={this.state.toggle1}
                timeout={500}
                classNames='os'
              >
                <Button
                  className={classes.modalButton}
                  onClick={() => { this.incFirst() }}
                  style={this.state.countryOne
                    ? {
                      backgroundImage: 'url(' + countriesFlags[this.state.countryOne.toLowerCase()] + ')'
                    }
                    : null
                  }
                >
                </Button>
              </CSSTransition>
              <CSSTransition
                in={this.state.toggleDraw}
                timeout={500}
                classNames='es'
              >
                <Button
                  className={classes.modalButton}
                  variant="light"
                  onClick={() => { this.drawHandle() }}
                  style={
                    {
                      backgroundImage: 'url(' + draw + ')',
                      // height: '79px',
                      // width: '119px'
                    }
                  }
                >
                </Button>
              </CSSTransition>
              <CSSTransition
                in={this.state.toggle2}
                timeout={500}
                classNames='as'
              >
                <Button
                  className={classes.modalButton}
                  onClick={() => { this.incSecond() }}
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
          </React.Fragment >
  }
}