const { UserModel } = require("../models/user.model");

const adminRouter = require("express").Router();




adminRouter.get("/users",async(req,res)=>{
    try {
        let data = await UserModel.find();
        res.send(data);
    } catch (error) {
        console.log(error)
    }
})









module.exports={adminRouter}