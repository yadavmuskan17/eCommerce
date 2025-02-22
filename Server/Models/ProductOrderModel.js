


const mongoose=require("mongoose");
const ProductOrderSchema=new mongoose.Schema({
    amount:String,
    proImage:String,
    products:String,
    name:String,
    contact:String,
    email:String,
    address:String,
    city:String,
    date: {
        type: Date,
        default: Date.now
      }
})
module.exports=mongoose.model("order", ProductOrderSchema)