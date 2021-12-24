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

const APIkey = "AIzaSyBo6m4C52hgW-eRz-UKKh_yezXUN6gXHFw"



let Map1 = class Map1 extends React.Component {
  constructor(props) {
    
    super(props);
  }
  state = {
    center: {
      lat: this.props.lat,
      lng: this.props.lng,
    }
  };

  render() {
    console.log(this.props.lat)
    return (
      <div id="total">
        <LoadScriptNext key={APIkey}>
          <GoogleMap
            key={APIkey}
            visible={true}
            style={{ height: "600px", width: "100px" }}
          >
            <div style={{ height: "600px", width: "400px" }}>
              <StreetViewPanorama
                position={this.state.center}
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
    );
  }
};

export default Map1;
