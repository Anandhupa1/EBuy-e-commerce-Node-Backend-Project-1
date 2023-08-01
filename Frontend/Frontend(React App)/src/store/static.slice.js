import { createSlice } from "@reduxjs/toolkit";
export const staticSlice=createSlice({
    name:"static",
    initialState:{
     static :{},
     present : false
    },
    reducers : {
       
        addStaticData : (currentSlice, actions)=>{
              currentSlice.static = actions.payload.static;
              currentSlice.present = true;
        },
    }
})


export const {addStaticData} =staticSlice.actions;