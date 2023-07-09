import { createSlice } from "@reduxjs/toolkit";
export const authSlice=createSlice({
    name:"auth",
    initialState:{
        status : false,
        logined : false,
        userData : {
            name : "user",
            email:"user@gmail.com",
            profilePic:"https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png",


        },
    },
    reducers : {
        addUserData : (currentSlice, actions)=>{
              currentSlice.userData = actions.payload;
              currentSlice.logined = true;
        }
    }
})


export const {addUserData} =authSlice.actions;