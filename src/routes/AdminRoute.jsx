import { onAuthStateChanged } from "firebase/auth";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { adminUid } from "../config";
import { CountryContex } from "../contex/contex";
import { auth } from "../firebase";

function AdminRoute({ children }) {
  const { user } = useContext(CountryContex)
  return (
    !!user
      ? children
      : <Navigate to='/countrycomparer'></Navigate>
  )
  // return children
}
export default AdminRoute;