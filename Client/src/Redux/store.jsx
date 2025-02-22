import {configureStore} from "@reduxjs/toolkit";
import myReducer from "./cardSlice";
const store=configureStore({
    reducer:{
        mycart:myReducer
    }
})
export default store;