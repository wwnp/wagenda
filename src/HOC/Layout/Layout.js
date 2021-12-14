import React, { Component } from 'react'
import classes from './Layout.module.css'
import { Outlet } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header';
import { Container } from 'react-bootstrap';

export default class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header></Header>

        <Container fluid>

          <Outlet></Outlet>
        </Container>
        <Footer></Footer>
      </div>
    )
  }
}