const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');





const CategorySchema = mongoose.Schema({
    
       name : {type:String, required : true},
       description  : {type:String, required : true},
       image:{type:String, required : true},
       

},{versionKey : false});

const CategoryModel  = mongoose.model("category", CategorySchema );

module.exports={CategoryModel};