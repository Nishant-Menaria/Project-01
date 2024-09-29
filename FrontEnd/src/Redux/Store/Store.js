import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counterslice';
import authReducer from "../slices/authSlice";
import productReducer from "../slices/productSlice";

const store=configureStore({
    reducer:{
        counter :counterReducer,
        auth : authReducer,
        product : productReducer,
    }
});


export default store;