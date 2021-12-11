import { GET_COUNTRIES_SUCCESS } from "../types"
import { START_LOADING } from "../types"
import { startLoading } from "./loadingAction"
import axios from 'axios'
export function fetchCountries(){
  return async dispatch => {
    const response = await axios.get('https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/countries.json')
    dispatch({type:GET_COUNTRIES_SUCCESS , payload: [...response.data]})
  }
}