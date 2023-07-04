import { createSlice } from "@reduxjs/toolkit";
export const authSlice=createSlice({
    name:"auth",
    initialState:{
        status : true,
        userData : {
            name : "user",
            email:"user@gmail.com",
            profilePic:"https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png",


        },
    }
})