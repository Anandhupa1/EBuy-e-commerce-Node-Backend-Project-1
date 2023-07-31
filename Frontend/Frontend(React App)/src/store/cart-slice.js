import { createSlice } from "@reduxjs/toolkit";

export const cartSlice =createSlice({
    name:"cart",
    initialState:{
        cart:[],
        count:1,
        totalProducts:0,
        
    },
    reducers:{
        increase:(currentSlice,actions)=>{
         currentSlice.count++;
        },
        changeCart:(currentSlice,actions)=>{
         currentSlice.cart=actions.payload.data;
        },
        changeCartCount(currentSlice,actions){
            currentSlice.totalProducts=actions.payload.totalProducts
        }
    }
})
export const {increase,changeCart,changeCartCount} =cartSlice.actions;
