import React, { useContext, useEffect, useRef } from 'react'
import { Col, Container, Row, Card, Accordion } from 'react-bootstrap';
import { Link, } from "react-router-dom"
import { CountryContex, } from './../../contex/contex';
import carItem2 from '../../images/carItem2.png'
import carItem3 from '../../images/carItem3.jpg'
import carItem4 from '../../images/bgWorld.png'
import Slider from "react-slick";
import Header from './../../components/Header/Header';
import { ToTop } from './../../components/ToTop';
import { animateScroll, Link as ScrollLink } from "react-scroll";
import react from '../../images/react.png'
import axios from '../../images/axios.png'
import rboot from '../../images/rboot.png'
import stackOverflow from '../../images/stack-overflow.png'
import Footer from './../../components/Footer/Footer';


const cardHeight = 175
export default function Home(props) {
  const {
    changeMenu,
    menu
  } = useContext(CountryContex)
  const settings = {
    // dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
    arrows: false
  };
  const toTOpRef = useRef(null)
  const carouselRef = useRef(null)
  useEffect(() => {
    document.addEventListener('scroll', btnToTopHandler)

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
    function btnToTopHandler() {
      if (window.pageYOffset > carouselRef.current.offsetHeight) {
        toTOpRef.current.classList.remove('hide')
      } else {
        toTOpRef.current.classList.add('hide')
      }
    }
    return () => {
      document.removeEventListener('scroll', btnToTopHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container>
        <main >
          <Header ></Header>
          <div ref={carouselRef}>
            <Slider {...settings} >
              <div className='slide slide-bg' >
                <div className="slide-caption">
                  <h3>Welcome to</h3>
                  <h1><span className='lgbt'>W</span>agenda</h1>
                  <p>To begin select the guessing game
                    <ScrollLink
                      className='btn btn-dark btn-sm'
                      activeClass="active"
                      to="games"
                      smooth={true}
                      duration={200}
                      style={{
                        cursor: 'pointer',
                        marginLeft: '5px'
                      }}
                    >
                      Below
                    </ScrollLink>
                  </p>
                </div>
                <img src={carItem3} alt="carItem1" />
              </div>
              <div className='slide' >
                <div className="slide-caption">Text for slide 2</div>
                <img src={carItem2} alt="carItem2" />
              </div>
              <div className='slide' >
                <div className="slide-caption">Text for slide 2</div>
                <img src={carItem4} alt="carItem2" />
              </div>
            </Slider>
          </div>
          <section className='bg-dark-darker py-5 '>
            <Container>
              <h2 className='text-center mb-3 title-section text-white'>Contributions</h2>
              <Row>
                <Col xs={3} className={'text-center hoverable'}>
                  <a href="https://reactjs.org/" target={'_blank'} rel="noreferrer"><img width={100} src={react} alt="react" /></a>
                </Col>
                <Col xs={3} className={'text-center d-flex hoverable'}>
                  <a className='m-auto' href="https://github.com/axios/axios" target={'_blank'} rel="noreferrer"><img width={200} src={axios} alt="axios" /></a>
                </Col>
                <Col xs={3} className={'text-center hoverable'}>
                  <a href="https://react-bootstrap.netlify.app/getting-started/introduction/" target={'_blank'} rel="noreferrer"><img width={100} src={rboot} alt="rboot" /></a>
                </Col>
                <Col xs={3} className={'text-center hoverable'}>
                  <a href="https://stackoverflow.com/" target={'_blank'} rel="noreferrer"><img width={100} src={stackOverflow} alt="stackOverflow" /></a>
                </Col>
              </Row>
            </Container>
          </section>
          <section name='games' className='bg-dark-lighten py-3' >
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
          <section style={{ height: '30333px' }}></section>
          <section name='about' className='bg-dark-darker py-3' >
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
          <Footer></Footer>
        </main>
      </Container>
      <ToTop ref={toTOpRef} toTopHandler={() => animateScroll.scrollToTop({ duration: 200 })}></ToTop>
    </>
  )
}