const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');





const productSchema = mongoose.Schema({
       title : {type:String, required : true},
       note  : {type:String, required : true},
       userId : {type :String, required :true}
},{versionKey : false});

const productModel = mongoose.model("product", productSchema );

module.exports={productModel};