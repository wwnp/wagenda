import React, { useEffect, useState } from 'react'
import { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import { countriesFlags } from '../../countriesFlags';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import classes from './Home.module.css'
import { fetchCountries } from '../../redux/actions/homeAction';
import Loader from '../../components/Loader/Loader'
import CountryButton from '../../components/CountryButton/CountryButton';
import Button from '../../components/Button/Button';
import { setComparedCountries } from '../../redux/actions/homeAction';
import { bindActionCreators } from 'redux'
import { useNavigate } from 'react-router-dom';
import VideoPlayer from "react-background-video-player";
import video from '../../atoms.mp4'
// const duration = 500;
const CAPITAL = 'capital'
const PROVINCE = 'province'
class Home extends Component {
  state = {
    countryOne: null,
    countryTwo: null,
    typeRadio: CAPITAL
  }
  chooseHandler = e => {
    e.preventDefault()
    if (!this.state.countryOne) {
      this.setState({
        countryOne: {
          name: e.target.dataset.country,
          element: e.target
        }
      })
      e.target.classList.add('active')
    } else if (!this.state.countryTwo) {
      this.setState({
        countryTwo: {
          name: e.target.dataset.country,
          element: e.target
        }
      })
      e.target.classList.add('active')
    }
  }
  resetCountries(e) {
    e.preventDefault()
    this.setState({
      countryOne: null,
      countryTwo: null,
    })
    if (this.state.countryOne) {
      this.state.countryOne.element.classList.remove('active')
    }
    if (this.state.countryOne && this.state.countryTwo) {
      this.state.countryOne.element.classList.remove('active')
      this.state.countryTwo.element.classList.remove('active')
    }
  }
  // startCompare = async e => {
  //   await this.props.fetchLocations()
  //   await delay(2000)
  // }
  render() {
    console.log(this.props)
    const clsContainer = [classes['bg-shadow'], classes['container-custom'], 'p-4']
    const clsButton = ['btn-lg', 'btn-success',]
    if (!(this.state.countryOne && this.state.countryTwo)) {
      clsButton.push('disabled')
    }
    return (
      <React.Fragment>
        <VideoPlayer
          className="video"
          src={
            // "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
            video
          }
          autoPlay={true}
          muted={true}
        />
        <Container className={clsContainer.join(' ')}>

          <h6 className='display-6 text-center'>Choose two countries to compare:</h6>
          {this.props.loading
            ? <Loader></Loader>
            : <React.Fragment>
              <form className={classes.formCountries}>
                {this.props.countries.map((country, index) => {
                  return <Col
                    key={index}
                    xs='4'
                    className='text-center my-5'
                  >
                    <CSSTransition
                      timeout={500}
                      classNames='os'
                    >
                      {state => (
                        <CountryButton
                          state={state}
                          country={country}
                          onCLick={(e) => this.chooseHandler(e)}
                          // customStyle={modalButton}
                          urlFlag={countriesFlags[country.toLowerCase()]}
                        >
                        </CountryButton>
                      )}
                    </CSSTransition>
                  </Col>
                })}
                <hr />
                <CSSTransition
                  timeout={500}
                  classNames='os'
                >
                  {state => (
                    <div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked onClick={() => this.setState({ typeRadio: CAPITAL })} />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Capital
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => this.setState({ typeRadio: PROVINCE })} />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                          Province
                        </label>
                      </div>
                    </div>
                  )}
                </CSSTransition>


              </form>
              <div className="text-center"><button className='btn btn-sm btn-warning text-white' onClick={(e) => this.resetCountries(e)}>Reset</button></div>
              <hr />
              <div className="text-center">
                {/* <Button classAdd={clsButton.join(' ')} navTo='/compare'></Button> */}
                <Button classAdd={clsButton.join(' ')} onClick={() => this.props.setComparedCountries(this.state.countryOne.name, this.state.countryTwo.name)} navTo='/compare'></Button>
              </div>
            </React.Fragment>
          }
        </Container>
      </React.Fragment>
    )
  }
  async componentDidMount() {
    await this.props.fetchCountries()
  }
}

function mapStateToProps(state) {
  return {
    countries: state.home.countries,
    loading: state.loading.loading,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchCountries: () => { dispatch(fetchCountries()) },
    setComparedCountries: bindActionCreators(setComparedCountries, dispatch)
    // startLoading: () => { dispatch(startLoading()) },
    // hideLoading: () => { dispatch(hideLoading()) },
  }
}
function withRouter(Component) {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))