import { Navigate, useLocation } from "react-router-dom";
import { useContext } from 'react';
import { CountryContex } from "../contex/contex";

function PrivateRoute({children, user}){
  // return children
  return (
    user?.email
      ? children
      : <Navigate to='/countrycomparer'></Navigate>
  )
}
export default PrivateRoute;