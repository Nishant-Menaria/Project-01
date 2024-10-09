const mongoose=require('mongoose');

const connectDb=async()=>{
    try{
        const connection =await mongoose.connect("mongodb+srv://3006nish:3006Nish@cluster0.jup7x.mongodb.net/ClgProject");
        console.log("MongoDB connected");
    }catch(error){
        console.log(error);
    }
}

module.exports=connectDb;