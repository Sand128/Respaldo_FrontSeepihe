import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { publicConsultsSlice } from './public/publicSlice'
import { catalogosSlice, editSlice, validacionSlice } from './public'



export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    catalogos: catalogosSlice.reducer,
    consultas: publicConsultsSlice.reducer,
    edit: editSlice.reducer,
    validacion: validacionSlice.reducer
  },
})
