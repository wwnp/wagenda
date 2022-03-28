import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { geIfAdminUid } from "../auxillary";
import { adminUid } from "../config";
import { CountryContex } from "../contex/contex";

function AdminRoute({ children }) {
  const { user } = useContext(CountryContex)
  return (
    !!user
      ? geIfAdminUid(adminUid, user)
        ? children
        : <Navigate to='/countrycomparer'></Navigate>
      : <Navigate to='/countrycomparer'></Navigate>
  )
  // return children
}
export default AdminRoute;