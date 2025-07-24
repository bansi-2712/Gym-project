
 import {configureStore} from '@reduxjs/toolkit'
 import cartReducer from './CartSlice'
 import authReducer from './AuthSlice'
 

 export const Store = configureStore(
    {
        reducer:{
            cart:cartReducer,
            auth:authReducer
        }
    }
 )