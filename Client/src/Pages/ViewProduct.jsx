import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FaRegHeart, FaStar } from "react-icons/fa";
import Button from 'react-bootstrap/Button';


import '../Css/Details.css'

import BASE_URL from "../config";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Redux/cardSlice";
// import { addtowishlist } from "../Redux/wishlistSlice";

import { useNavigate } from "react-router-dom";
const ViewProduct=()=>{
        const navigate=useNavigate() 

    const dispatch=useDispatch();
    const [mydata,setmydata]=useState({});
    const [images, setImages]=useState([]);
    const {id}=useParams();
    
    
    const loadData= async()=>{
        const api=`${BASE_URL}/product/productdetail`;
        try {
            const response=await axios.post(api,{id:id});
            setmydata(response.data);
            setImages(response.data.images);
        } catch (error) {
            console.log(error)
        }
    }
useEffect(()=>{
    loadData();
},[])

const showimg1=(img1)=>{
  let im=document.getElementById("imgMain")
  im.src=img1
}
const showimg2=(img2)=>{
  let im=document.getElementById("imgMain")
  im.src=img2
}
const showimg3=(img3)=>{
  let im=document.getElementById("imgMain")
  im.src=img3
}
const showimg4=(img4)=>{
  let im=document.getElementById("imgMain")
  im.src=img4
}
     
    return(
        <>
         <div id="item-details">
         <div id="images">
            <div id="image-div">
          <img src={`${BASE_URL}/${mydata.defaultImage}`} alt="" height="300px"  id="imgMain"/>
            </div>
            
          <div id="img-option">

                     <img src={`${BASE_URL}/${images[0]}`} alt="images" height="35" onMouseEnter={()=>{showimg1(`${BASE_URL}/${images[0]}`)}}/>
                     <img src={`${BASE_URL}/${images[1]}`} alt="images" height="35" onMouseEnter={()=>{showimg2(`${BASE_URL}/${images[1]}`)}}/>
                     <img src={`${BASE_URL}/${images[2]}`} alt="images" height="35" onMouseEnter={()=>{showimg3(`${BASE_URL}/${images[2]}`)}}/>
                     <img src={`${BASE_URL}/${images[3]}`} alt="images" height="35" onMouseEnter={()=>{showimg4(`${BASE_URL}/${images[3]}`)}}/>
          </div>
        </div>
        <div id="contents">
          <b id="pro-name">{mydata.name}</b>
          <b id="description">{mydata.description}</b>
          <b>Brand : {mydata.brand}</b>
          <b>Category : {mydata.category}</b> 
          <b id="price">
            Price : ₹{mydata.price} 
          </b>
          <b>
            </b>
            <h2></h2>
          
          <div id="btns">
            <Button
              size="sm"
              variant="success"
              onClick={() => {
                dispatch(
                    addtoCart({
                    id: mydata._id,
                    name: mydata.name,
                    brand: mydata.brand,
                    price: mydata.price,
                    description: mydata.description,
                    category: mydata.category,
                    images: mydata.images,
                    defaultImage: mydata.defaultImage,
                    ratings: mydata.rating,
                    status: mydata.status,
                    qnty: 1,
                  })
                );
              }}
            >
              {" "}
              <i class="fas fa-plus" /> Add to Cart
            </Button>
            <Button
              size="sm"
              variant="danger"
              onClick={() => {
                dispatch(
                    addtowishlist({
                    id: mydata._id,
                    name: mydata.name,
                    brand: mydata.brand,
                    price: mydata.price,
                    description: mydata.description,
                    category: mydata.category,
                    images: mydata.images,
                    defaultImage: mydata.defaultImage,
                    ratings: mydata.rating,
                    status: mydata.status,
                    qnty: 1,
                  })
                );
              }}
            >
              <i class="fas fa-heart" style={{height:"100px"}}></i><FaRegHeart style={{width:"60px"}}/>
            </Button >
            <Button size="large" variant="success" onClick={()=>{navigate("/checkout"(key._id))}}>
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      <br />
   
        </>
    )
}
export default ViewProduct