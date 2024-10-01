import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { act } from "react";

export const signup = createAsyncThunk("auth/signup",async(data,{rejectWithValue})=>{
    try{
        const responce=await axios.post("http://localhost:3000/auth/signup",data);
        return responce.data.data;
    }catch(error){
        rejectWithValue(error);
    }
})

export const login = createAsyncThunk("auth/login",async(data,{rejectWithValue})=>{
    try{
        const responce=await axios.post("http://localhost:3000/auth/login",data);
        localStorage.setItem("token",responce.data.token);
        return responce.data.data;
    }catch(error){
        rejectWithValue(error);
    }
})

const getRole=()=>{
    const token=localStorage.getItem('token');
    if(token){
        const decodedToken=jwtDecode(token);
        return decodedToken.role
    }
    return null;
}

const initialState={
    isLoading : false,
    user : null,
    error : null,
    isLogedin : localStorage.getItem("token")?true:false,
    role:getRole(),
    signedIn:false
}

const authSlice=createSlice({
    name : "auth",
    initialState,
    reducers:{
        logOut :(state,action)=>{
            localStorage.removeItem("token");
            state.isLogedin=false;
            state.user=null;
            state.role=null;
        },
        loginWithGoogle:(state,action)=>{
            localStorage.setItem('token',action.payload.token);
            state.isLogedin=true;
            state.user=action.payload.user;
            state.role=action.payload.role;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(signup.pending,(state,action)=>{
            state.isLoading=true;
            state.user=null
        })
        .addCase(signup.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.user=action.payload;
            state.signedIn=true;
        })
        .addCase(signup.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload
        })
        .addCase(login.pending,(state,action)=>{
            state.isLoading=true;
            state.user=null
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.user=action.payload;
            state.isLogedin=true
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload
        })
    }
})


export const  { loginWithGoogle,logOut} =authSlice.actions;

export default authSlice.reducer;