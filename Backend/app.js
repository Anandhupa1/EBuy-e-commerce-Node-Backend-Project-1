const express = require('express');
const app = express();
require('dotenv').config();
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

 app.use(cors())
 app.use(express.json());
//______________________________________________________________

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './views/index.html'));
  });

 app.use("/users/register",regRouter);
 app.use("/users/login",loginRouter);
 app.use("/products",productRouter);
 app.use("/orders",orderRouter);
//  app.use("/users/order",)
// app.use('/notes',noteRoute)


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