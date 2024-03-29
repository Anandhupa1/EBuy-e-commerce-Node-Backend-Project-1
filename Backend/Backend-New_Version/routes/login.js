const express = require('express');
const { UserModel } = require('../models/user.model.js');
const loginRouter = express.Router();
const  bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { auth } = require('../middlewares/auth.js');



loginRouter.post('/',async (req,res)=>{
    let {email,password}=req.body;
    if(!email || !password){ res.status(422).json({error:"Please fill all the fields"});}


    try{
        
        let mdata =await UserModel.findOne({email : email});
        if(!mdata){res.status(404).json({error:"user doesn't exists,please register"})}
        else{
           
           const val = await bcrypt.compare(password,mdata.password);
           const  token = jwt.sign({ userId: mdata._id }, 'masai');
           //val?(res.status(200).json({message:"login succes",authToken:token}):res.status(401).json({error:"wrong password"})
           if(val){
            res.cookie("authToken",token);
            res.send("login successfull")
           }else{
            res.status(401).json({msg:"login failed , please try again with a registered account"})
           }
        }



         
    }
    catch(err){
        console.log(err)
        console.log("_________error in login")
    }

})

loginRouter.get("/user",auth,async(req,res)=>{
    try {
        let data = await UserModel.findById(req.body.userId);
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})




module.exports={loginRouter}