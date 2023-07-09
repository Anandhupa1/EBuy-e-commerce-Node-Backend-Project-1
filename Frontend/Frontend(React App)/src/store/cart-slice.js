import { createSlice } from "@reduxjs/toolkit";

export const cartSlice =createSlice({
    name:"cart",
    initialState:{
        cart:[],
        count:1,
        
    },
    reducers:{
        increase:(currentSlice,actions)=>{
         currentSlice.count++;
        },
        changeCart:(currentSlice,actions)=>{
         currentSlice.cart=actions.payload.data;
        }
    }
})
export const {increase,changeCart} =cartSlice.actions;