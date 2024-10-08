const mongose=require("mongoose");
const validator=require("validator");
const bcrypt=require("bcrypt");

const userSchema=mongose.Schema({
    googleId:{
        type:String,
        default:null
    },
    name:{
        type:String,
        required:[true,"Name is required"],
        minlength :[3,"Name must be at least 3 characters"] ,
        maxlength:[50,"Name cannot exceed 50 characters"],
        validate:{
            validator : function (value){
                return validator.isAlpha(value,"en-IN",{ignore:" "});
            },
            message :"plz enter a name"
        }
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        validate:{
            validator : function (value){
                return validator.isEmail(value);
            },
            message :"{VALUE} is not a valid email"
        }
    },
    password:{
        type:String,
        required:function(){
            return !this.googleId;
        },
        maxlength:[128,"Password cannot exceed 128 characters"],
        validate:{
            validator:function (value){
                if(this.googleId){
                    return this;
                }
                return validator.isStrongPassword(value,{
                    minLength: 8,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                    minSymbols: 1
                });
            },
            message:"please enter a strong password"
        }
    },
    phoneNumber:{
        type:String,
        required:function(){
            return !this.googleId
        },
        unique:true,
        validate:{
            validator:function(value){
                if(this.googleId){
                    return this;
                }
                return validator.isMobilePhone(value,"en-IN");
            },
            message:"phone number should be valid"
        }
    },
    role:{
        type:String,
        required:true,
        enum:["User","Admin"],
        default:"User"
    }
    
})

userSchema.pre("save",async function(next){
    const user=this;
    if(!user.isModified("password") || user.googleId) return next();
    const hashPassword=await bcrypt.hash(user.password,10);
    user.password=hashPassword;
    next();
})

module.exports=mongose.model("user",userSchema);


