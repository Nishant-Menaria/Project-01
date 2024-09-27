const express=require('express')
const router=express.Router();
const {getAllProducts,addProduct} =require('../controller/product');
const upload =require('../middleware/multer');

router.get('/product',getAllProducts);
router.post('/product',upload.single('productImage'),addProduct);

module.exports=router;