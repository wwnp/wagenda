import { GET_COUNTRIES_SUCCESS } from "../types";
import { GET_COUNTRIES_ERROR } from "../types";
const initialState = {
  countries: [],
}
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES_SUCCESS:
      return { ...state, countries: action.payload }
    case GET_COUNTRIES_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}