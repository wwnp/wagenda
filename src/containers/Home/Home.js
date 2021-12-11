import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { countriesFlags } from '../../countriesFlags';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import classes from './Home.module.css'
import { fetchCountries } from '../../redux/actions/homeAction';
import { delay } from '../../dox';
import { startLoading, hideLoading } from '../../redux/actions/loadingAction';
import Loader from '../../components/Loader/Loader'
const Home = (props) => {
  console.log(props)
  const [inProp, setInProp] = useState(true);
  const [choosedContries, setCountries] = useState([])
  const modalButton = {
    // backgroundImage: 'url(' + countriesFlags.france + ')',
    backgroundSize: 'contain',
    height: '79px',
    width: '119px',
    backgroundRepeat: 'no-repeat',
    marginLeft: '10px',
    marginRight: '10px',
  }
  const chooseHandler = (e) => {
    if (choosedContries.length >= 2) {
      choosedContries.push(e.target.dataset.country)
    } else {
      choosedContries.push(e.target.dataset.country)
    }
  }
  const duration = 500;

  const test = (e) => {
    const targetCountry = e.target.dataset.country
    if (targetCountry) {
      console.log(targetCountry)
    }
  }

  useEffect(() => {
    (async () => {
      props.startLoading()
      await delay(800)

      props.fetchCountries()

      props.hideLoading()
    })()
  }, [])
  return (
    <Container>
      <h1 className='text-center'>Choose two countries to compare:</h1>

      {props.loading
        ? <Loader></Loader>
        : <form className={classes.formCountries} onClick={(e) => test(e)}>
          {props.countries.map((country, index) => {
            return <Col
              key={index}
              xs='4'
              className='text-center my-5'
            >
              <CSSTransition
                in={inProp}
                timeout={500}
                classNames='os'
              >
                {state => (
                  <Button
                    className={`${state}`}
                    style={modalButton}
                    data-country={country}
                  >
                    {country}
                  </Button>
                )}
              </CSSTransition>
            </Col>
          })}
        </form>
      }

      <button className='btn btn-secondary' onClick={() => setInProp(!inProp)}>
        Click to Enter
      </button>
      <Link to='/compare'>Compare</Link>
    </Container>
  )
}
function mapStateToProps(state) {
  return {
    test: state.test.test,
    countries: state.home.countries,
    loading: state.loading.loading,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchCountries: () => { dispatch(fetchCountries()) },
    startLoading: () => { dispatch(startLoading()) },
    hideLoading: () => { dispatch(hideLoading()) },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)