const express = require('express');
const app = express();
require('dotenv').config();
const cookieParser = require("cookie-parser");
const {UserModel}=require('./models/user.model.js');
const {connection}=require('./config/connection')
const {regRouter}=require('./routes/register.js');
const {loginRouter}=require('./routes/login');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer')
const { productModel } = require('./models/products.model.js');
const { productRouter } = require('./routes/product.js');
const {auth}=require('./middlewares/auth');
const { orderRouter } = require('./routes/order.js');
const { googleRouter } = require('./routes/googleoAuth.js');
const { categoryRouter } = require('./routes/category.js');

app.use(cors({
   origin: 'http://localhost:3000',
   credentials: true
 }));
 app.use(express.json());
 app.use(cookieParser());
//______________________________________________________________

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './views/index.html'));
  });

 app.use("/users/register",regRouter);
 app.use("/users/login",loginRouter);
 app.use("/products",productRouter);
 app.use("/orders",orderRouter);
 app.use("/category",categoryRouter);
 app.use("/auth/google",googleRouter) ; //google oAuth route
 
//server_________________________________


















app.listen(process.env.port,async ()=>{
   try{
    await connection;
    console.log('connected to remote db')
   }
   catch(err){
    console.log("________________________________error while connecting to db");
    console.log(err);
   }
   console.log(`server started running @ http://localhost:${process.env.port}`)
})