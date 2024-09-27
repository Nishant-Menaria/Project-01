const User=require('../Model/user');
const bcrypt=require("bcrypt");
const JWT =require('jsonwebtoken');

const signup=async(req,res,next)=>{
    try{
        const {name,email,password,phoneNumber,role}=req.body;
        const isExisting =await User.findOne({email});
        if(isExisting){
            const error=new Error("User already exists");
            error.statusCode=400;
            throw(error);
        }

        const newUser=new User({
            name:name,
            email:email,
            password:password,
            phoneNumber:phoneNumber,
            role:role
        });
        await newUser.save();
        return res.status(201).send({msg:"Account Created",data : newUser});
    }catch(error){
        next(error);
    }
}

const Login=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        const isExisting=await User.findOne({email});
        if(!isExisting){
            const error=new Error("User Not Found");
            error.statusCode=404;
            throw(error)
        }

        const isMatched =await bcrypt.compare(password,isExisting.password);

        if(!isMatched){
            const error=new Error("Invalid Password");
            error.statusCode=401;
            throw(error);
        }

        const token =JWT.sign({id : isExisting._id ,email : isExisting.email ,role : isExisting.role},process.env.JWT_SECRET,{expiresIn :"1h"})

        return res.status(200).send({msg:"User Logged-In",data:isExisting,token:token});
    }catch(error){
        next(error);
    }
}


module.exports={
    signup,
    Login
}