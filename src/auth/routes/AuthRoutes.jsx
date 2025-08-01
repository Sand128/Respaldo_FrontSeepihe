import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, ResetPasswordPage } from '../pages'

export const AuthRoutes = () => {
  return (
    <Routes>

        <Route path='login' element={ <LoginPage /> } />
        <Route path='reset-password' element={ <ResetPasswordPage /> } />

        <Route path='/*' element={ <Navigate to="login" /> } />

    </Routes>
  )
}


/// HGACER LAS RUTAS PARA LAS DEMAS COSAS PERO AHORA NORMALES PORQUE NO FUNCIONO LA COSA ESA 