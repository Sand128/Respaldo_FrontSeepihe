import { Routes, Route, Navigate } from "react-router-dom"
import { UsuarioPage } from "../pages"

export const CatalogoRoutes = () => {

  return (

    <>
        <Routes>
          <Route path="usuario/*" element={ <UsuarioPage />} />

          <Route path="/*" element= { <Navigate to={"usuario"}/> } />
        </Routes>
    </>

  )
}
// usuario/* es una ruta padre.
// UsuarioPage defines las rutas hijas (registrar, lista, etc.).
