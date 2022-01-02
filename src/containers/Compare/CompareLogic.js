import axios from "axios"
import { useState, useEffect } from "react"
import { delay } from "../../dox"
export const FRAMES_NUMBER = 5
export function HookFetchLocation(props) {
  const [loading, setLoading] = useState(true)
  const countryOne = localStorage.getItem('countryOne')
  const countryTwo = localStorage.getItem('countryTwo')
  const [locOne, setLocOne] = useState([])
  const [locTwo, setLocTwo] = useState([])
  useEffect(() => {
    async function abc() {
      const response = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryOne}/Capital.json`)
      const response2 = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryTwo}/Capital.json`)
      const temp1 = Object.values(response.data)
      const temp2 = Object.values(response2.data)
      setLocOne(temp1)
      setLocTwo(temp2)
      await delay(1000)
      setLoading(false)
    }
    abc()
  }, [countryOne, setLoading])
  return [
    // locations,
    // loading
    locOne,
    locTwo,
    loading,
    countryOne,
    countryTwo
    // locTwo
  ]
}
// export function ChangeQuestion() {
//   const [activeQuestion, setActiveQuestion] = useState(0)
//   return {
//     activeQuestion,
//     setActiveQuestion
//   }
// }
export function btnHandlerOne(setToggle1, toggle1, setActiveQuestion, activeQuestion, setFinished) {
  setToggle1(!toggle1)
  setActiveQuestion(activeQuestion + 1)
  if (activeQuestion + 1 === FRAMES_NUMBER) {
    // if (activeQuestion + 1 === (Object.values(locOne).length === 5)) {
    setFinished(true)
  }
}
export function btnHandlerTwo(setToggle2, toggle2, setActiveQuestion, activeQuestion, setFinished) {
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