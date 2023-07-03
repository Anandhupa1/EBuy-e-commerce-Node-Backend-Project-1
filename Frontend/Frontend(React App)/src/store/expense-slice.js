import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name:"explenseSlice",
    initialState:{
        income:1000,
        expenseList:[],

    },
    reducers:{
        addExpenseAction:(currentSlice,actions)=>{
            currentSlice.expenseList.push(actions.payload)
            console.log(actions)
        },
        setIncomeAction:(currentSlice,action)=>{
            currentSlice.income = action.payload
        }
    }
})


export const {addExpenseAction,setIncomeAction} =expenseSlice.actions
