const express = require('express');
const { auth } = require('../middlewares/auth');
const { OrderModel } = require('../models/order.model');
const orderRouter = express.Router();


orderRouter.post("/",auth,async (req,res)=>{
 
   
   let {userId,   paymentStatus, amount,shippingAddress,  billingAddress}=req.body;
   if(!userId){res.status(401).json({err : "not authorized"})}
   else if( !paymentStatus || !amount  || ! shippingAddress){res.status(402).json({err:"fill all the details"})}
   else{
    
    console.log("check");
   let newOrder = new OrderModel(req.body);
   console.log(newOrder)
    await newOrder.save();
  
   res.send(newOrder);

   }
});

orderRouter.get("/",async(req,res)=>{
    res.send("orderroutee")
})




module.exports={orderRouter};