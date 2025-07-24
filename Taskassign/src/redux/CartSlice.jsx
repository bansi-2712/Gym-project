import {createSlice}from '@reduxjs/toolkit'

const initialState = {
    cart:[],
};

const CartSlice = createSlice(
    {
     name:"cart",
     initialState,
     reducers:{
        AddToCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        RemoveFromCart:(state,action)=>{
            state.cart=state.cart.filter(item=>item.id !== action.payload)
        },
        SetCart:(state,action)=>{
            state.cart = action.payload; 
        },
     }
    }
)
export const {AddToCart,RemoveFromCart,SetCart} = CartSlice.actions
export default CartSlice.reducer
