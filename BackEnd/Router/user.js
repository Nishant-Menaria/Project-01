const express=require("express");
const {signup,Login,getAllUsers} =require("../controller/user");

const router=express.Router();

router.post("/signup",signup);
router.post("/login",Login);
router.get('/getallusers',getAllUsers);

module.exports=router;