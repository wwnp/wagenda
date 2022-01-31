import React from 'react'
import gotFrame from '../../images/got.jpg'
import bgGot from '../../images/bgGot.jpg'
import bgGot2 from '../../images/bg-got.jpg'
import customFace from '../../images/customFace.png'
import gotSnow from '../../images/gotSnow.jpg'
import gotItem from '../../images/gotItem.jpg'
import gotItem2 from '../../images/gotItem2.jpg'
import got from '../../images/got.jpg'
import tar from '../../images/tar.png'
import { Container, Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { style } from 'glamor'
const NotFound = props => {
  const items = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
  return (
    <div className={'NotFound bg-got h-100'}>
      {/* <h1>Page not Found</h1> */}
      {/* <Link to='/'>To Home</Link> */}
      <Container>

        <Row className='flex-wrap'>
          {
            items.map((item, index) => {
              let styles = null
              if (index === 3) {
                styles = {
                  redHoverbutton: style({
                    height: '466px',
                    width: ' 100%',
                    // transition: 'background .15s ease-in-out',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    background: `url(${gotSnow}) center center no-repeat`,
                    backgroundSize: '130px',
                    ":hover": {
                      background: `url(${customFace}) center center no-repeat`,
                      backgroundSize: '130px',
                    }
                  })
                }
              } else {
                styles = {
                  redHoverbutton: style({
                    height: '466px',
                    width: ' 100%',
                    // transition: 'background .15s ease-in-out',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    background: `url(${gotSnow}) center center no-repeat`,
                    backgroundSize: '130px',
                    ":hover": {
                      background: `url(${gotItem}) center center no-repeat`,
                      backgroundSize: '130px',
                    }
                  })
                }

              }
              return (
                <Col xs={12} md={4} lg={3} xl={2} style={{ padding: '0' }}>
                  <div className='card-wrapper' >
                    <div className="card-custom" {...styles.redHoverbutton}>
                      <h2>Daenerys Targaryen</h2>
                    </div>
                  </div>

                </Col>
              )
            })
          }
          {/* <Col xs={2} style={{ position: 'relative' }}>
            <div className="card-custom card-custom0" style={{ background: `url(${gotItem}) center center no-repeat `,backgroundSize:'contain' }}>
              <h2>Al Pacino</h2>
            </div>
          </Col>
          <Col xs={2} style={{ position: 'relative' }}>
            <div className="card-custom card-custom0" style={{ background: `url(${gotItem}) center center no-repeat`,backgroundSize:'contain' }}>
              <h2>Al Pacino</h2>
            </div>
          </Col> */}

        </Row>
      </Container>
      <img src={tar} className={'tar-logo'} alt='tar' />

    </div>
  )
}
export default NotFound