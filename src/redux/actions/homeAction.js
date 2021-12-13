import { GET_COUNTRIES_SUCCESS } from "../types"
import { START_LOADING } from "../types"
import { HIDE_LOADING } from "../types"
import { SET_COMPARED_COUNTRIES } from "../types"
import axios from 'axios'
import { delay } from "../../dox"


export function fetchCountries() {
  return async dispatch => {
    dispatch({ type: START_LOADING })
    const response = await axios.get('https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/countries.json')
    // await delay(500)
    dispatch({ type: GET_COUNTRIES_SUCCESS, payload: [...response.data] })
    dispatch({ type: HIDE_LOADING })
  }
}
export function setComparedCountries(countryOne,countryTwo) {
  return async dispatch => {
    dispatch({ type: SET_COMPARED_COUNTRIES ,payload:[countryOne,countryTwo]})
  }
}
