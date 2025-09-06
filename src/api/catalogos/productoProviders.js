
import { baseApi } from "../baseApi";//dónde viene baseApi

export const getAllProductos = async () => {
    try {
        const resp = await baseApi.get('/get-productos');
        const { message, success, productos } = resp.data;
        return {
            ok: true,
            productos,
            message,
            success,
        };
    } catch (error) {
        return {
            ok: false,
            error: error.response?.data || error.message,
        };
    }
};



/*
export const saveProducto = async ( id,name,price,status,idcategoria ) =>{

    try{
        const resp = await baseApi.get('/productos/store-productos', {
            id: id,
            name: nombre,
            price: precio,
            status: estatus,
            idcategoria: categoria_id
        });
            
        const {message,newProducto } =  resp.data;

        return {
            ok: true,
            user:newProducto,
            message: message,
        }
    }catch (error){
        return{
            ok: false,
            error: error.response.data
        }
    }
}

*/