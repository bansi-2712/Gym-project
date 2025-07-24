import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:null  // its store user data from me/api
    },
    reducers:{
        setUser:(state,action)=>{
            state.user =action.payload
        },
        LogoutUser:(state)=>{
            state.user = null;
        },
    },
});


export const {setUser,LogoutUser } =authSlice.actions
export default authSlice.reducer;
