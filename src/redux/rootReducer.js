import { combineReducers } from 'redux'
import { testReducer } from "./reducers/testReducer"
import { homeReducer } from "./reducers/homeReducer"
import { loadingReducer } from "./reducers/loadingReducer"
export default combineReducers({
  test: testReducer,
  home: homeReducer,
  loading: loadingReducer,
})