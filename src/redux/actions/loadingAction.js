import { START_LOADING } from "../types"
import { HIDE_LOADING } from "../types"
export function startLoading() {
  return {
    type: START_LOADING
  }
}
export function hideLoading() {
  return {
    type: HIDE_LOADING
  }
}