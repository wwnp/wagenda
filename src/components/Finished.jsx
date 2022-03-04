import React from "react"
import { Row, Col } from "react-bootstrap"
import usawin from '../../images/usawin.jpg'
import { Background } from "../Background/Background"
export function Finished() {
  return (
    <React.Fragment>
      <Background>
      </Background>
      <Row style={{position:'relative', zIndex:1}}>
        <Col style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2 className="text-center">USA wins!</h2>
          <img src={'https://c.tenor.com/gWF4fqRBaOsAAAAC/putin.gif'} alt="" style={{ width: '100%', height: '250px' }} />
        </Col>
      </Row>
    </React.Fragment>
  )
}