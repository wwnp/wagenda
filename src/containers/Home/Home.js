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
import axios from 'axios';
// const duration = 500;
import { HookCountySetter } from './HookCountySetter';
import { delay } from '../../dox';
//refactor class to functional

export default function Home(props) {
  const {
    countryOne,
    countryTwo,
    typeRadio,
    loading,
    setCountryOne,
    setCountryTwo,
    setTypeRadio,
    setLoading,
    testHits,
    setTestHits
  } = HookCountySetter()

  useEffect(() => {
    async function fetchData() {
      const result = await axios('https://hn.algolia.com/api/v1/search?query=redux',)
      const { data } = result
      // await delay(2000)
      setLoading(false)
      setTestHits(data.hits)
    }
    fetchData({})
  }, []);

  console.log(testHits)
  return (
    <React.Fragment>
      {loading
        ? <Loader></Loader>
        : testHits.map((hit,index) => {
          return (
            <div key={index}>{hit.title}</div>
          )
        })

      }
    </React.Fragment>
  )
}


const CAPITAL = 'capital'
class Home2 extends Component {
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
  render() {
    const clsContainer = [classes['bg-shadow'], classes['container-custom'], 'p-4']
    const clsButton = ['btn-lg', 'btn-success',]
    if (!(this.state.countryOne && this.state.countryTwo)) {
      clsButton.push('disabled')
    }
    return (
      <React.Fragment>
        <div>HOME2</div>
      </React.Fragment>
      // <React.Fragment>
      //   <VideoPlayer
      //     className="video"
      //     src={
      //       // "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
      //       video
      //     }
      //     autoPlay={true}
      //     muted={true}
      //   />
      //   <Container className={clsContainer.join(' ')}>

      //     <h6 className='display-6 text-center'>Choose two countries to compare:</h6>
      //     {this.props.loading
      //       ? <Loader></Loader>
      //       : <React.Fragment>
      //         <form className={classes.formCountries}>
      //           {this.props.countries.map((country, index) => {
      //             return <Col
      //               key={index}
      //               xs='4'
      //               className='text-center my-5'
      //             >
      //               <CSSTransition
      //                 timeout={500}
      //                 classNames='os'
      //               >
      //                 {state => (
      //                   <CountryButton
      //                     state={state}
      //                     country={country}
      //                     onCLick={(e) => this.chooseHandler(e)}
      //                     // customStyle={modalButton}
      //                     urlFlag={countriesFlags[country.toLowerCase()]}
      //                   >
      //                   </CountryButton>
      //                 )}
      //               </CSSTransition>
      //             </Col>
      //           })}
      //         </form>
      //         <div className="text-center"><button className='btn btn-sm btn-warning text-white' onClick={(e) => this.resetCountries(e)}>Reset</button></div>
      //           <br />
      //         <form>
      //         <CSSTransition
      //             timeout={500}
      //             classNames='os'
      //           >
      //             {state => (
      //               <div>
      //                 <div className="form-check">
      //                   <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked onClick={() => this.setState({ typeRadio: CAPITAL })} />
      //                   <label className="form-check-label float-left" htmlFor="flexRadioDefault1">
      //                     Capital
      //                   </label>
      //                 </div>
      //                 <div className="form-check">
      //                   <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => this.setState({ typeRadio: PROVINCE })} />
      //                   <label className="form-check-label float-left" htmlFor="flexRadioDefault2">
      //                     Province
      //                   </label>
      //                 </div>
      //               </div>
      //             )}
      //           </CSSTransition>
      //         </form>

      //         <hr />
      //         <div className="text-center">
      //           <Button classAdd={clsButton.join(' ')} onClick={() => this.saveComparedCounries(this.state.countryOne.name, this.state.countryTwo.name)} navTo='/compare'></Button>
      //           {/* <Button classAdd={clsButton.join(' ')} onClick={() => this.props.setComparedCountries(this.state.countryOne.name, this.state.countryTwo.name)} navTo='/compare'></Button> */}
      //         </div>
      //       </React.Fragment>
      //     }
      //   </Container>
      // </React.Fragment>
    )
  }
  saveComparedCounries(countryOne, countryTwo) {
    localStorage.setItem('countryOne', countryOne)
    localStorage.setItem('countryTwo', countryTwo)
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
    // setComparedCountries: bindActionCreators(setComparedCountries, dispatch)
    // startLoading: () => { dispatch(startLoading()) },
    // hideLoading: () => { dispatch(hideLoading()) },
  }
}
function withRouter(Component) {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  }
} // hoc
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home2))


// redux fetch countries from firebase
// need 