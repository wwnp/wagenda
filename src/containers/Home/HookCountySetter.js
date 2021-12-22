import { useState } from "react"
const CAPITAL = 'capital'
const PROVINCE = 'province'
export function HookCountySetter() {
  const [countryOne, setCountryOne] = useState(null)
  const [countryTwo, setCountryTwo] = useState(null)
  const [typeRadio, setTypeRadio] = useState(CAPITAL)
  const [loading, setLoading] = useState(true)
  const [testHits, setTestHits] = useState([])
  return {
    countryOne,
    countryTwo,
    typeRadio,
    loading,
    setCountryOne,
    setCountryTwo,
    setTypeRadio,
    setLoading,
    //
    testHits,
    setTestHits
  }
}