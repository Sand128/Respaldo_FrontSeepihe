import { createSlice } from '@reduxjs/toolkit';

export const validacionSlice = createSlice({
    name: 'validacion',
    initialState: {
        isSaving: false,
        status: 'wait',
        dataValidate: null,
    },
    reducers: {
        savingData: (state) => {
            state.isSaving = true;
        },
        addData: (state, payload ) => {
            state.isSaving = false;
            state.status = 'saved';
            state.dataValidate = payload;
        },
        failData: ( state, payload ) => {
            state.isSaving = false;
            state.status = 'fail';
            state.dataValidate = payload;
        },
        cleanData: ( state ) => {
            state.isSaving = false;
            state.status = 'wait';
            state.dataValidate = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { savingData,
                addData,
                failData,
                cleanData } = validacionSlice.actions;