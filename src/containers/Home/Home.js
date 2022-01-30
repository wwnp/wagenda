import React, { useContext, useEffect, useRef } from 'react'
import { Col, Button, Carousel, Container, Row, Card, NavLink } from 'react-bootstrap';
import { countriesFlags } from '../../countriesFlags';
import { CSSTransition } from 'react-transition-group';
// import classes from './Home.module.css'
import Loader from '../../components/Loader/Loader'
import CountryButton from '../../components/CountryButton/CountryButton';
import noImage from '../../images/noImage.png'
import { Video } from '../../components/Video/Video'
import { Link, useNavigate } from "react-router-dom"
import { CAPITAL, CountryContex, PROVINCE } from './../../contex/contex';
import axios from 'axios';
import carItem1 from '../../images/carItem1.jpg'
import carItem2 from '../../images/carItem2.png'
import carItem3 from '../../images/carItem3.jpg'
import SimpleSlider from '../../components/SimpleSlider';
import Slider from "react-slick";
import Header from './../../components/Header/Header';
export default function Home(props) {
  const {
    // setCountries,
    // countries,
    // loading,
    // stopLoading,
    // setOneCountry,
    // setTwoCountry,
    // oneCountry,
    // twoCountry,
    // resetCountries,
    // radioType,
    // changeRadioType,
    // addElToDom,
    changeMenu,
    menu
  } = useContext(CountryContex)
  const headerRef = useRef(null)
  const carouselRef = useRef(null)
  // const navigate = useNavigate()
  useEffect(() => {
    // carouselRef.current.style.marginTop = headerRef.current.clientHeight + 'px'
    // window.onscroll = function() {
    //   console.log(window.scrollY)
    //   myFn()
    // };
    // function myFn(){
    //   if(window.scrollY > carouselRef.current.clientHeight){
    //     headerRef.current.classList.add('sticky')
    //   }else {
    //     headerRef.current.classList.remove('sticky')
    //   }
    // }
    if (menu === true) {
      changeMenu(!menu)
    }
    // async function fetchData() {
    //   const response = await axios.get('https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/countries.json')
    //   const { data } = response
    //   setCountries(data)
    //   stopLoading()
    // }
    // fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const countryBtnHandler = (event) => {
  //   event.preventDefault()
  //   const country = event.target.dataset.country
  //   if (!oneCountry || !twoCountry) {
  //     if (!oneCountry) {
  //       addElToDom(event.target)
  //       setOneCountry(country)
  //     } else if (!twoCountry && country !== oneCountry) {
  //       addElToDom(event.target)
  //       setTwoCountry(country)
  //     }
  //   }
  // }
  // const resetBtnHandler = () => {
  //   resetCountries()
  // }
  // const beforeCompare = (event) => {
  //   event.preventDefault()
  //   if (!(oneCountry, twoCountry)) {
  //     alert('Choose countries!')
  //   } else {
  //     localStorage.setItem('countryOne', oneCountry)
  //     localStorage.setItem('countryTwo', twoCountry)
  //     navigate('/compare')
  //   }
  // }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    cssEase: "linear",
    arrows: false
  };
  return (
    <main>
      <Header innerRef={headerRef}></Header>
      <div ref={carouselRef} style={{ paddingBottom: '20px', borderTop: '1px solid #ccc' }}>
        <Slider {...settings} >
          <div>

            <div style={{ position: 'relative' }}>
              <img src={carItem1} alt="" />
              <button className="btn btn-success btn-large" style={{
                position: 'absolute',
                bottom: '20%',
                left: '33.5%',
                transform: 'translateX(-50%)',
                textTransform: 'uppercase'
              }}
              >
                В каталог
              </button>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <img src={carItem2} alt="" />

          </div>
          <div style={{ position: 'relative' }}>
            <img src={carItem3} alt="" />
          </div>
        </Slider>
      </div>
      <Container style={{ paddingTop: '20px', borderTop: '1px solid #ccc' }}>
        <Row>
          <Col xs={4}>
            <Card >
              <Card.Img variant="top" height={191} src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/273-mckinsey-139.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=59ed361046f1f9981077b030f532c6c5" />
              <Card.Body style={{ padding: '0' }}>
                <Link to='/countrycomparer' className='btn btn-large btn-success text-uppercase' style={{ width: '100%' }}>Country Comparer</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <Card.Img variant="top" height={191} src="https://cdn.pixabay.com/photo/2012/01/09/09/59/earth-11595__340.jpg" />
              <Card.Body style={{ padding: '0' }}>
                <Link to='/geoguesser' className='btn btn-large btn-primary text-uppercase disabled' style={{ width: '100%' }}>Geo Guesser</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <Card.Img variant="top" height={191} src="https://image.freepik.com/free-vector/realistic-construction-sign-background_23-2148165508.jpg" />
              <Card.Body style={{ padding: '0' }}>
                <Link to='/countrycomparer' className='btn btn-large btn-dark text-uppercase disabled' style={{ width: '100%' }} disabled >Coming Soon</Link>
              </Card.Body>
            </Card>
          </Col>


        </Row>
      </Container>
    </main>
  )
}
