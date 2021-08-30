import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import cartCountSlice from './cartCountSlice'
export const store=configureStore({
    reducer:{
        user:userSlice,
        cartCount:cartCountSlice
    }
})