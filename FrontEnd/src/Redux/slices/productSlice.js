import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAllProducts = createAsyncThunk("product/getAllProducts",async(_ ,{rejectWithValue})=>{
    try{
        const responce=await axios.get("http://localhost:3000/api/product");
        return responce.data.data;
    }catch(error){
        return rejectWithValue(error);
    }
})

export const addProduct = createAsyncThunk("product/addProduct",async(data,{rejectWithValue})=>{
    try{
        const responce=await axios.post("http://localhost:3000/api/product",data);
        return responce;
    }catch(error){
        return rejectWithValue({
            message: error.message,
            status: error.response.status,
            data: error.response.data
          });
    }
})

export const updateProduct=createAsyncThunk("product/updateProduct",async(data,{rejectWithValue})=>{
    try {
        const responce =await axios.put(`http://localhost:3000/api/product/${data._id}`,data);
        return responce;
    } catch (error) {
        console.log(error);
        return rejectWithValue({
            message: err.message,
            code: err.code,
            response: err.response?.data, // or extract whatever you need
          });
    }
});

export const updateProductWithImage =createAsyncThunk("product/updateProductWithImage",async(data,{rejectWithValue})=>{
    try {
        const responce =await axios.put(`http://localhost:3000/api/productWithImage/${data.id}`,data.data);
        return responce;
    } catch (error) {
        return rejectWithValue({
            message: err.message,
            code: err.code,
            response: err.response?.data, // or extract whatever you need
          });
    }
})


const initialState = {
    isLoading : false,
    error : null,
    products : [],
    isProductAdded : false
}

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        
    },
    extraReducers :(builder)=>{
        builder
        .addCase(addProduct.pending , (state)=>{
            state.isProductAdded = false;
            state.isLoading = true
        })
        .addCase(addProduct.fulfilled , (state,action)=>{
            state.isProductAdded = true;
            state.isLoading = false;
            state.error = null
        })
        .addCase(addProduct.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
        .addCase(updateProduct.pending , (state)=>{
            state.isProductAdded = false;
            state.isLoading = true
        })
        .addCase(updateProduct.fulfilled , (state,action)=>{
            state.isProductAdded = true;
            state.isLoading = false;
            state.error = null
        })
        .addCase(updateProduct.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
        .addCase(updateProductWithImage.pending , (state)=>{
            state.isProductAdded = false;
            state.isLoading = true
        })
        .addCase(updateProductWithImage.fulfilled , (state,action)=>{
            state.isProductAdded = true;
            state.isLoading = false;
            state.error = null
        })
        .addCase(updateProductWithImage.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
        .addCase(getAllProducts.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(getAllProducts.fulfilled , (state,action)=>{
            state.isLoading = false,
            state.products=action.payload
            state.error = null
        })
        .addCase(getAllProducts.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
    }
});

export const  {} =productSlice.actions;

export default productSlice.reducer;