import { useState, useEffect } from "react"
const CAPITAL = 'capital'
const PROVINCE = 'province'
export function HookCountySetter() {
  const [countryOne, setCountryOne] = useState(null)
  const [countryTwo, setCountryTwo] = useState(null)
  const [typeRadio, setTypeRadio] = useState(CAPITAL)
  return {
    countryOne,
    countryTwo,
    setCountryOne,
    setCountryTwo,
    typeRadio,
    setTypeRadio
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
      setCountryOne({ country, el: event.target })
    } else if (!countryTwo && country !== countryOne.country) {
      setCountryTwo({ country, el: event.target })
    }
  }
}
export function resetCountries(event, props) {
  event.preventDefault()
  const {
    countryOne,
    countryTwo,
    setCountryOne,
    setCountryTwo,
    setTypeRadio
  } = props
  if (countryOne !== null) {
    console.log(123)
    countryOne.el.classList.remove('active')
  }
  if (countryTwo !== null) {
    countryTwo.el.classList.remove('active')
  }
  setCountryOne(null)
  setCountryTwo(null)
  setTypeRadio(CAPITAL)
}