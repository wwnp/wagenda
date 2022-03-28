import { Navigate, useLocation } from "react-router-dom";
import { useContext } from 'react';
import { CountryContex } from "../contex/contex";

function PrivateRoute({children}){
  const { user } = useContext(CountryContex)
  return children
  // return (
  //   !!user
  //     ? children
  //     : <Navigate to='/countrycomparer'></Navigate>
  // )
}
export default PrivateRoute;