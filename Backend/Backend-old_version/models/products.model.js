const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const skuSchema = mongoose.Schema({
       price :Number,
       discount:Number,
       image :String,
       color :String,
       colorImg:String,
       quantity:Number,
       features:String

})


const productSchema = mongoose.Schema({
       name : {type:String, required : true},
       des  : {type:String, required : true},
       category  : {type:String, required : true},
       categoryImg:{type:String, required : true},
       subCategory  : {type:String, required : true},
       subCategoryImg  : {type:String, required : true},
       sku :[skuSchema],
       userId : {type :String},
      

},{versionKey : false});

const productModel = mongoose.model("product", productSchema );

module.exports={productModel,productSchema};