import { START_LOADING,HIDE_LOADING } from "../types";
const initialState = {
  loading: false,
}
export function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true }
    case HIDE_LOADING:
      return { ...state, loading: false }
    default:
      return state
  }
}