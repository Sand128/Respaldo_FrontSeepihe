export const ProductoPage = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: "center", alignItems:"center", marginTop:"50px",gap:"50px"}}>
        <h1>Productos</h1>
        <button style={{ backgroundColor: "#9abdffff", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", transition: "transform 0.6s cubic-bezier(.08, .35, .13, 1.02), opacity 0.4s" }}>
          Listar
        </button>
        <button style={{ backgroundColor: "#9abdffff", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", transition: "transform 0.6s cubic-bezier(.08, .35, .13, 1.02), opacity 0.4s" }}>
          Registrar
        </button>
      </div>
    </>    
    
  )
}
