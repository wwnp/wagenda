import { useState, useEffect } from "react";
import axios from "axios";

function HookLoading(boolean){
  const [loading, setLoading] = useState(boolean)
  return {
    loading,
    setLoading
  }
}
export function HookFetchCountries() {
  const [countries, setCountries] = useState()
  const {loading, setLoading} = HookLoading(true)
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://comparecountries-default-rtdb.europe-west1.firebasedatabase.app/countries.json')
      const { data } = response
      setCountries(data)
      setLoading(false)
    }
    fetchData()
  }, []);
  return {
    countries,
    loading
  }


}