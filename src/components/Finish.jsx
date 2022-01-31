import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
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
    <div >
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={4}>
            <div className="card">
            winner is {result}
            </div>
            <canvas id="tutorial" width="150" height="150">123</canvas>
          </Col>
        </Row>
      </Container>
    </div >
  )
}