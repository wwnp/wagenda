import { GET_COUNTRIES_SUCCESS } from "../types";
import { GET_COUNTRIES_ERROR } from "../types";
import { START_LOADING } from "../types";
const initialState = {
  countries: [],
  loading:false
}
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true }
    case GET_COUNTRIES_SUCCESS:
      return { ...state, countries: action.payload }
    case GET_COUNTRIES_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}