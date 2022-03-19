import React from "react";
import { motion } from 'framer-motion';
import {
  GoogleMap,
  LoadScriptNext,
  StreetViewPanorama
} from "@react-google-maps/api";
const APIkey = process.env.REACT_APP_API_KEY2;
// const APIkey = "AIzaSyBo6m4C52hgW-eRz-UKKh_yezXUN6gXHFw";
const heightMap = '750px'
const widthMap = '100%'
let Map1 = class Map1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="total" className="d-flex" style={{
        minHeight:heightMap
      }}>
        <motion.div
          initial={{
            opacity: 0
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut'
          }}
          animate={{
            opacity: 1
          }}
          style={{
            width:'50%'
          }}
        >
          <LoadScriptNext key={APIkey}>
            <GoogleMap
              key={APIkey}
              visible={false}
              style={{ height: heightMap, width: widthMap }}
            >
              <div style={{ height: heightMap, width: widthMap }}>
                <StreetViewPanorama
                  position={this.props.ArrOne[this.props.currTest]}
                  enableCloseButton={false}
                  linksControl={false}
                  addressControl={false}
                  visible={true}
                  onLoad={(e) => { }}
                  motionTracking={false}
                  motionTrackingControl={false}
                />
              </div>
            </GoogleMap>
          </LoadScriptNext>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut'
          }}
          animate={{
            opacity: 1
          }} 
          style={{
            width:'50%'
          }}
        >
          <LoadScriptNext key={APIkey}>
            <GoogleMap
              key={APIkey}
              visible={false}
              style={{ height: heightMap, width: widthMap }}
            >
              <div style={{ height: heightMap, width: widthMap }}>
                <StreetViewPanorama
                  position={this.props.ArrTwo[this.props.currTest]}
                  enableCloseButton={false}
                  linksControl={false}
                  addressControl={false}
                  visible={true}
                  onLoad={(e) => { }}
                  motionTracking={false}
                  motionTrackingControl={false}
                />
              </div>
            </GoogleMap>
          </LoadScriptNext>
        </motion.div>
      </div>
    );
  }
};

export default Map1;
