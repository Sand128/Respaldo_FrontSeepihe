import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { ProductoList, ProductoEdit, ProductoForm } from "../components"


export const ProductoPage = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: "center", alignItems:"center", marginTop:"50px",gap:"50px"}}>
        <h1>Productos</h1>
        <div>
          <NavLink end to = "/catalogo/producto/lista">
            <button style={{ backgroundColor: "#9abdffff", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", transition: "transform 0.6s cubic-bezier(.08, .35, .13, 1.02), opacity 0.4s" }}>
              Listar
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink end to="/catalogo/producto/registrar">
            <button style={{ backgroundColor: "#9abdffff", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", transition: "transform 0.6s cubic-bezier(.08, .35, .13, 1.02), opacity 0.4s" }}>
              Registrar
            </button>
          </NavLink>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="registrar" element = { <ProductoForm/> } />
          <Route path="lista" element = { <ProductoList /> } />
          <Route path="editar/:id" element = { <ProductoEdit />} />

          <Route path="/*" element={ <Navigate to ={"lista"} />} />
        </Routes>
      </div>
    </>    
    
  )
}
