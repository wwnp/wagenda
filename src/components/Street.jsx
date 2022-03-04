import React from 'react'
import { StreetView } from 'react-google-map-street-view'
const APIkey = "AIzaSyBo6m4C52hgW-eRz-UKKh_yezXUN6gXHFw"
const Street = props => {
  const { loc, activeQuestion } = props
  return (
    <StreetView
      address={loc[activeQuestion]}
      // address={locOne[activeQuestion]}
      APIkey={APIkey}
      streetView
      // zoomLevel={15}
      // mapStyle={mapContainerStyle}
    />
  )
}
export default Street