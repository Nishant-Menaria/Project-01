import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState={
    isLoading : false,
    user : null,
    error : null
}

const authSlice=createSlice({
    name : "auth",
    initialState,
    reducers:{
        setLoading : (state)=>{
            state.isLoading =true
        },
        setSuccess : (state,action)=>{
            state.isLoading =false,
            state.user = action.payload
        },
        setError : (state)=>{
            state.isLoading =false,
            state.error =action.payload
        }
    }
})

export const signup=(Data)=>{
    return async(dispatch)=>{
        dispatch(setLoading());
        try{
            console.log(Data);
            const response =await axios.post("http://localhost:3000/auth/signup",Data);
            dispatch(setSuccess(response.data.data));
        }catch(error){
            console.log(error);
            dispatch(setError(error.responce.data || "Internal Server Error" ));
        }
    }
}

export const  {setLoading,setError,setSuccess } =authSlice.actions;

export default authSlice;