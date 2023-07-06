const mongoose = require('mongoose');
const  bcrypt = require('bcryptjs');
require('mongoose-type-email');


const addressSchema = mongoose.Schema({
    city: String,
    street: String,
    houseNumber: String,
    pinCode :String,
  });




const userSchema = mongoose.Schema({
       userName : {type:String, required : true},
       email    : { type: mongoose.SchemaTypes.Email, required: true},
       password : {type:String,required : true},
       profilePic:{type:String,default:"https://i.pinimg.com/originals/fd/14/a4/fd14a484f8e558209f0c2a94bc36b855.png"},
       mobile : {type:String},
       billingAddress : {type:addressSchema},
       shippingAdress:{type:addressSchema}
       
},{versionKey : false,timestamps:true});






//password hashing pre 
userSchema.pre('save',async function(next){
    //console.log("hi from hashing")
    if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password,10);
    }
    next();
})






const UserModel = mongoose.model('user',userSchema);

// -username ==> Input Field
// -email ==> Input Field
// -DOB ==> Input Field
// -Role ==> Dropdown Menu (Admin, Explorer)
// -location ==> Input Field
// -password ==> Input Field (Type: Password)
// -confirm password ==> Input Field (Type: Password)


module.exports={UserModel,addressSchema}