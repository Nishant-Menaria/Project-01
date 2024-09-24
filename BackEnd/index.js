const express=require("express");
const cors=require("cors");
const connectDb = require("./config/db");
const authRoutes=require("./Router/user");
const errorHandler=require("./middleware/globalErrorHandler");


const app=express();
connectDb();

app.use(cors());
app.use(express.json());

app.use('/auth',authRoutes);
app.use(errorHandler);


app.listen(3000,()=>console.log("server started on port 3000"));