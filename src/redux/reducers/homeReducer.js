import { GET_COUNTRIES_SUCCESS } from "../types";
import { GET_COUNTRIES_ERROR } from "../types";
import { SET_COMPARED_COUNTRIES } from "../types"
const initialState = {
  countries: [],
  comparedCountries: null
}
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES_SUCCESS:
      return { ...state, countries: action.payload }
    case GET_COUNTRIES_ERROR:
      return { ...state, error: action.error }
    case SET_COMPARED_COUNTRIES:
      return { ...state, comparedCountries: action.payload }
    // --------------------------------------------------

    default:
      return state
  }
}