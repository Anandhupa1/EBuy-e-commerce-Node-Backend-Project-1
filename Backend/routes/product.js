const express = require('express');
const { productModel } = require('../models/products.model');
const productRouter = express.Router();
const {auth }= require('../middlewares/auth')


productRouter.post("/",auth,async (req,res)=>{
    try{
        let newProduct = new productModel(req.body);
        await newProduct.save();
        res.status(200).json({result:"success",productDetails:newProduct});
    }
    catch(err){
        console.log("error;_______________post:product");
        console.log(err)
    }

})



productRouter.get('/',async(req,res)=>{
    let data = productModel.find();
    res.send(data)
})



module.exports={productRouter}