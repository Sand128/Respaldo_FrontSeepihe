import { createSlice } from '@reduxjs/toolkit';

export const catalogosSlice = createSlice({
    name: 'catalogos',
    initialState: {
        status: 'empty',
        jurisdicciones: null,
        perfiles: null,
    },
    reducers: {
        setCatalogos: ( state, { payload } ) => {
            state.status = 'full';
            state.jurisdicciones = payload.jurisdicciones;
            state.perfiles = payload.perfiles;
        },
        cleanCatalogos: ( state ) => {
            state.status = 'empty';
            state.jurisdicciones = null;
            state.perfiles = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setCatalogos,
                cleanCatalogos } = catalogosSlice.actions;