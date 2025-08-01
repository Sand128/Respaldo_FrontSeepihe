import { authProvider } from "../../api/auth/authProvider";
// import { getCatalogos } from "../../api/catalogos/catalogoProviders";
// import { setCatalogos } from "../catalogo";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAutentication = ( data ) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await authProvider( data.email, data.password )
                .then( res => res );
        console.log(result, 'Soy el thunks');
        if ( !result.ok ) return dispatch( logout( result.error ) );


        dispatch( login( result ) );


    }

}

export const startLogout = () => {

    return ( dispatch ) => {

        localStorage.removeItem('token');
        dispatch( logout() );

    }

}
