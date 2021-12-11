import { TEST } from "../types";
const initialState = {
  test: 'test'
}
export function testReducer(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return { ...state, test: action.payload }
    default:
      return state
  }
}