import { Routes, Route, Navigate } from "react-router-dom"
import { UsuarioPage , ProductoPage, CategoriaPage} from "../pages"  // import { ProductoPage } from "../pages"
import { NotFoundPage } from "../pages/NotFoundPage"  // Importa el componente


export const CatalogoRoutes = () => {

  return (

    <>
        <Routes>
          <Route path="usuario/*" element={ <UsuarioPage />} />
          <Route path="producto/*" element={ < ProductoPage />} />
          <Route path="categoria/*" element={ < CategoriaPage />} />

          {/* Página para rutas no encontradas */}
          <Route path="*" element={ < NotFoundPage /> }/>
        </Routes>
    </>

  )
}
// usuario/* es una ruta padre.
// UsuarioPage defines las rutas hijas (registrar, lista, etc.).
