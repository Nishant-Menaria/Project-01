const mongoose=require('mongoose');

const connectDb=async()=>{
    try{
        const connection =await mongoose.connect("mongodb://localhost:27017/ClgProject");
        console.log("MongoDB connected");
    }catch(error){
        console.log(error);
    }
}

module.exports=connectDb;