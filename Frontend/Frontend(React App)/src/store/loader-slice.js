import { createSlice } from "@reduxjs/toolkit";
export const loaderSlice=createSlice({
    name:"loader",
    initialState:{
        status : false,
        
    },
    reducers:{
        loaderStatusUpdate:(currentSlice,actions)=>{
         currentSlice.status=actions.payload.status;
        }
    }
})

export const { loaderStatusUpdate} =loaderSlice.actions;
