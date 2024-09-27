import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getProducts = createAsyncThunk("auth/product",async({rejectWithValue})=>{
    try{
        const responce=await axios.get("http://localhost:3000/auth/signup");
        return responce.data.data;
    }catch(error){
        rejectWithValue(error);
    }
})

export const addProduct = createAsyncThunk("auth/product",async(data,{rejectWithValue})=>{
    try{
        const responce=await axios.post("http://localhost:3000/auth/product",data);
        return responce.data.data;
    }catch(error){
        rejectWithValue(error);
    }
})


const initialState={
    isLoading : false, user : null,
    error : null,
    products :[]
}

const productSlice=createSlice({
    name : "product",
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProduct.pending,(state,action)=>{
            state.isLoading=true;
            state.products=[]
        })
        .addCase(getProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.products=action.payload;
        })
        .addCase(getProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload
        })
        .addCase(addProduct.pending,(state,action)=>{
            state.isLoading=true;
            state.products=[]
        })
        .addCase(addProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.products=action.payload;
        })
        .addCase(addProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload
        })
    }
})


export const  {} =product.actions;

export default productSlice.reducer;