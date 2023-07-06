const { CategoryModel } = require("../models/category.model");

const categoryRouter = require("express").Router();

categoryRouter.get("/",async(req,res)=>{
    try{
     let output = await CategoryModel.find();
     res.send(output);
    }catch(err){console.log("error from category router_______",err)}
})

//____________________________________post___________________________________________________________________

categoryRouter.post("/",async(req,res)=>{
    try{
     let {name,description,image} =req.body;
     if(!name||!description||!image){res.status(400).json({ error: 'Insufficient data. Please provide name, description and image url ' });}
     else{
        let categoryExists = await CategoryModel.findOne({name:req.body.name});
       
        if(categoryExists){res.status(409).json("category allready exists,please use the existing one ,you can also update or delete the existing category")}
        else{
        let out = new CategoryModel(req.body);
        let data = await out.save();
        res.send(data)
        }
     }
    }catch(err){console.log("error from category router_______",err)}
})

//____________________________________delete _________________________________________________________________

categoryRouter.delete("/:id",async(req,res)=>{
    try{
     if(!req.params.id){res.status(400).json("please provide id of category")}
     let itemExists = await CategoryModel.findById(req.params.id);
     if(!itemExists){res.status(404).json("No category exists, with the given id")}
     else{
     let output = await CategoryModel.findByIdAndDelete(req.params.id);
     res.send({deleted:true,data:output});
     }
    }catch(err){console.log("error from category router_______",err)}
})

//____________________________________update _________________________________________________________________

categoryRouter.get("/",async(req,res)=>{
    try{
     let output = await CategoryModel.find();
     res.send(output);
    }catch(err){console.log("error from category router_______",err)}
})

module.exports = {categoryRouter};