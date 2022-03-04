import React, { useContext, useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { CountryContex } from '../contex/contex';
import carItem2 from '../assets/images/carItem2.png'
import carItem3 from '../assets/images/carItem3.jpg'
import carItem4 from '../assets/images/bgWorld.png'
import Slider from "react-slick";
import Header from '../components/Header';
import { ToTop } from '../components/ToTop';
import { animateScroll, Link as ScrollLink } from "react-scroll";
import Footer from '../components/Footer';
import { homeImages } from '../config';
import AccordionItem from '../components/AccordionItem';
import { motion } from 'framer-motion';
import { MCard } from '../components/Card';
import travel from '../assets/images/travel.png'
import { Link } from 'react-router-dom';

const cardHeight = 175
const ccImg = 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/273-mckinsey-139.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=59ed361046f1f9981077b030f532c6c5'

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
  const contrVarians = {
    hidden: {
      x: '-100vw',
      opacity: 0
    },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: custom * 0.2
      },
      x: 0
    })
  }
  const scrollLeftXVarians = {
    hidden: {
      x: '-100vw',
      opacity: 0
    },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: custom * 0.2
      },
      x: 0
    })
  }
  const scrollRightXVarians = {
    hidden: {
      x: '100vw',
      opacity: 0
    },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: custom * 0.2
      },
      x: 0
    })
  }
  const gamesAnimation = {
    hidden: {
      x: '100vw',
      opacity: 0
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * .25
      }
    }),
  }
  const titlesVariants = {
    hidden: {
      y: '-100vw',
      opacity: 0
    },
    visible: (index) => ({
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.6
      },
      y: 0
    })
  }
  const opacityVariants = {
    hidden: {
      opacity: 0
    },
    visible: (index) => ({
      opacity: 1,
      transition: {
        duration: .5,
      },
    })
  }
  return (
    <div style={{ overflow: 'hidden' }}>
      <div className='container'>
        <main className='main-home box-shadowed'>
          <Header></Header>

          {/* CAROUSEL */}
          <section className='section-odd' ref={carouselRef}>
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
          </section>

          {/* TRAVEL */}
          <motion.section
            className='section-odd d-flex'
            // className='d-flex travel-section'

            // style={{
            //   background:'var(--colors-bg-grad)',
            //   // background:'linear-gradient(90deg, #080911 0%, #0d0d16 54%, rgba(5,0,15,1) 100%)'
            // }}
            style={{
              minHeight: 500
            }}
          >
            <div className="col-travel">
              <motion.img
                variants={opacityVariants}
                animate={{
                  rotate: 360
                }}
                transition={{
                  delay: 0,
                  duration: 30,
                  repeat: Infinity,
                  repeatDelay: 0,
                  repeatType: 'reverse',
                  type: 'tween',
                  ease: 'easeInOut'
                }}

                width={'100%'}
                src={travel}
                alt="travel"
              />
            </div>

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: .5, once: true }}
              className="col-travel d-flex flex-column align-center justify-center border-left travel-section"
            >
              <motion.h2
                variants={scrollRightXVarians}
                custom={1}
                style={{
                  fontSize: '2rem'
                }}
              >
                Compare places around the world
              </motion.h2>
              <motion.div
                variants={scrollLeftXVarians}
                custom={2}

              >
                <Link
                  to={'/countrycomparer'}
                  className={`btn btn-large btn-success`}
                >
                  Start compare
                </Link>
              </motion.div>

            </motion.div>
          </motion.section>

          {/* CONTR */}
          <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='contrs container section-even'
          >
            <motion.h2
              className='text-center mb-3 title-section text-white'
              variants={titlesVariants}
            >
              Contributions
            </motion.h2>
            <motion.div
              className='d-flex flex-wrap justify-center'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              {
                Object.keys(homeImages).map((item, index) => {
                  return (
                    <motion.div
                      variants={contrVarians}
                      custom={index}
                      key={item}
                      className={'col-contr text-center'}
                      style={{
                        paddingBottom: '3rem',
                      }}
                    >
                      <motion.div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '100%',
                          opacity: 0.4
                        }}

                        whileHover={{
                          scale: 1.2,
                          opacity: 1
                        }}
                      >
                        <a href={homeImages[item][1]} target={'_blank'} rel="noreferrer"><img width={100} src={homeImages[item][0]} alt={item[0]} /></a>
                      </motion.div>
                    </motion.div>
                  )
                })
              }
            </motion.div>
          </motion.section>

          {/* GAMES */}
          <motion.section
            name='games'
            className='container section-odd py-1'
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: .5, once: true }}
          >
            <motion.h2
              className='text-center title-section text-white'
              variants={titlesVariants}
            >
              Our Games
            </motion.h2>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: .5, once: true }}
              className='cards'
            >
              <MCard
                variants={gamesAnimation}
                custom={1}
                cardHeight={cardHeight}
                linkName={'countrycomparer'}
                title={'Country Comparer'}
                srcImage={ccImg}
                isDisabled={false}
                btnColor={'success'}
              >
              </MCard>
              <MCard
                variants={gamesAnimation}
                custom={2}
                cardHeight={cardHeight}
                linkName={'geogesser'}
                title={'Geo Gesser'}
                srcImage={ccImg}
                isDisabled={true}
                btnColor={'secondary'}
              >
              </MCard>
              <MCard
                variants={gamesAnimation}
                custom={3}
                cardHeight={cardHeight}
                linkName={'/'}
                title={'Under Development'}
                srcImage={ccImg}
                isDisabled={true}
                btnColor={'secondary'}
              >
              </MCard>
            </motion.div>
          </motion.section>

          {/* ABOUT */}
          <motion.section
            className='section-even py-1'
            name='about'
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: .5, once: true }}
          >
            <motion.h2
              className='text-center mb-4 title-section text-white'
              variants={titlesVariants}
            >
              About Project
            </motion.h2>
            <div className='container'>
              <AccordionItem title='What about our service'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </AccordionItem>
              <AccordionItem title='What about our service'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </AccordionItem>
            </div>
          </motion.section>
          
          <Footer></Footer>
        </main>
      </div>
      <ToTop ref={toTOpRef} toTopHandler={() => animateScroll.scrollToTop({ duration: 200 })}></ToTop>
    </div>
  )
}