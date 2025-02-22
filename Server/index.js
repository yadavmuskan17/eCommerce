const express=require('express')
require('dotenv').config();
const app=express();
const bodyParser=require('body-parser')
const adminRoute= require("./Routes/adminRoute");
const productRoute=require("./Routes/productRoute");
const USERROUTES=require("./Routes/userRoute");
const paymentRoute=require("./Routes/payment");

const cors=require('cors')
const db=require('./db') //used to connect the database with database file
db();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/uploads', express.static('uploads'));


app.use("/admin", adminRoute);
app.use("/product",productRoute);
app.use("/user", USERROUTES);
app.use("/api/payment/",paymentRoute);




const port=process.env.PORT
app.listen(port,function(){
console.log(`server listening on port ${port}`)
})