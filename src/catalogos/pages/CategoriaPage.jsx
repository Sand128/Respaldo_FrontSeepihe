import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { CategoriaEdit, CategoriaForm, CategoriaList } from "../components"

export const CategoriaPage = () => {
  return (
    <>
    <div style={{ display: 'flex', justifyContent: "center", alignItems:"center", marginTop:"50px",gap:"50px"}}>
        <h1>Categorias</h1>
        <div>
          <NavLink end to = "/catalogo/categoria/lista">
            <button style={{ backgroundColor: "#9abdffff", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", transition: "transform 0.6s cubic-bezier(.08, .35, .13, 1.02), opacity 0.4s" }}>
              Listar
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink end to="/catalogo/categoria/registrar">
            <button style={{ backgroundColor: "#9abdffff", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", transition: "transform 0.6s cubic-bezier(.08, .35, .13, 1.02), opacity 0.4s" }}>
              Registrar
            </button>
          </NavLink>
        </div>
      </div>
      <div>
      <Routes>
        <Route path="registrar" element={<CategoriaForm/>}/>
        <Route path="lista" element={<CategoriaList/>}/>
        <Route path="editar/:id" element={<CategoriaEdit/>}/>

        <Route path="/*" element={<Navigate to = {"lista"}/>}/>
      </Routes>
    </div>

    </>
  )
}
