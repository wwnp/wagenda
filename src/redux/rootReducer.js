import { combineReducers } from 'redux'
import { homeReducer } from "./reducers/homeReducer"
import { loadingReducer } from "./reducers/loadingReducer"
import { compareReducer } from './reducers/compareReducer'
export default combineReducers({
  home: homeReducer,
  loading: loadingReducer,
  compare: compareReducer
})