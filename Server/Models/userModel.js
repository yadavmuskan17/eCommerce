

const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    name:String, 
    address:String, 
    city:String, 
    contact:String,  
    email:String, 
    password:String
})
module.exports=mongoose.model("user", UserSchema)