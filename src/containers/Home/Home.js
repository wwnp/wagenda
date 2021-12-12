import React, { useEffect, useState } from 'react'
import { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import { countriesFlags } from '../../countriesFlags';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import classes from './Home.module.css'
import { fetchCountries } from '../../redux/actions/homeAction';
import { delay } from '../../dox';
import { startLoading, hideLoading } from '../../redux/actions/loadingAction';
import Loader from '../../components/Loader/Loader'
import Button from '../../components/CountryButton/CountryButton';
const duration = 500;
const modalButton = {
  backgroundImage: 'url(https://cdn.britannica.com/42/3842-004-F47B77BC/Flag-Russia.jpg)',
  // backgroundImage: 'url(' + countriesFlags.france + ')',
}
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

  async componentDidMount() {
    this.props.startLoading()
    await delay(800)

    this.props.fetchCountries()

    this.props.hideLoading()
  }

  render() {
    console.log(this.state)
    const cls = [classes['bg-shadow'], classes['container-custom'], 'p-4']
    return (
      <Container className={cls.join(' ')}>
        <h1 className='text-center'>Choose two countries to compare:</h1>
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
                      <Button
                        state={state}
                        country={country}
                        onCLick={(e) => this.chooseHandler(e)}
                        customStyle={modalButton}
                      >
                      </Button>
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
              <button className='btn btn-success btn-lg' onClick={() => this.props.navigate('/compare', { state: { test: 'sex' }, replace: false })}>
                Start
              </button>
            </div>
          </React.Fragment>
        }



      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    test: state.test.test,
    countries: state.home.countries,
    loading: state.loading.loading,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchCountries: () => { dispatch(fetchCountries()) },
    startLoading: () => { dispatch(startLoading()) },
    hideLoading: () => { dispatch(hideLoading()) },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default function () {
//   const navigate = useNavigate()
//   return connect(mapStateToProps, mapDispatchToProps)(Home)
// }