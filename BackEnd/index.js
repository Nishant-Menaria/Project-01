const express=require("express");
const cors=require("cors");
const connectDb = require("./config/db");
const userRoutes=require("./Router/user");
const authRoutes =require("./Router/auth")
const errorHandler=require("./middleware/globalErrorHandler");
const passport=require('passport');
const session =require('express-session');
const productRoutes=require('./Router/product');
require("dotenv").config();
require("./config/passport")
const path=require('path');


const app=express();
app.use(session({
    secret : "My_Secret_Key",
    resave : false,
    saveUninitialized : false,
    cookie : {secure : false}
}))
connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/uploads",express.static(path.join(__dirname,"uploads")));


app.use('/auth',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api',productRoutes);

app.get("/",(req,res)=>{
    return res.send("Hello MF");
})


app.use(passport.initialize());
app.use(passport.session());
app.use(errorHandler);


app.listen(3000,()=>console.log("server started on port 3000"));