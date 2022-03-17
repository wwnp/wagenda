import React from "react";
import { motion } from 'framer-motion';
import {
  GoogleMap,
  LoadScriptNext,
  StreetViewPanorama
} from "@react-google-maps/api";
const APIkey = process.env.REACT_APP_API_KEY2;
// const APIkey = "AIzaSyBo6m4C52hgW-eRz-UKKh_yezXUN6gXHFw";
let Map1 = class Map1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="total" className="d-flex" style={{
        minHeight:750
      }}>
        <motion.div
          initial={{
            opacity: 0
          }}
          transition={{
            duration: 2
          }}
          animate={{
            opacity: 1
          }}
          className="col-6"
        >
          <LoadScriptNext key={APIkey}>
            <GoogleMap
              key={APIkey}
              visible={false}
              style={{ height: "750px", width: "400px" }}
            >
              <div style={{ height: "750px", width: "400px" }}>
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
            duration: 2
          }}
          animate={{
            opacity: 1
          }} 
          className="col-6"
        >
          <LoadScriptNext key={APIkey}>
            <GoogleMap
              key={APIkey}
              visible={false}
              style={{ height: "750px", width: "400px" }}
            >
              <div style={{ height: "750px", width: "400px" }}>
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
