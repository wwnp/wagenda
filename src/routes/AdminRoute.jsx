import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { adminUid } from "../config";
import { CountryContex } from "../contex/contex";

function AdminRoute({ children }) {
  const { user } = useContext(CountryContex)
  return (
    !!user
      ? user.adminUid === adminUid
        ? children
        : <Navigate to='/countrycomparer'></Navigate>
      : <Navigate to='/countrycomparer'></Navigate>
  )
  // return children
}
export default AdminRoute;