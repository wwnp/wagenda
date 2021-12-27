import React, { Component, } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
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
import { HookFetchLocation, HookFinished } from './CompareLogic';
import { HookLoading } from '../Home/HookFetchCountries';
import Map1 from '../../components/map'
import { ChangeQuestion } from './CompareLogic';
import { btnHandlerOne } from './CompareLogic';
import { btnHandlerTwo } from './CompareLogic';
// import { isFinished } from './CompareLogic';
import Street from '../../components/Street/Street';
import {
  GoogleMap,
  LoadScript,
  LoadScriptNext,
  useGoogleMap,
  StreetViewPanorama
} from "@react-google-maps/api";
import { FRAMES_NUMBER } from './CompareLogic';
import { Finished } from '../../components/Finished/Finished';
// import Streetview from 'react-google-streetview';
// import Streetview from 'react-google-streetview';
// import ReactStreetview from 'react-streetview';
// import ReactStreetview from 'react-streetview';
// const API_KEY = 'AIzaSyC8vrSRl5lVB0uR506rjvi5b2DtyrREVP8'
const APIkey = "AIzaSyBo6m4C52hgW-eRz-UKKh_yezXUN6gXHFw" // NOT MY API
const APIkey2 = "AIzaSyCBv6uUPVyWju4JjN3yXbuB22jJYXNVZPE"
const APIkey3 = "AIzaSyBHzw-IPrltI7NxKgUOFRyULZjven31Trk"
const mapContainerStyle = {
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
// const API_KEY = 'AIzaSyA8zlguZvshGclLLgePtXJrO7z3LDq8xl8'
export default function Compare(props) {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [toggle1, setToggle1] = useState(true)
  const [toggle2, setToggle2] = useState(true)
  const [finished, setFinished] = useState(false)
  const [locOne, locTwo, loading, countryOne, countryTwo] = HookFetchLocation()
  return (
    finished
      ? <h1>Finished</h1>
      :
      loading
        ? <h1>Loading</h1>
        :
        activeQuestion === 0
          ?
          <div>
            <StreetView
              address={locOne[activeQuestion]}
              APIkey={APIkey}
              streetView
              zoomLevel={15}
              mapStyle={{ display: 'none' }}
            />
            <div className="text-center">
              <button
                className='btn btn-success btn-lg'
                onClick={e => setActiveQuestion(activeQuestion + 1)}
              >GO
              </button>
            </div>
          </div>
          :
          <React.Fragment>
            <div style={{ display: 'flex' }}>
              <StreetView
                address={locOne[activeQuestion]}
                APIkey={APIkey2}
                streetView
                mapStyle={mapContainerStyle}
              />
              <Versus></Versus>
              <StreetView
                address={locTwo[activeQuestion]}
                APIkey={APIkey}
                streetView
                mapStyle={mapContainerStyle}
              />

            </div>
            <div style={{ display: 'flex' }} className='mt-2'>
              <Col>
                <div className="text-center">
                  {activeQuestion} frames of {FRAMES_NUMBER}
                </div>
              </Col>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
              <CSSTransition
                in={toggle1}
                timeout={500}
                classNames='os'
              >
                <Button
                  className={classes.modalButton}
                  variant="primary"
                  onClick={() => { btnHandlerOne(setToggle1, toggle1, setActiveQuestion, activeQuestion, setFinished) }}
                  style={countryOne
                    ? {
                      backgroundImage: 'url(' + countriesFlags[countryOne.toLowerCase()] + ')'
                    }
                    : null
                  }
                >
                </Button>
              </CSSTransition>
              <CSSTransition
                in={toggle2}
                timeout={500}
                classNames='as'
              >
                <Button
                  className={classes.modalButton}
                  variant="primary"
                  onClick={() => { btnHandlerTwo(setToggle2, toggle2, setActiveQuestion, activeQuestion, setFinished) }}
                  style={countryTwo
                    ? {
                      backgroundImage: 'url(' + countriesFlags[countryTwo.toLowerCase()] + ')'
                    }
                    : null
                  }
                >
                </Button>
              </CSSTransition>
            </div>
          </React.Fragment>
  )
// function mapStateToProps(state) {
//   return {
//     locations: state.compare.locations,
//   }
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     fetchLocations: bindActionCreators(fetchLocations, dispatch),
//   }
// }
// function withRouter(Component) {
//   return (props) => {
//     const navigate = useNavigate();
//     return <Component {...props} navigate={navigate} />;
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)((props) => {
//   const navigate = useNavigate()
//   return <Compare {...props} navigate={navigate} />
// })