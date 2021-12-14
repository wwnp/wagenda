import React, { Component } from 'react'
import classes from './Layout.module.css'
import { Outlet } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header';
import { Container } from 'react-bootstrap';
import video from '../../atoms.mp4'
import VideoPlayer from "react-background-video-player";
export default class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header></Header>

        <Container fluid>
          <VideoPlayer
            className="video"
            src={
              // "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
              video
            }
            autoPlay={true}
            muted={true}
          />
          <Outlet></Outlet>
        </Container>
        <Footer></Footer>
      </div>
    )
  }
}