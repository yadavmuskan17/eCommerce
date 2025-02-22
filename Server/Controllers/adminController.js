const ProductModel= require("../Models/productModel");
const ProductOrderModel=require("../Models/ProductOrderModel");
const UserModel =require("../Models/userModel")

const productSave=async(req, res)=>{  
    const imageUrls = req.files.map(file => file.path);
    const {name, brand, price, description, category } =req.body;
      
    const Product= await ProductModel.create({
        name:name,
        brand:brand,
        price:price, 
        description:description, 
        category:category, 
        images:imageUrls,
        defaultImage:imageUrls[0]
    })

    res.status(200).send("Product Succesfully Uploaded!");
}

const productDisplay=async(req,res)=>{
    try{
        const Data=await ProductModel.find();
        res.status(200).send(Data);
        
    }catch(error){
        console.log(error);
    }
}

const productMakePrimary=async(req,res)=>{
    const{id}=req.body;
    const Data=await ProductModel.findByIdAndUpdate(id,{status:"primary"});
    res.status(201).send({msg:"Product Status Succesfully Changed!"});
}
const productMakeNormal=async(req,res)=>{
    const{id}=req.body;
    const Data=await ProductModel.findByIdAndUpdate(id,{status:"normal"});
    res.status(201).send({msg:"Product Status Succesfully Changed!"});
}
// const DeleteProduct=async(req,res)=>{
//     const {id}=req.body;
//     try {
//       const del=await ProductModel.findByIdAndDelete(id);
//       res.status(200).send({msg:"Product Deleted!"});
//     } catch (error) {
//       console.log(error)
//     }
//   }
  
  const CustomerOrderDetails=async(req,res)=>{
       try {
             const Oders=await ProductOrderModel.find();
             res.status(200).send(Oders);
       } catch (error) {
        console.log(error)
       }
  }
  
  const DisplayCustomer=async(req,res)=>{
    try {
         const Users=await UserModel.find();
         res.status(200).send(Users);
    } catch (error) {
      console.log(error)
    }
  }
  const CustomerDelete=async(req,res)=>{
    const {id}=req.body;
    try {
      const del=await UserModel.findByIdAndDelete(id);
      res.status(200).send({msg:"Customer Delete SuccessFully"});
    } catch (error) {
      console.log(error)
    }
}

module.exports={
    productSave,
    productDisplay,
    productMakePrimary,
    productMakeNormal,
    // DeleteProduct,
    CustomerOrderDetails,
    DisplayCustomer,
    CustomerDelete
}