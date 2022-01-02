import { GET_LOCATIONS_SUCCESS } from "../types"
import { GET_LOCATIONS_ERROR } from "../types"
// import { START_LOADING } from "../types"
// import { HIDE_LOADING } from "../types"
// import { delay } from "../../dox"
export function fetchLocations(countryOne, countryTwo) {
  return async dispatch => {
    try {
      // dispatch({ type: START_LOADING })
      dispatch({
        type: GET_LOCATIONS_SUCCESS,
        payload: {
          countryOne: {
            name: countryOne, value: [['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716']]
          },
          countryTwo: {
            name: countryTwo, value: [['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716'], ['45.019389024362816, 39.20471115338716']]
          },
        }
      })
      // await delay(1500)
      // dispatch({ type: HIDE_LOADING })
    } catch (error) {
      console.log(error)
    }

  }
}