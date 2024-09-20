
import { configureStore } from "@reduxjs/toolkit";
import counterreducer from "./features/CounterSlice"

export const store=configureStore({
    reducer:{
         
        custom:counterreducer
         // ye jo CounterSlice hai ye name hai hamare reducer ka jo ki hamne store apne slice me banaya that name="CounterSlice" se toh yana pe name ayega jo apne apne reducer ko diya hai isko confuse mat karna ya par slice ka name nahi ayega balki slice ke ander jo apne name diya hai apne reducers ka vo name ayega
    },
})

