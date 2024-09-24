import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counterslice';
import authReducer from "../slices/authSlice";

const store=configureStore({
    reducer:{
        counter :counterReducer,
        auth : authReducer
    }
});


export default store;