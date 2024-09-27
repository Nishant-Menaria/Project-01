const Product=require('../Model/product');

const getAllProducts=async(req,res,next)=>{
    try {
        const products=await Product.find({});
        return res.send({msg:"product",data:products});
    } catch (error) {
        next(error)
    }
}

const addProduct=async(req,res,next)=>{
    try {
        const {name,price,category,description}=req.body;
        const productURL=req.file.path;
        const product = new Product({
            name,
            price,
            category,
            description,
            productURL
        });
        await product.save();
        return res.send({msg:"product added successfullt",data:product});
    } catch (error) {
        next(error);
    }
}


module.exports={
    getAllProducts,
    addProduct
}