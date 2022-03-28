import { Navigate } from "react-router-dom";
import { useContext } from 'react';
import { CountryContex } from "../contex/contex";

function GuestRoute({children}){
  const { user } = useContext(CountryContex)
  return (
    !!user
      ? <Navigate to='/countrycomparer'></Navigate>
      : children
  )
}
export default GuestRoute;