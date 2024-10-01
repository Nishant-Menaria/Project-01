import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counterslice';
import authReducer from "../slices/authSlice";
import productReducer from "../slices/productSlice";
import cartSlice from "../slices/cartSlice";

const store=configureStore({
    reducer:{
        counter :counterReducer,
        auth : authReducer,
        product : productReducer,
        cart :cartSlice,
    }
});


export default store;