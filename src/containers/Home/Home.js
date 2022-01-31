import React, { useContext, useEffect, useRef } from 'react'
import { Col, Button, Carousel, Container, Row, Card, NavLink, Accordion } from 'react-bootstrap';
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
const cardHeight = 175
// eslint-disable-next-line react-hooks/exhaustive-deps
const useMountEffect = fun => useEffect(fun, []);
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

  const settings = {
    // dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 42222000,
    pauseOnHover: true,
    cssEase: "linear",
    arrows: false
  };
  useEffect(() => {
    // carouselRef.current.style.marginTop = headerRef.current.clientHeight + 'px'
    // window.onscroll = function() {
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
    // console.log(carouselRef.current.innerSlider.list.offsetHeight)
    // async function fetchData() {
    //   const response = await axios.get('https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/countries.json')
    //   const { data } = response
    //   setCountries(data)
    //   stopLoading()
    // }
    // fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gamesRef = useRef(null)
  const executeScroll = () => gamesRef.current.scrollIntoView();
  useMountEffect(executeScroll)
  const scrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <Container>
      <main>
        <Header innerRef={headerRef}></Header>
        <>
          <Slider {...settings} ref={carouselRef}>
            <div className='slide slide-bg' >
              <div className="slide-caption">
                <h3>Welcome to</h3>
                <h1>Country Gesser</h1>
                <p>To begin select the guessing game <button className='btn btn-dark btn-sm' onClick={() => scrollTo(gamesRef)}>Below</button></p>
              </div>
              <img src={carItem3} alt="carItem1" />
            </div>
            <div className='slide' >
              <div className="slide-caption">Text for slide 2</div>
              <img src={carItem2} alt="carItem2" />
            </div>
          </Slider>
        </>

        <section className='bg-dark-darker py-3' style={{ height: '200px' }}>
          <Container className=''>
            <h2 className='text-center mb-3 title-section text-white'>Contributions</h2>
          </Container>
        </section>
        <section className='bg-dark-lighten py-3'>
          <Container className=''>
            <h2 className='text-center mb-4 title-section text-white'>Our Games</h2>
            <Row >
              <Col sm={12} md={4} className='mb-5'>
                <Card >
                  <Card.Img variant="top" height={cardHeight} src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/273-mckinsey-139.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=59ed361046f1f9981077b030f532c6c5" />
                  <Card.Body style={{ padding: '0' }} >
                    <Link to='/countrycomparer' className='btn btn-large btn-success btn-guesser-activated text-uppercase' style={{ width: '100%' }}>Country Comparer</Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={4} className='mb-5'>
                <Card>
                  <Card.Img variant="top" height={cardHeight} src="https://cdn.pixabay.com/photo/2012/01/09/09/59/earth-11595__340.jpg" />
                  <Card.Body style={{ padding: '0' }}>
                    <Link to='/geoguesser' className='btn btn-large btn-dark  text-uppercase disabled' style={{ width: '100%' }}>Geo Guesser</Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={4}>
                <Card>
                  <Card.Img variant="top" height={cardHeight} src="https://image.freepik.com/free-vector/realistic-construction-sign-background_23-2148165508.jpg" />
                  <Card.Body style={{ padding: '0' }}>
                    <Link to='/countrycomparer' className='btn btn-large btn-dark  text-uppercase disabled' style={{ width: '100%' }} disabled >Coming Soon</Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='bg-dark-darker py-3' ref={gamesRef}>
          <h2 className='text-center mb-4 title-section text-white'>About Project</h2>
          <Container className=''>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </section>

      </main>
    </Container>
  )
}
