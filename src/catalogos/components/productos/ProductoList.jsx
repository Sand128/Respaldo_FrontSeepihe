import { useEffect } from "react";
import CryptoJS from "crypto-js";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../store";
import { PaginationPublic, SearchBar } from "../../../ui/components";
import { pass } from "../../../api";

export const ProductoList = () => {
    const dispatch = useDispatch();

    const { token } = useSelector( state => state.auth );
    const { loading, currentPage, path, consulta, from, to, lastPage, total, links } = useSelector( state => state.consultas );
    
    useEffect(() => {
        dispatch( getData( currentPage, '/get-users', token ) );
    }, [token]);

    return (
        <>
            <h1>Lista productos</h1>
            <div>
                <style>
                    {`
                        table {width: 100%; border-collapse: collapse; margin-top: 20px; 
                        th, td {padding: 12px 16px; text-align: left; border: 1px solid #ddd; white-space: nowrap; }
                        th { background-color: #f4f4f4;font-weight: bold;}
                        tr:hover {background-color: #f9f9f9;}
                    `}
                </style>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">
                                Opciones
                            </th>
                            <th scope="col">
                                id
                            </th>
                            <th scope="col">
                                nombre
                            </th>
                            <th scope="col">
                                precio
                            </th>
                            <th scope="col">
                                estatus
                            </th>
                            <th scope="col">
                                id categoria
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { consulta?.map( ( { id,nombre,precio,estatus,categoria_id }, i ) => {
                            return <>
                                <tr key={i}>
                                    <td>
                                        <Link type="button" title="Editar" className="text-fuchsia-400 hover:text-white border-2 border-fuchsia-400 hover:bg-fuchsia-600 focus:ring-2 focus:outline-none focus:ring-fuchsia-200 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2"
                                                to={`../editar/${ CryptoJS.AES.encrypt( JSON.stringify( id ),pass ).toString().replace(/\+/g,'p1L2u3S').replace(/\//g,'bXaJN0921').replace(/=/g,'e1Q2u3A4l') }`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                                <path d="M13.5 6.5l4 4"></path>
                                            </svg>
                                        </Link>
                                    </td>
                                    <td>{id}</td>
                                    <td>{nombre}</td>
                                    <td>{precio}</td>
                                    <td>{estatus}</td>
                                    <td>{categoria_id}</td>
                                </tr>
                            </>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}