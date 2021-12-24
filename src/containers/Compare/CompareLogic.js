import axios from "axios"
import { useState, useEffect } from "react"
export function HookFetchLocation(props) {
  const countryOne = localStorage.getItem('countryOne')
  const countryTwo = localStorage.getItem('countryTwo')
  const [locOne, setLocOne] = useState([])
  const [locTwo, setLocTwo] = useState([])
  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryOne}/Capital.json`)
        const response2 = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryTwo}/Capital.json`)

        setLocOne(response.data)
        setLocTwo(response2.data)

        props.setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchLocations()
  }, [])
  return [
    locOne,
    locTwo,
    countryOne,
    countryTwo
  ]
}
export function nextQuestion() {

}