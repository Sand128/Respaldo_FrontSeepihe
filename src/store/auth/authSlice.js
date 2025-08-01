import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking', 'authenticated'
        token: null,
        name: null,
        email: null,
        firstTime: null,
        province: null,
        profile: null,
        id: null,
        // errorMesage: null,
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.status= 'authenticated';
            state.token= payload.token;
            state.name= payload.name;
            state.email= payload.email;
            state.firstTime= payload.first_time;
            state.province= payload.province;
            state.profile= payload.profile;
            state.id= payload.id;
            // state.errorMesage= null;
        },
        logout: ( state ) => {
            state.status= 'not-authenticated';
            state.token= null;
            state.name= null;
            state.email= null;
            state.firstTime= null;
            state.province= null;
            state.profile= null;
            state.id= null;
            // state.errorMesage= payload.error;
        },
        checkingCredentials: ( state ) => {
            state.status = 'checking';
        },
    }
});


// Action creators are generated for each case reducer function
export const {  login,
                logout,
                checkingCredentials } = authSlice.actions;