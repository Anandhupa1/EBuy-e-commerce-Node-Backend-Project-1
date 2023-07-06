const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');





const CategorySchema = mongoose.Schema({
    
       name : {type:String, required : true},
       des  : {type:String, required : true},
       image:{type:String, required : true},
       

},{versionKey : false});

const categorySchema  = mongoose.model("category", CategorySchema );

module.exports={CategorySchema};