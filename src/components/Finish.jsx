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
            <motion.div
              className="my-5 text-center finish-block"
              initial={{
                opacity:0,
                x:'-100vw'
              }}
              animate={{
                opacity:1,
                x:0
              }}
            >
              {/* <img className="d-block mx-auto mb-1" src="https://i.kym-cdn.com/photos/images/original/001/598/863/4cc.jpg" alt="" width="100%" height="400px" /> */}
              <h1 className="display-5 fw-bold py-5 border-bottom">{
                result === 'Draw'
                  ? 'Draw. Make love,not war!'
                  : `${result} wins. Congratulations!`
              }</h1>
              <div className="col-lg-12 mx-auto">
                <iframe className={'youtubeVid'} width="100%" height="315" src={urlYoutube[result.toLowerCase()]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center ">
                  <Link to={'/countrycomparer'} className={'btn btn-success btn-lg my-2'}>Back</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </ >
  )
}