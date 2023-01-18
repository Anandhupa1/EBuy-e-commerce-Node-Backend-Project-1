const express = require('express');
const app = express();
require('dotenv').config();
const {UserModel}=require('./models/user.model.js');
const {connection}=require('./config/connection')
const {regRouter}=require('./routes/register.js');
const {loginRouter}=require('./routes/login');
//const {auth}=require('./middlewares/auth');


 app.use(express.json());
//______________________________________________________________
app.get('/',async(req,res)=>{
    res.sendFile('views/index.html', {root: __dirname })
})

 app.use("/users/register",regRouter);
 app.use("/users/login",loginRouter);

// app.get('/',auth,(req,res)=>{
//     res.send("homee page")
// })
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