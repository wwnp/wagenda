import { useState, useEffect } from "react";
import axios from "axios";

export function HookLoading(boolean){
  const [loading, setLoading] = useState(boolean)
  return {
    loading,
    setLoading
  }
}
export function HookFetchCountries(props) {
  console.log(props)
  const [countries, setCountries] = useState()
  // const {loading, setLoading} = HookLoading(true)
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/countries.json')
      const { data } = response
      setCountries(data)
      props.setLoading(false)
    }
    fetchData()
  }, []);
  return {
    countries,
    // loading
  }


}