// import React from "react";
// import { GoogleMap, LoadScript, LoadScriptNext, useGoogleMap, StreetViewPanorama } from "@react-google-maps/api";
// import asyncLoading from "react-async-loader";
// import GoogleStreetview from "react-google-streetview";
// import classes from './Map.module.scss'

// const APIkey = "AIzaSyAxXsR827fDGJFMQjR1vNw7ATk9W06rTOU"
// const center = {
//   lat: 48.79230022117918,
//   lng: 2.5016405018581285
// };
// let Map2 = class Map2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className={classes.Map_item} id="total2">
//         <LoadScriptNext key={APIkey}>
//           <GoogleMap
//             key={APIkey}
//             visible={true}
//             style={{ height: "600px", width: "100%" }}
//           >
//             <div style={{ height: "600px", width: "100%" }}>
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

// export default Map2;
