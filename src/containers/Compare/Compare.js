import React, { Component } from 'react'
import classes from './Compare.module.css'
import Map from '../../components/Map/Map'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { countriesFlags } from '../../countriesFlags';
import { StreetView } from 'react-google-map-street-view'
import Versus from '../../components/Versus/Versus';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

const API_KEY = 'AIzaSyC8vrSRl5lVB0uR506rjvi5b2DtyrREVP8'
class Compare extends Component {

  state = {
    activeQuestion: 0,
    loading: true,
    arrayFirst: [1, 2, 3, 4, 5],
    arraySecond: [1, 2, 3, 4, 5],
    toggle1: true,
    toggle2: true,
    // arrayFirst: [
    //   {
    //     address: "45.019389024362816, 39.20471115338716"
    //   },
    // ],
    // arraySecond: [
    //   {
    //     address: "45.019389024362816, 39.20471115338716"
    //   },
    // ],
    counterFirst: 0,
    counterSecond: 0
  }
  modalButton = {
    backgroundImage: 'url(' + countriesFlags.france + ')',
    backgroundSize: 'contain',
    height: '79px',
    width: '119px',
    backgroundRepeat: 'no-repeat'
  }
  modalButton2 = {
    backgroundImage: 'url(' + countriesFlags.russia + ')',
    backgroundSize: 'contain',
    height: '79px',
    width: '119px',
    backgroundRepeat: 'no-repeat'
  }
  mapContainerStyle = {
    width: '45%',
    background: 'rgb(255, 255, 255)',
    height: '600px',
    border: '1px solid rgb(0, 0, 0)',
    position: 'relative',
    overflow: 'hidden',
    margin: '0 auto',
    paddingLeft: '5px',
    paddingRight: '5px',
  }

  incFirst = () => {

    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
      counterFirst: this.state.counterFirst + 1
    })

    if (this.compareFinished()) {
      this.setState({
        activeQuestion: 0
      })
    }


    this.setState({ toggle1: !this.state.toggle1 })
  }
  incSecond = () => {
    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
      counterSecond: this.state.counterSecond + 1
    })
    if (this.compareFinished()) {
      this.setState({
        activeQuestion: 0
      })
    }

    this.setState({ toggle2: !this.state.toggle2 })
  }
  compareFinished() {
    return this.state.activeQuestion + 1 === this.state.arrayFirst.length
  }

  render() {
    console.log(this.state)
    if (this.state.arrayFirst.length !== this.state.arraySecond.length) {
      throw new Error('arrays length doesn\'t match')
    }
    if (this.props.isMobile) {
      return <h1>Unavailable on mobile devices</h1>
    }
    return (
      <div className={classes.Compare}>
        {<Row>
          {/* <StreetView
            mapStyle={this.mapContainerStyle}
            address={this.state.arrayFirst[this.state.activeQuestion].address}
            APIkey={API_KEY}
            streetView={true}
          />
          {this.props.isMobile ? null : <Versus></Versus>}
          <StreetView
            mapStyle={this.mapContainerStyle}
            address={this.state.arraySecond[this.state.activeQuestion].address}
            APIkey={API_KEY}
            streetView={true}
          /> */}
          <h1>Question: {this.state.activeQuestion}</h1>
          <StreetView
            mapStyle={this.mapContainerStyle}
            address={'45.019389024362816, 39.20471115338716'}
            APIkey={API_KEY}
            streetView={true}
          />
        </Row>}
        {
          <Row>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
              <CSSTransition
                in={this.state.toggle1}
                timeout={500}
                classNames='os'
              >
                <Button variant="primary" onClick={() => { this.incFirst() }} style={this.modalButton}></Button>
              </CSSTransition>
              <CSSTransition
                in={this.state.toggle2}
                timeout={500}
                classNames='as'
              >
                <Button variant="primary" onClick={() => { this.incSecond() }} style={this.modalButton2}></Button>
              </CSSTransition>
            </div>
          </Row>
        }
        <Row style={{ textAlign: 'center' }}><span>{this.state.activeQuestion + 1} of {this.state.arrayFirst.length} Frame</span></Row>
      </div>
    )
  }

}
export default Compare