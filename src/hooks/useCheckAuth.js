import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCheckAuthProvider } from "../api/auth/authProvider";
import { login, logout } from "../store/auth";


export const useCheckAuth = () => {
  
    const dispatch = useDispatch();
    const { status } = useSelector( state => state.auth );

    useEffect( () => {

            // aqui se ropio hay que checar que onda
            async function fetchData() {
            const result = await onCheckAuthProvider();
            // console.log(result);
        
            if( result.status !== 'Authorization' ) return dispatch( logout() );
        
            // const catalogos = await onCheckAuthProvider();
            // console.log(catalogos, 'hola');
            const { token, user } = result;

            const { id, name, email, profile, first_time, jursdiccion, area } = user;

            // console.log(user);

            // aqui 

            return dispatch( login({ id, name, email, profile, first_time, jursdiccion, area, token }) );

        }

        fetchData();
    
    }, []);

  return status;

}
