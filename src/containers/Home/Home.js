import React from 'react'
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
const CAPITAL = 'capital'
const PROVINCE = 'province'
export default function Home(props) {
  const { countryOne, countryTwo, setCountryOne, setCountryTwo, typeRadio, setTypeRadio } = HookCountySetter()
  const { loading, setLoading } = HookLoading(true)
  const { countries } = HookFetchCountries({setLoading})
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Video windowWidth={props.windowWidth}></Video>
      <div className={classes.formWrapper}>
        {loading
          ? <Loader></Loader>
          : <div style={{ padding: '15px' }}>
            <form className={classes.formCountries}>
              {countries.map((country, index) => {
                return <Col
                  key={index}
                  xs='4'
                  className='text-center my-3'
                >
                  {/* <CSSTransition */}
                  {/* timeout={500} */}
                  {/* classNames='os' */}
                  {/* > */}
                  {/* {state => ( */}
                  <CountryButton
                    country={country}
                    onCLick={(event) => countryButtonHandler(event, {
                      countryOne,
                      countryTwo,
                      setCountryOne,
                      setCountryTwo
                    })}
                    urlFlag={
                      countriesFlags[country.toLowerCase()]
                        ? countriesFlags[country.toLowerCase()]
                        : noImage
                    }
                  >
                  </CountryButton>
                  {/* )} */}
                  {/* </CSSTransition> */}
                </Col>
              })}
            </form>
            <div className="text-center">
              <Button
                className='btn btn-sm btn-warning text-white mt-5'
                onClick={(e) => resetCountries(e, {
                  countryOne,
                  countryTwo,
                  setCountryOne,
                  setCountryTwo,
                  setTypeRadio
                })}
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
                        checked={typeRadio === CAPITAL}
                        onChange={() => setTypeRadio(CAPITAL)}
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
                        checked={typeRadio === PROVINCE}
                        onChange={() => setTypeRadio(PROVINCE)}
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
                disabled={!(countryOne && countryTwo)}
                onClick={e => beforeCompare(e, countryOne, countryTwo, navigate)}
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
// function mapStateToProps(state) {
//   return {
//     countries: state.home.countries,
//     loading: state.loading.loading,
//   }
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     fetchCountries: () => { dispatch(fetchCountries()) },
//     // setComparedCountries: bindActionCreators(setComparedCountries, dispatch)
//     // startLoading: () => { dispatch(startLoading()) },
//     // hideLoading: () => { dispatch(hideLoading()) },
//   }
// }
// function withRouter(Component) {
//   return (props) => {
//     const navigate = useNavigate();
//     return <Component {...props} navigate={navigate} />;
//   }
// } // hoc
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home2))
