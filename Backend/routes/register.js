const express = require('express');

const { UserModel } = require('../models/user.model.js');
const regRouter = express.Router();
// regRouter.use(express.json())


regRouter.post('/',async (req,res)=>{
    let {userName,email,DOB,role,location,password,cpassword}=req.body;
    if(password!=cpassword){res.status(401).json({error:"please fill password corretcly"})}
    else if(!userName|| !email || !password || !cpassword){
        res.status(422).json({error:"Please fill all the fields"});
    }
    

    try{
        let userExists = await UserModel.findOne({email :email});
        if(userExists){res.status(409).json({error:"user already exists"})}
        else{
        
        let newUser = new UserModel(req.body);
        //////////////////////////password hashing;done @ schema
        await newUser.save();
        res.send(newUser)
        }
    }
    catch(err){
        console.log("error : register-post _________________________________")
        console.log(err)
    }
    
    
   
});







module.exports={regRouter}