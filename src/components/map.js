import React from "react";
import {
  GoogleMap,
  // LoadScript,
  LoadScriptNext,
  // useGoogleMap,
  StreetViewPanorama
} from "@react-google-maps/api";
// import asyncLoading from "react-async-loader";
// import GoogleStreetview from "react-google-streetview";
const APIkey = "AIzaSyBo6m4C52hgW-eRz-UKKh_yezXUN6gXHFw";
let Map1 = class Map1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="total" className="d-flex" >
        <div className="col-6">
          <LoadScriptNext key={APIkey}>
            <GoogleMap
              key={APIkey}
              visible={false}
              style={{ height: "600px", width: "400px" }}
            >
              <div style={{ height: "600px", width: "400px" }}>
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
        </div>
        <div className="col-6">
          <LoadScriptNext key={APIkey}>
            <GoogleMap
              key={APIkey}
              visible={false}
              style={{ height: "600px", width: "400px" }}
            >
              <div style={{ height: "600px", width: "400px" }}>
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
        </div>

      </div>
    );
  }
};

export default Map1;
