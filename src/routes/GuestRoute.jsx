import { Navigate, useLocation } from "react-router-dom";
import { useContext } from 'react';
import { CountryContex } from "../contex/contex";

function GuestRoute({children, user}){
  // return children
  return (
    user?.email
      ? <Navigate to='/countrycomparer'></Navigate>
      : children
  )
}
export default GuestRoute;