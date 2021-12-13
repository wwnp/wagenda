import { GET_LOCATIONS_SUCCESS } from "../types"
import { GET_LOCATIONS_ERROR } from "../types"
const initialState = {
  locations: null
}
export function compareReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATIONS_SUCCESS:
      return { ...state, locations: action.payload }
    case GET_LOCATIONS_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}