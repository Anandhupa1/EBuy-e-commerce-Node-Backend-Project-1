const express = require('express');
const { auth } = require('../middlewares/auth');
const { OrderModel } = require('../models/order.model');
const orderRouter = express.Router();


orderRouter.post("/",auth,async (req,res)=>{
 
   
   let {userId,   paymentStatus, amount,shippingAddress,  billingAddress}=req.body;
   if(!userId){res.status(401).json({err : "not authorized"})}
   else if(  !amount  || ! shippingAddress){res.status(402).json({err:"fill all the details"})}
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

// get user's orderes individualy

orderRouter.get("/user",auth,async (req,res)=>{
    let data = await OrderModel.findOne({userId :req.body.userId});
    res.send(data)
})






module.exports={orderRouter};