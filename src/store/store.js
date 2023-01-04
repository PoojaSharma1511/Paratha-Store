import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./expenseSlice";

const store = configureStore({
    reducer:{
        cart:expenseSlice
    }
})

export default store