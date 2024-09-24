const errorHandler=(err,req,res,next)=>{
    let statusCode=err.statusCode ||500;
    let errorMessage= err.message||"Internal Server Error"
    if(err.name==="ValidationError"){
        const Errors=Object.values(err.errors).map((error)=>error.message);
        statusCode=400;
        errorMessage=Errors;
    }

    return res.status(statusCode).send({status:"Fail",msg:errorMessage});
}

module.exports=errorHandler;