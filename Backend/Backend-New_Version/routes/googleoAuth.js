const googleRouter = require("express").Router();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {passport} = require("../config/google.oAuth")
const jwt = require('jsonwebtoken');
const { UserModel } = require("../models/user.model");







//google oauth routes start
googleRouter.get('/',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

googleRouter.get( '/callback',
    passport.authenticate( 'google', {

       
        failureRedirect: '/login', //again redirecting to login page
        session:false //we are not using session, if you want to use session you can remove this.
}),
async (req,res)=>{
//console.log(req.user)

//create and send auth token 
let userInfoFromDb ;
let userExists = await UserModel.findOne({email:req.user.email});
if(userExists){userInfoFromDb=userExists}
else {
    let newUser = new UserModel(req.user);
    let out = await newUser.save();
    userInfoFromDb=out;
}
const  token = jwt.sign({ userId: userInfoFromDb._id }, 'masai');


//_______________________________
res.cookie("authToken",token)
res.redirect(302,"http://localhost:3000") //redirect to any page
}

);


module.exports={googleRouter}
//google oauth routes end _________________________________


