import { baseApi } from "../baseApi";

//usuarioProviders.js contiene funciones que llaman a la API 
//(por ejemplo, para guardar, editar, listar usuarios, etc.).
/*

| Función       | ¿Qué hace?                      | Método HTTP | Ruta                   |
| ------------- | ------------------------------- | ----------- | ---------------------- |
| `saveUsuario` | Crea un usuario nuevo           | POST        | `/store-user`          |
| `getAllUsers` | Obtiene todos los usuarios      | GET         | `/get-users`           |
| `editUser`    | Edita un usuario existente      | PUT         | `/update-user/:id`     |
| `putPassword` | Cambia contraseña de un usuario | PUT         | `/update-password/:id` |

*/

export const saveUsuario = async ( name, perfil, area, jurisdiccion, email, password, token ) => {

    try {

        const resp = await baseApi.post( '/store-user', {
            name: name,
            perfil: perfil,
            area: area,
            jurisdiccion: jurisdiccion,
            email: email,
            password: password,
        }, {
            headers: { 'token': token },
        });

        const { message, newUser  } = resp.data;

        return {
            ok: true,
            user: newUser,
            message: message,
        }

    } catch (error) {
        return {
            ok: false, 
            error: error.response.data
        }
    }

}

export const getAllUsers = async () => {

    try {
        const resp = await baseApi.get('/get-users');
        console.log(resp, 'Soy el provider');
        const { message, success, usuarios } = resp.data;
        return {
            ok: true,
            message: message,
            success: success,
            usuarios: usuarios,
        };
    } catch (error) {
        return {
            ok: false, 
            error: error.response.data
        }
    }

}



export const editUser = async ( name, perfil, area, jurisdiccion, email, status, usuario, token ) => {

    try {        
        const resp = await baseApi.put( `/update-user/${ usuario }`, {
            name: name,
            perfil: perfil,
            area: area,
            jurisdiccion: jurisdiccion,
            email: email,
            status: status,
            usuario: usuario,
        }, {
            headers: { 'token': token },
        });

        const { message, data, success  } = resp.data;

        return {
            ok: true,
            data: data,
            success: success,
            message: message,
        }

    } catch (error) {
        return {
            ok: false, 
            error: error.response.data
        }
    }


}


export const putPassword = async ( password, id, token ) => {

    try {        
        const resp = await baseApi.put( `/update-password/${ id }`, {
            password: password,
        }, {
            headers: { 'token': token },
        });

        console.log(resp);
        const { message, data, success } = resp.data;

        return {
            ok: true,
            data: data,
            success: success,
            message: message,
        }

    } catch (error) {
        return {
            ok: false, 
            error: error.response.data
        }
    }

}
