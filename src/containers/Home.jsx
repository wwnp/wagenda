import React, { useContext, useEffect, useRef } from 'react'
import { CountryContex } from '../contex/contex';
import carItem2 from '../assets/images/carItem2.png'
import carItem3 from '../assets/images/carItem3.jpg'
import game1 from '../assets/images/game1.jpg'
import game3 from '../assets/images/game3.jpg'
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
const cc2Img = 'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__480.jpg'
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

export default function Home(props) {
  const {
    changeMenu,
    menu,
  } = useContext(CountryContex)

  const settings = {
    // dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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

  return (
    <div style={{ overflow: 'hidden' }}>
      <div className='container'>
        <main className='main-home box-shadowed'>
          <Header></Header>

          {/* CAROUSEL */}
          <section className='section-odd' ref={carouselRef}>
            <Slider {...settings} >
              <motion.div
                className='slide slide-bg'
              >
                <motion.div
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}
                  transition={{
                    delay: 0,
                    duration: 1,
                    type: 'tween',
                    ease: 'easeInOut'
                  }}
                  className="slide-caption"
                >
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
                </motion.div>
                <img src={carItem3} alt="carItem1" />
              </motion.div>
              <div className='slide' >
                <div className="slide-caption">Enjoy diversity ot this world</div>
                <img src={carItem2} alt="carItem2" />
              </div>
            </Slider>
          </section>

          {/* TRAVEL */}
          <motion.section
            className='container section-odd'
            initial='hidden'
            whileInView='visible'
          >
            <div className="row flex-wrap">
              <div className="col-12 col-md-6 d-flex justify-center">
                <motion.img
                  variants={scrollLeftXVarians}
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
                  className='travel-img'
                  src={travel}
                  alt="travel"
                />
              </div>

              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: .5, once: true }}
                className="col-12 col-md-6 d-flex flex-column align-center justify-center border-left travel-section"
              >
                <motion.h2
                  className='display-6 display-md-4 display-lg-2 text-center'
                  variants={scrollRightXVarians}
                  custom={1}
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
            </div>

          </motion.section>

          {/* CONTR */}
          <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='container section-even'
          >
            <motion.h2
              className='text-center title-section text-white display-6 display-sm-4 display-lg-2'
              variants={titlesVariants}
            >
              Contributions
            </motion.h2>

            <motion.div
              className='row flex-wrap justify-center '
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
                      className={'col-12 col-sm-6 col-md-3'}
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
                          opacity: 0.7,
                        }}

                        whileHover={{
                          scale: 1.2,
                          opacity: 1
                        }}
                      >
                        <a className='contr-link' href={homeImages[item][1]} target={'_blank'} rel="noreferrer"><img style={{ objectFit: 'contain', width: '150px', height: '100px' }} src={homeImages[item][0]} alt={item[0]} /></a>

                      </motion.div>
                    </motion.div>
                  )
                })
              }
            </motion.div>
          </motion.section>

          {/* ABOUT */}
          <motion.section
            className='section-odd py-1'
            name='about'
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: .5, once: true }}
          >
            <div className="col-8 m-auto">
              <motion.h2
                className='text-center title-section text-white display-3'
                variants={titlesVariants}
              >
                About Project
              </motion.h2>
              <div className='container'>
                <AccordionItem title='What about our service?'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </AccordionItem>
                <AccordionItem title='Is Wagenda free to play?'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </AccordionItem>
              </div>
            </div>

          </motion.section>

          {/* GAMES */}
          <motion.section
            name='games'
            className='container section-even py-1'
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: .5, once: true }}
          >
            <motion.h2
              className='text-center title-section text-white display-3'
              variants={titlesVariants}
            >
              Our Games
            </motion.h2>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: .5, once: true }}
              className='row justify-center row-gap-2'
            >
              <MCard
                whileHover={{
                  scale: 1.05,
                  transition: { duration: .3 },
                }}
                variants={gamesAnimation}
                custom={1}
                cardHeight={cardHeight}
                linkName={'countrycomparer'}
                title={'Country Comparer'}
                // srcImage={ccImg}
                srcImage={game1}
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
                srcImage={cc2Img}
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
                srcImage={game3}
                isDisabled={true}
                btnColor={'secondary'}
              >
              </MCard>
            </motion.div>
          </motion.section>

          <Footer></Footer>
        </main>
      </div>
      <ToTop ref={toTOpRef} toTopHandler={() => animateScroll.scrollToTop({ duration: 200 })}></ToTop>
    </div >
  )
}