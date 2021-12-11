import React from "react";
import { GoogleMap, LoadScript, LoadScriptNext, useGoogleMap, StreetViewPanorama } from "@react-google-maps/api";
import asyncLoading from "react-async-loader";
// import GoogleStreetview from "react-google-streetview";
import classes from './Map.module.scss'
import API_KEY from '../../dox'
import Streetview from 'react-google-streetview';
const APIkey = "AIzaSyBo6m4C52hgW-eRz-UKKh_yezXUN6gXHFw"
export default class Map extends React.Component {
  render(){
    console.log(typeof Streetview)
    const fenway = { lat: 42.345573, lng: -71.098326 };
    // const panorama = Streetview(
    //   document.getElementById("pano"),
    //   {
    //     position: fenway,
    //     pov: {
    //       heading: 34,
    //       pitch: 10,
    //     },
    //   }
    // )
    return (
      <div></div>
    )
  }
}
// export default class Map extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     const center = {
//       lat: this.props.lat,
//       lng: this.props.lng
//     };
//     return (
//       <div className={classes.Map_item} id="total">
//         <LoadScriptNext key={APIkey}>
//           <GoogleMap
//             key={APIkey}
//             visible={true}
//             style={{ height: this.props.heightMap, width: "100%" }}
//           >
//             <div style={{ height: this.props.heightMap, width: "100%" }}>
//               <StreetViewPanorama
//                 position={center}
//                 enableCloseButton={false}
//                 linksControl={false}
//                 addressControl={true}
//                 visible={true}
//                 onLoad={(e) => {}}
//                 motionTracking={true}
//                 motionTrackingControl={true}
//               />
//             </div>
//           </GoogleMap>
//         </LoadScriptNext>
//       </div>
//     );
//   }
// };
