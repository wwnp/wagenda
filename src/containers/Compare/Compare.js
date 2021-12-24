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
import { HookFetchLocation } from './CompareLogic';
import { HookLoading } from '../Home/HookFetchCountries';
import Map1 from '../../components/map'
// import Streetview from 'react-google-streetview';
// import Streetview from 'react-google-streetview';
// import ReactStreetview from 'react-streetview';
// import ReactStreetview from 'react-streetview';
// const API_KEY = 'AIzaSyC8vrSRl5lVB0uR506rjvi5b2DtyrREVP8'
const API_KEY = 'AIzaSyA8zlguZvshGclLLgePtXJrO7z3LDq8xl8'
// const API_KEY = 'AIzaSyA8zlguZvshGclLLgePtXJrO7z3LDq8xl8'
export default function Compare(props) {
  if (props.isMobile) {
    return <h1>Unavailable on mobile devices</h1>
  }
  const { loading, setLoading } = HookLoading(true)
  const [locOne, locTwo, countryOne, countryTwo] = HookFetchLocation({ setLoading })
  if (locOne.length !== 0) {
    const address = Object.values(locOne[0]).join(' ')
    // console.log(locOne[0].join(''))
  }
  return (
    <React.Fragment>
      {loading
        ? <h1>Loading</h1>
        :
        <React.Fragment>
          <div className='d-flex'>
            <div style={{
              width: '45%',
              height: '600px',
              border: '1px solid rgb(0, 0, 0)',
              position: 'relative',
              overflow: 'hidden',
              margin: '0 auto',
              paddingLeft: '5px',
              paddingRight: '5px',
            }}
            >
              <Map1 lat={37.5247596} lng={-122.2583719}></Map1>
            </div>
            <Versus></Versus>
            <div style={{
              width: '45%',
              height: '600px',
              border: '1px solid rgb(0, 0, 0)',
              position: 'relative',
              overflow: 'hidden',
              margin: '0 auto',
              paddingLeft: '5px',
              paddingRight: '5px',
            }}
            >
              <Map1 lat={45.0191444273517} lng={39.206566174020054}></Map1>
            </div>
          </div>
          <Row>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
              <CSSTransition
                // in={this.state.toggle1}
                timeout={500}
                classNames='os'
              >
                <Button
                  className={classes.modalButton}
                  variant="primary"
                  // onClick={() => { this.incFirst() }}
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
                // in={this.state.toggle2}
                timeout={500}
                classNames='as'
              >
                <Button
                  className={classes.modalButton}
                  variant="primary"
                  // onClick={() => { this.incSecond() }}
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
          </Row>
        </React.Fragment>
      }

    </React.Fragment>
  )
}
  //   this.isFinished()
  //   ? <h1>Finish</h1>
  //   : this.state.loading
  //     ? <Loader></Loader>
  //     :
  //     <React.Fragment>
  //       <Row>
          // <StreetView
          //   mapStyle={this.mapContainerStyle}
          //   address={this.props.locations.countryTwo.value[this.state.activeQuestion].join('')}
          //   APIkey={API_KEY}
          //   streetView={true}
          // />
  //         <Versus></Versus>
          // <StreetView
          //   mapStyle={this.mapContainerStyle}
          //   address={this.props.locations.countryTwo.value[this.state.activeQuestion].join('')}
          //   APIkey={API_KEY}
          //   streetView={true}
          // />
  //       </Row>
        // <Row>
        //   <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
        //     <CSSTransition
        //       in={this.state.toggle1}
        //       timeout={500}
        //       classNames='os'
        //     >
        //       <Button
        //         className={classes.modalButton}
        //         variant="primary"
        //         onClick={() => { this.incFirst() }}
        //         style={this.state.countryOne
        //           ? {
        //             backgroundImage: 'url(' + countriesFlags[this.state.countryOne.toLowerCase()] + ')'
        //           }
        //           : null
        //         }
        //       >
        //       </Button>
        //     </CSSTransition>
        //     <CSSTransition
        //       in={this.state.toggle2}
        //       timeout={500}
        //       classNames='as'
        //     >
        //       <Button
        //         className={classes.modalButton}
        //         variant="primary"
        //         onClick={() => { this.incSecond() }}
        //         style={this.state.countryTwo
        //           ? {
        //             backgroundImage: 'url(' + countriesFlags[this.state.countryTwo.toLowerCase()] + ')'
        //           }
        //           : null
        //         }
        //       >
        //       </Button>
        //     </CSSTransition>
        //   </div>
        // </Row>
  //     </React.Fragment>
  // )
// }
// class Compare extends Component {
//   state = {
//     activeQuestion: 0,
//     toggle1: true,
//     toggle2: true,
//     counterFirst: 0,
//     counterSecond: 0,
//     loading: true,
//     countryOne: null,
//     countryTwo: null,
//   }
//   isFinished() {
//     if (this.props.locations) {
//       return this.state.activeQuestion + 1 === this.props.locations.countryOne.value.length
//     }
//   }
  // mapContainerStyle = {
  //   width: '45%',
  //   background: 'rgb(255, 255, 255)',
  //   height: '600px',
  //   border: '1px solid rgb(0, 0, 0)',
  //   position: 'relative',
  //   overflow: 'hidden',
  //   margin: '0 auto',
  //   paddingLeft: '5px',
  //   paddingRight: '5px',
  // }
//   incFirst = () => {
//     this.setState({
//       activeQuestion: this.state.activeQuestion + 1,
//       counterFirst: this.state.counterFirst + 1
//     })
//     this.setState({ toggle1: !this.state.toggle1 })
//   }
//   incSecond = () => {
//     this.setState({
//       activeQuestion: this.state.activeQuestion + 1,
//       counterSecond: this.state.counterSecond + 1
//     })
//     this.setState({ toggle2: !this.state.toggle2 })
//   }
//   render() {
    // if (this.props.isMobile) {
    //   return <h1>Unavailable on mobile devices</h1>
    // }
//     // if (this.props.comparedCountries === null) {
//     //   this.props.navigate('/')
//     //   // return <React.Fragment></React.Fragment>
//     // } // __gives an error about somethg: Can't perform a state ... __
    // return this.isFinished()
    //   ? <h1>Finish</h1>
    //   : this.state.loading
    //     ? <Loader></Loader>
    //     :
    //     <React.Fragment>
    //       <Row>
    //         <StreetView
    //           mapStyle={this.mapContainerStyle}
    //           address={this.props.locations.countryTwo.value[this.state.activeQuestion].join('')}
    //           APIkey={API_KEY}
    //           streetView={true}
    //         />
    //         <Versus></Versus>
    //         <StreetView
    //           mapStyle={this.mapContainerStyle}
    //           address={this.props.locations.countryTwo.value[this.state.activeQuestion].join('')}
    //           APIkey={API_KEY}
    //           streetView={true}
    //         />
    //       </Row>
    //       <Row>
    //         <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
    //           <CSSTransition
    //             in={this.state.toggle1}
    //             timeout={500}
    //             classNames='os'
    //           >
    //             <Button
    //               className={classes.modalButton}
    //               variant="primary"
    //               onClick={() => { this.incFirst() }}
    //               style={this.state.countryOne
    //                 ? {
    //                   backgroundImage: 'url(' + countriesFlags[this.state.countryOne.toLowerCase()] + ')'
    //                 }
    //                 : null
    //               }
    //             >
    //             </Button>
    //           </CSSTransition>
    //           <CSSTransition
    //             in={this.state.toggle2}
    //             timeout={500}
    //             classNames='as'
    //           >
    //             <Button
    //               className={classes.modalButton}
    //               variant="primary"
    //               onClick={() => { this.incSecond() }}
    //               style={this.state.countryTwo
    //                 ? {
    //                   backgroundImage: 'url(' + countriesFlags[this.state.countryTwo.toLowerCase()] + ')'
    //                 }
    //                 : null
    //               }
    //             >
    //             </Button>
    //           </CSSTransition>
    //         </div>
    //       </Row>
    //     </React.Fragment>

//   }
//   // render() {

//   //   // console.log(this.props.locations.countryOne.value[this.state.activeQuestion])
//   //   return (
//   //     <div className={classes.Compare}>
//   //       {
//   //         this.props.loading.loading
//   //         ? <Loader></Loader>
//   //         : this.isFinished()
//   //           ? <h1>Finish</h1>
//   //          <React.Fragment>
//   //           <Row>
//   // <StreetView
//   //   mapStyle={this.mapContainerStyle}
//   //   address={this.props.locations.countryOne.value[this.state.activeQuestion].join('')}
//   //   APIkey={API_KEY}
//   //   streetView={true}
//   // />
//   //             <Versus></Versus>
//   // <StreetView
//   //   mapStyle={this.mapContainerStyle}
//   //   address={this.props.locations.countryTwo.value[this.state.activeQuestion].join('')}
//   //   APIkey={API_KEY}
//   //   streetView={true}
//   // />

//   //             {/* <h1>Question: {this.state.activeQuestion}</h1>
              // <StreetView
              //   mapStyle={this.mapContainerStyle}
              //   address={'45.019389024362816, 39.20471115338716'}
              //   APIkey={API_KEY}
              //   streetView={true}
              // /> */}
//   //           </Row>
//   // <Row>
//   //   <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
//   //     <CSSTransition
//   //       in={this.state.toggle1}
//   //       timeout={500}
//   //       classNames='os'
//   //     >
//   //       <Button variant="primary" onClick={() => { this.incFirst() }} style={modalButton}></Button>
//   //     </CSSTransition>
//   //     <CSSTransition
//   //       in={this.state.toggle2}
//   //       timeout={500}
//   //       classNames='as'
//   //     >
//   //       <Button variant="primary" onClick={() => { this.incSecond() }} style={modalButton2}></Button>
//   //     </CSSTransition>
//   //   </div>
//   // </Row>
//   //           <Row style={{ textAlign: 'center' }}><span>{this.state.activeQuestion + 1} of {this.props.locations.countryOne.length} Frame</span></Row>
//   //         </React.Fragment>
//   //       }
//   //     </div>
//   //   )
//   // }
//   async componentDidMount() {
//     const countryOne = localStorage.getItem('countryOne')
//     const countryTwo = localStorage.getItem('countryTwo')
//     await this.props.fetchLocations(countryOne, countryTwo)
//     await delay(1000)
//     this.setState({
//       loading: false
//     })
//     this.setState({
//       countryOne, countryTwo
//     })


//   }
//   componentWillUnmount() {
//     // this.props.fetchLocations()
//   }
// }
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