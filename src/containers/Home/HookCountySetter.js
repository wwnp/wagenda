import { useState, useEffect } from "react"
const CAPITAL = 'capital'
const PROVINCE = 'province'
export function HookCountySetter() {
  const [countryOne, setCountryOne] = useState(null)
  const [countryTwo, setCountryTwo] = useState(null)
  return {
    countryOne,
    countryTwo,
    setCountryOne,
    setCountryTwo
  }
}
export function countryButtonHandler(event, props) {
  event.preventDefault()
  const {
    countryOne,
    countryTwo,
    setCountryOne,
    setCountryTwo
  } = props
  const country = event.target.dataset.country
  if (!countryOne) {
    setCountryOne(country)
  } else if (!countryTwo) {
    setCountryTwo(country)
  }
}