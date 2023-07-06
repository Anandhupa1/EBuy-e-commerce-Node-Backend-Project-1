const mongoose = require('mongoose');
const { productSchema } = require('./products.model');
const { addressSchema } = require('./user.model');


const orderSchema = mongoose.Schema({
    userId :{type:String, required :true},
    paymentStatus : {type:Boolean, required :true},
    status: {type:String},
    amount:{type:Number, required :true},
    items :[productSchema],
    shippingAddress:{type:addressSchema,required:true}
    
});
const OrderModel = mongoose.model("order",orderSchema);

module.exports={OrderModel};
