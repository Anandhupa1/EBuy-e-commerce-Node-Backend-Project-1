import { createSlice } from "@reduxjs/toolkit";

export const cartSlice =createSlice({
    name:"cart",
    initialState:{
        cart:[{product:"macbook pro",price:499}],
        count:1,
        
    },
    reducers:{
        increase:(currentSlice,actions)=>{
         currentSlice.count++;
        }
    }
})
export const {increase} =cartSlice.actions;