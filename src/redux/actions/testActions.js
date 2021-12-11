import { TEST } from "../types"
export function testAction() {
  return dispatch => {
    dispatch({type:TEST})
  }
}