const express = require('express');
const { UserModel } = require('../models/user.model.js');
const loginRouter = express.Router();
const  bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



loginRouter.post('/',async (req,res)=>{
    let {email,password}=req.body;
    if(!email || !password){ res.status(422).json({error:"Please fill all the fields"});}


    try{
      
        let mdata =await UserModel.findOne({email : email});
        if(!mdata){res.status(404).json({error:"user doesn't exists,please register"})}
        else{
           
           const val = await bcrypt.compare(password,mdata.password);
           const  token = jwt.sign({ userId: mdata._id }, 'masai');
           val?res.status(200).json({message:"login succes",authToken:token}):res.status(401).json({error:"wrong password"})
        }



         
    }
    catch(err){
        console.log(err)
        console.log("_________error in login")
    }

})






module.exports={loginRouter}