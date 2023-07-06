const { UserModel } = require("../models/user.model");
const jwt = require('jsonwebtoken');



const auth = async (req,res,next)=>{
/////////////////////////
//console.log(req.method)
//let incToken = req.headers.authtoken;
let incToken = req.cookies.authToken;
console.log(incToken,"token")
await jwt.verify(incToken, 'masai', function(err, decoded) {
  
  console.log(decoded.userId,"decoded");
  req.body.userId =decoded.userId;
 // console.log(req.body)
 //_________________________
    if(err){
      
      res.send("invalid token")
  }
  else {
     next()
  }
  
   
  });




}


module.exports={auth}