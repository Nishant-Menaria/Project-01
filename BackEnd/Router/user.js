const express=require("express");
const {signup,Login} =require("../controller/user");

const router=express.Router();

router.post("/signup",signup);
router.post("/login",Login);


module.exports=router;