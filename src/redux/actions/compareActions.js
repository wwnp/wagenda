import { GET_LOCATIONS_SUCCESS } from "../types"
import { GET_LOCATIONS_ERROR } from "../types"
import { START_LOADING } from "../types"
import { HIDE_LOADING } from "../types"
import { delay } from "../../dox"
export function fetchLocations(countryOne, countryTwo) {
  console.log(countryOne)
  return async dispatch => {
    dispatch({ type: START_LOADING })
    
    dispatch({
      type: GET_LOCATIONS_SUCCESS,
      payload: {
        countryOne: {
          name: countryOne, value: [['52,11', '23,22'], ['12,21', '63,52']]
        },
        countryTwo: {
          name: countryTwo, value: [['12,21', '63,52'], ['52,11', '23,22']]
        },
      }
    })
    await delay(3500)
    dispatch({ type: HIDE_LOADING })
  }
}