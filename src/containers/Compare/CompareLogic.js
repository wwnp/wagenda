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
  }, [])
  return [
    locOne,
    locTwo,
    loading,
    countryOne,
    countryTwo
  ]
}
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

export function FetchLocOne(props) {
  const countryOne = localStorage.getItem('countryOne')
  const [locOne, setLocOne] = useState([])
  useEffect(() => {
    async function abc() {
      const response = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryOne}/Capital.json`)
      const temp = Object.values(response.data)
      setLocOne(temp)
      props.setLoading(false)
    }
    abc()
  }, [])
  return [
    locOne,
    countryOne,
  ]
}
export function FetchLocTwo(props) {
  const countryTwo = localStorage.getItem('countryTwo')
  const [locTwo, setLocTwo] = useState([])
  useEffect(() => {
    async function abc() {
      const response = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryTwo}/Capital.json`)

      const temp = Object.values(response.data)
      setLocTwo(temp)
      props.setLoading(false)
    }
    abc()
  }, [])
  return [
    locTwo,
    countryTwo,
  ]
}
// export function FetchLocOne(props) {
//   const [loading, setLoading] = useState(true)
//   const countryOne = localStorage.getItem('countryOne')
//   const countryTwo = localStorage.getItem('countryTwo')
//   const [locOne, setLocOne] = useState([])
//   const [locTwo, setLocTwo] = useState([])
//   useEffect(() => {
//     async function abc() {
//       const response = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryOne}/Capital.json`)
//       // const response2 = await axios.get(`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${countryTwo}/Capital.json`)
//       const temp1 = Object.values(response.data)
//       // const temp2 = Object.values(response2.data)
//       setLocOne(temp1)
//       // setLocTwo(temp2)
//       await delay(1000)
//       setLoading(false)
//     }
//     abc()
//   }, [countryOne, setLoading])
//   return [
//     locOne,
//     // locTwo,
//     loading,
//     countryOne,
//     countryTwo
//   ]
// }