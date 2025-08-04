import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth";
import { MainRoutes } from "./MainRoutes";
import { LoadingPage } from "../ui/components";
import { useCheckAuth } from "../hooks";


export const AppRouter = () => {

  const status = useCheckAuth();

  if( status === 'checking' ){
  //  return <LoadingPage />
  }

  return (
    <>
      <Routes>

          {
            ( status === 'authenticated' )
            ? <Route path="/*" element={ <MainRoutes />} />
            : <Route path="/auth/*" element={ <AuthRoutes /> } />
          }

          <Route path="/*" element={ <Navigate to="/auth/login" /> } />          

      </Routes>
    </>
    
  )
}
