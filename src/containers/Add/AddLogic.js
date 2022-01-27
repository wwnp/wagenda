import { useState, useEffect } from "react"
import axios from 'axios'
import { HookLoading } from "../Home/HookFetchCountries"
export function HandleSelect() {
  const [country, setCountry] = useState('')
  return {
    country,
    setCountry
  }
}
export function GetCountries() {
  const [countries, setCountries] = useState([])
  const { loading, setLoading } = HookLoading(true)
  const { country, setCountry } = HandleSelect()
  useEffect(() => {
    async function fetchCountries() {
      const response = await axios.get('https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/countries.json')
      setCountries(response.data)
      setCountry(response.data[0])
    }
    fetchCountries()
    setLoading(false)
  }, [])
  return {
    countries,
    loading,
    country,
    setCountry
  }
}
export function HandleRadio() {
  const [urbanType, setUrbanType] = useState(null)
  return {
    urbanType,
    setUrbanType
  }
}
export function HandleLocation() {
  const [location, setLocation] = useState('')
  return {
    location,
    setLocation
  }
}
export function AddHook(country, urbanType, location, setError, setItems, items,setLocation) {
  const errorLog = {}
  // let isSame = true
  setError({})
  items.forEach(item => {
    if (item.location === location) {
      errorLog['locError'] = 'Same locations in items'
    }
  })
  if (!urbanType) {
    errorLog['radioError'] = 'Select urban type'
  }
  if (location.trim().length === 0) {
    errorLog['locationError'] = 'Type location'
  }
  if (Object.keys(errorLog).length === 0) {
    const loc = location.split(',')
    const itemsNew = [...items, { 
      country,
      urbanType,
       location: {
         lat: parseFloat(loc[0]),
         lng: parseFloat(loc[1])
       } 
    }]
    setItems(itemsNew)
    setLocation('')
  } else {
    setError(errorLog)
  }

}
export function AddError() {
  const [error, setError] = useState({})
  return {
    error,
    setError
  }
}
export function HandleItems() {
  const [items, setItems] = useState([])
  return {
    items,
    setItems
  }
}
export async function finishLocations(items,setItems,setLocation) {
  console.log(items)

  items.forEach(item => {
    async function helpFetch() {
      const url = (`https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/locations/${item.country}/${item.urbanType}.json`)
      await axios.post(url, JSON.stringify(item.location))
      setItems([])
      setLocation('')
    }
    helpFetch()
  })
}