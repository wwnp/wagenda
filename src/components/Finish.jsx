import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { urlYoutube } from '../config';
import { motion } from 'framer-motion';
export const Finish = props => {
  const {
    countryOne,
    countryTwo,
    counterFirst,
    counterSecond,
  } = props
  let result = null
  if (counterFirst > counterSecond) {
    result = countryOne
  }
  if (counterSecond > counterFirst) {
    result = countryTwo
  }
  if (counterSecond === counterFirst) {
    result = 'Draw'
  }
  return (
    < >
      <div className='container'>
        <div className="d-flex justify-center pt-3">
          <div className='col-8'>
            <div
              className="finish-block text-center"
            >
              <motion.h1
                initial={{
                  opacity: 0,
                  x: '-100vw'
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  delay: .25,
                  duration: .5
                }}
                className="display-5 fw-bold py-5 border-bottom"
              >
                {
                  result === 'Draw'
                    ? 'Draw. Make love,not war!'
                    : `${result} wins. Congratulations!`
                }
              </motion.h1>
              <motion.div
                initial={{
                  x: '100vw',
                  opacity: 0
                }}
                animate={{
                  x: 0,
                  opacity: 1
                }}
                transition={{
                  delay: .5,
                  duration: .5
                }}
                className="d-grid gap-2 d-sm-flex justify-content-sm-center "
              >
                <Link to={'/countrycomparer'} className={'btn btn-success btn-lg my-2'}>Back</Link>
              </motion.div>

              <motion.div
                initial={{
                  x: '-100vw',
                  opacity: 0
                }}
                animate={{
                  x: 0,
                  opacity: 1
                }}
                transition={{
                  delay: .75,
                  duration: .5
                }}
              >
                <iframe
                  className={'youtubeVid'}
                  width="100%"
                  height="315"
                  src={urlYoutube[result.toLowerCase()]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                >
                </iframe>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </ >
  )
}