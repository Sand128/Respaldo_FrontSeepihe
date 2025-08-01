import { useEffect, useState } from "react"
import { getAllUsers } from "../../api/catalogos/usuarioProviders";


export const useGetUsers = () => {

    const [catUrl, setCatUrl] = useState();

    useEffect( () => {

            // aqui se ropio hay que checar que onda
        async function fetchData() {
        // const  fetchData = async () => {
            const result = await getAllUsers();
            //const result = 1;
            console.log(result, 'soy el useEffect');
            const { usuarios } = result;
            // resultado = result;
            setCatUrl( usuarios );
                // const result = await onCheckAuthProvider();
    
            
            // if( result.status !== 'Authorization' ) return dispatch( logout() );
            return;
            // const catalogos = await onCheckAuthProvider();
            // console.log(catalogos, 'hola');
            // const { token, user } = result;

            // const { id, name, email, profile, jursdiccion, area } = user;

            // aqui 

            // return dispatch( login({ id, name, email, profile, jursdiccion, area, token }) );

        }

    fetchData();

    }, []);
    
    return catUrl;

}