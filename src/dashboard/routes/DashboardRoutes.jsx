import { Navigate, Route, Routes } from "react-router-dom"
import { PrincipalPage } from "../pages"
import { PasswordPage } from "../../cuenta"

export const DashboardRoutes = () => {

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <Routes>
          <Route path="principal" element={ <PrincipalPage /> } />
          <Route path="reset-password/:a" element={ <PasswordPage /> } />

          <Route path="/*" element= { <Navigate to={"principal"}/> } />
        </Routes>
      </div>
    </>
  )

}
