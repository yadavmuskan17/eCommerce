const express= require("express");
const route=express.Router();
const ProductController= require("../Controllers/productConroller");

route.get("/homeproductdisplay", ProductController.productDisplay);


module.exports=route;
