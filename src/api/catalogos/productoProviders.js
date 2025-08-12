import { baseApi } from "../baseApi";




export const saveProducto = async ( ) =>{

}

export const getAllProductos = async () => {
    try{
        const resp = await baseApi.get('/productos', {
            headers: { token: localStorage.getItem('token')}
        });
        return{
            ok: true,
            productos: resp.data,
        };
    }catch (error){
        return{
            ok: false,
            error: error.response?.data || error.mensaje,
        };
    }
};
 
export const editProducto = async () => {

}
