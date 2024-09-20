import { createSlice } from "@reduxjs/toolkit";

const initialState={count:0}
export const myConterSlice=createSlice({
    // name of reducer
    name:"counterreducer",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count=state.count + 1;
        },
        decrement:(state)=>{
            state.count=state.count - 1;
        },
    }
})


export const {increment,decrement}=myConterSlice.actions;
export default myConterSlice.reducer;