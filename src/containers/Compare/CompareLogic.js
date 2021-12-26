import axios from "axios"
import { useState, useEffect } from "react"
export const FRAMES_NUMBER = 2
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

        await setLocOne(response.data)
        await setLocTwo(response2.data)

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
export function ChangeQuestion() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  return {
    activeQuestion,
    setActiveQuestion
  }
}
export function btnHandlerOne(setToggle1, toggle1, setActiveQuestion, activeQuestion, locOne, setFinished) {
  setToggle1(!toggle1)
  setActiveQuestion(activeQuestion + 1)
  if (activeQuestion + 1 === FRAMES_NUMBER) {
  // if (activeQuestion + 1 === (Object.values(locOne).length === 5)) {
    setFinished(true)
  }
}
export function btnHandlerTwo(setToggle2, toggle2, setActiveQuestion, activeQuestion, locOne, setFinished) {
  setToggle2(!toggle2)
  setActiveQuestion(activeQuestion + 1)
  if (activeQuestion + 1 === FRAMES_NUMBER) {
    setFinished(true)
  }
}
// export function isFinished(locOne, activeQuestion) {
//   return activeQuestion + 1 === (locOne.length === 10)
// }
// export function HookFinished(locOne,activeQuestion) {
//   console.log(activeQuestion)
//   if (activeQuestion + 1 === locOne.length) {
//     setFinished(true)
//   }
// }