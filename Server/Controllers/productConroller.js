const ProductModel=require("../Models/productModel");

const productDisplay=async(req, res)=>{
    try {
         const Product = await ProductModel.find({status:"primary"});
         res.status(200).send(Product);
    } catch (error) {
        console.log(error);
    }
}
const ProductDetails=async(req,res)=>{
    const {id}=req.body;
    try {
        const details=await ProductModel.findById(id);
        // console.log(details);
        // res.send("ok")
        res.status(200).send(details);
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    productDisplay,
    ProductDetails
}