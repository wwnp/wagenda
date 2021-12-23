import React, { Component } from 'react'
import classes from './Layout.module.css'
import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';
import VideoPlayer from "react-background-video-player";
import video from '../../1.mp4'
import { Video } from '../Video/Video';
export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Video></Video> */}
        {/* <VideoPlayer
          className="video"
          src={
            // "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
            video
          }
          autoPlay={true}
          muted={true}
        /> */}
        <div className={classes.Layout}>

          <Header></Header>
          <Container fluid>
            {this.props.isMobile
              ? <div className="text-center"><h1>Unavailable on mobile version</h1></div>
              : <Outlet></Outlet>
            }
          </Container>
          <Footer></Footer>
        </div>
      </React.Fragment>
    )
  }
}