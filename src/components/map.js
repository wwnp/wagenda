import React from "react";
import {
  GoogleMap,
  LoadScript,
  LoadScriptNext,
  useGoogleMap,
  StreetViewPanorama
} from "@react-google-maps/api";
import asyncLoading from "react-async-loader";
import GoogleStreetview from "react-google-streetview";

const APIkey = "AIzaSyBo6m4C52hgW-eRz-UKKh_yezXUN6gXHFw";

const center = {
  lat: 37.5247596,
  lng: -122.2583719
};
const center2 = {
  lat: 48.0015179650875,
  lng: 37.82428179890636
};

let Map1 = class Map1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    console.log(this.props)
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
                  position={this.props.testArrOne[this.props.currTest]}
                  enableCloseButton={false}
                  linksControl={false}
                  addressControl={true}
                  visible={true}
                  onLoad={(e) => { }}
                  motionTracking={true}
                  motionTrackingControl={true}
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
                  position={this.props.testArrTwo[this.props.currTest]}
                  enableCloseButton={false}
                  linksControl={false}
                  addressControl={true}
                  visible={true}
                  onLoad={(e) => { }}
                  motionTracking={true}
                  motionTrackingControl={true}
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
