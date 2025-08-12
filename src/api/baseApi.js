import axios from 'axios';

export const baseApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1',
    // baseURL: 'http://10.40.140.135:8000/api/v1'
    // baseURL: 'https://ddsisem.edomex.gob.mx/servicioscurp/api/v1'
});


export const pass = 'blackmore-page';