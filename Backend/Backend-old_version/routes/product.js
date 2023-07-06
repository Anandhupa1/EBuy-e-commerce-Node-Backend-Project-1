const express = require('express');
const { productModel } = require('../models/products.model');
const productRouter = express.Router();
const {auth }= require('../middlewares/auth')


productRouter.post("/",auth,async (req,res)=>{
    try{
        let image = req.body.name;
        let productExists = await productModel.find({image})
        // if(productExists){
        //     res.status(409).json({error :"product  already exists"})
        // }
        // else{
            let newProduct = new productModel(req.body);
            await newProduct.save();
            res.status(200).json({result:"success",productDetails:newProduct});
       // }

    }
    catch(err){
        console.log("error;_______________post:product");
        console.log(err)
    }

})



productRouter.get('/',async(req,res)=>{
    let data =await productModel.find();
    res.send(data)
})

///////////////////////////////////////////////




productRouter.delete("/delete/:id",auth,async (req,res)=>{
    try{
       let id = req.params.id;
       let product =await productModel.findOne({_id:id})
       //console.log(product)
       console.log(req.body.userId, "  ",product.userId)
       if(req.body.userId == product.userId){
        let p = await productModel.findOneAndRemove({_id:id});
       
        res.send(p)
       }
       else{res.status(401).json({err:"you dont have access "})}



    
  

    }
    catch(err){
        console.log("error;_______________post:product");
        console.log(err)
    }

})

///////////update

productRouter.patch("/update/:id",auth,async (req,res)=>{
    try{
        let id = req.params.id;
        let product =await productModel.findOne({_id:id});
        //console.log(product)
        console.log(req.body.userId, "  ",product.userId)
        if(req.body.userId == product.userId){
     
            let id = req.params.id;
            let p = await productModel.findOneAndUpdate({_id:id},req.body,{new:true});
           
            res.send(p)
        }
        else{res.status(401).json({err:"you dont have access "})}
 
 
        







        // let id = req.params.id;
        // let p = await productModel.findOneAndUpdate({_id:id},req.body,{new:true});
       
        // res.send(p)
        //let productExists = await productModel.findByIdAndRemove(id);
        
           // let newProduct = new productModel(req.body);
          //  await newProduct.save();
           // res.status(200).json({result:"success",productDetails:newProduct});
       // }

    }
    catch(err){
        console.log("error;_______________post:product");
        console.log(err)
    }

})









module.exports={productRouter}