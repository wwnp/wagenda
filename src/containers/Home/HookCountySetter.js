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
  if (!countryOne || !countryTwo) {
    event.target.classList.add('active')
    if (!countryOne) {
      setCountryOne({country,el:event.target})
    } else if (!countryTwo) {
      setCountryTwo({country,el:event.target})
    }
  }
}
export function resetCountries(event, props) {
  event.preventDefault()
  const {
    countryOne,
    countryTwo,
    setCountryOne,
    setCountryTwo
  } = props
  countryOne.el.classList.remove('active')
  countryTwo.el.classList.remove('active')
  setCountryOne(null)
  setCountryTwo(null)
}