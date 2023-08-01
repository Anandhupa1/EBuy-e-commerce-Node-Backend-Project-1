const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');





const productSchema = mongoose.Schema({
       name : {type:String, required : true},
       description  : {type:String, required : true},
       image :{type:String, required : true},
       color :{type:String, required : true},
       price :{type:Number, required : true},
       discount :{type:Number, required : true},
       quantity :{type:Number, required : true},
       categoryId : {type: mongoose.Schema.Types.ObjectId,ref: 'category'},
       creatorId : {type: mongoose.Schema.Types.ObjectId,ref: 'user'},


},{versionKey : false});

const productModel = mongoose.model("product", productSchema );

module.exports={productModel,productSchema};