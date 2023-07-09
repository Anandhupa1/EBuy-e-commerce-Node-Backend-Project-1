const express = require('express');
const { productModel } = require('../models/products.model');
const productRouter = express.Router();
const {auth }= require('../middlewares/auth')




productRouter.get("/",async(req,res)=>{
    try {
        let filter = {};
        let q = req.query;
        //category
        if(q.category && q.category!=="any"){filter.category=q.category};
        //price
        if(q.pmin && q.pmax){filter.price={$gte:q.pmin, $lte:q.pmax}}
        else if ((!q.pmin || q.pmin=="false" ) && q.pmax){filter.price={$lte:q.pmax}}
        else if(q.pmin && (!q.pmax || q.pmax=="false")){filter.price={$gte:q.pmin}}
        //color
        if(q.color){filter.color=q.color}
        //size
        // if(q.size){filter.size=q.size}


    //________________fetching data ____________________
        let data = await productModel.find(filter);
        res.send(data)
    } catch (error) {
        console.log("err in get post", error)
    }
})

//___________________products_____________________________________________
productRouter.post("/",auth,validateProduct,async (req,res)=>{
    try{
        let image = req.body.name;
        let productExists = await productModel.findOne({name:req.body.name})
        if(productExists){
            res.status(409).json({error :"product  already exists"})
        }
        else{
            let newProduct = new productModel(req.body);
            await newProduct.save();
            res.status(200).json({result:"success",productDetails:newProduct});
       }

    }
    catch(err){
        console.log("error;_______________post:product");
        console.log(err)
    }

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



function validateProduct(req,res,next){
let {name,description,image,color,price,discount,quantity,categoryId,creatorId} = req.body;
if(!name){res.status(400).json("please provide a product name")}
else if (!description){res.status(400).json("please provide description to product")}
else if(!image){res.status(400).json("please provide an image url")}
else if(!color){res.status(400).json("please specify the color of the product in hex code , with out #")}
else if(!price){res.status(400).json("please provide price of the product")}
else if(!discount){res.status(400).json("please provide discount to the product")}
else if(!quantity){res.status(400).json("please the number of items available")}
else if(!categoryId){res.status(400).json("please select a category to the product or create a new one")}
else{
    next()
}
}





module.exports={productRouter}