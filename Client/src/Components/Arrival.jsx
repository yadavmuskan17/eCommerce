import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Css/Arrival.css';
import { useDispatch } from "react-redux";
import {addtoCart} from "../Redux/cardSlice";
import BASE_URL from "../config";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { addtowishlist } from "../Redux/wishlistSlice";
const Arrival = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
   const loadData=async()=>{
    const api=`${BASE_URL}/product/homeproductdisplay`;
    try {
        const response=await  axios.get(api);
        setMydata(response.data);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
   }

useEffect(()=>{
    loadData();
}, [])


const navigate=useNavigate();
const detail=(id)=>{
    navigate(`/viewproduct/${id}`);
}
 const ans=mydata.map((key)=>{
  return(
    <>
    {/* {mydata.map((item, index) => ( */}
          {/* <div key={index} className="product-card"> */}
          <div  className="product-card">
            <div className="image-container">
              <img src={`${BASE_URL}/${key.defaultImage}`} alt={key.name} className="product-image"  />
              <div className="hover-overlay">
                {/* <Button
                  variant="dark"
                  className="rounded-pill px-3"           
                   onClick={()=>{dispatch(addtoCart({id:key._id, name:key.name, brand:key.brand, price:key.price,
                     description:key.description, category:key.category,  images:key.images, defaultImage:key.defaultImage, 
                     ratings:key.ratings, status:key.status, qnty:1}))}}

                >
                  Add To Cart
                </Button> */}
                <Button variant="success" className="add-to-cart11"
        onClick={()=>{dispatch(addtoCart({id:key._id, productname:key.productname, productbrand:key.productbrand,
           productprice:key.productprice, description:key.description,category:key.category, 
            images:key.images, defaultImage:key.defaultImage, ratings:key.rating, status:key.status, qnty:1}))}}
                 >Add to Cart</Button>
                <Button variant="outline-dark" className="rounded-circle mx-2"
               onClick={()=>{dispatch(addtowishlist({id:key._id, name:key.name,brand:key.brand,
                price:key.price, description:key.description,category:key.category, 
                images:key.images, defaultImage:key.defaultImage, ratings:key.ratings, 
                status:key.status, qnty:1}))}}
               >❤️</Button>
                <Button variant="outline-dark" className="rounded-circle mx-2"  onClick={()=>{detail(key._id)}}>🔍</Button>
              </div>
            </div>
            <div className="product-info text-center">
              <h5 className="fw-bold">{key.name}</h5>
              <h6>{`Brand: ${key.brand}`}</h6>
              <h6>{`Category: ${key.category}`}</h6>
              <h6 style={{ color: 'crimson' }}>{`Price: Rs. ${key.price}`}</h6>
              {/* <h6>{`Discount: Rs. ${key.disco}`}</h6> */}
              {/* <div className="product-rating">
                            {[...Array(key.ratings)].map((_, index) => (
                                <FaStar key={index} className="star-icon" />
                            ))}
                           
              </div> */}
            </div>
          </div>
    </>
  )
 })


  return (
    <>
      <div id="proHeading" className="text-center my-4" style={{ padding: "50px" }}>
        <h6>BEAUTIFUL DESIGN</h6>
        <h1 className="fw-bold" style={{ fontSize: "60px" }}>Choose your style</h1>
      </div>

      <div id="homeProduct">
        {ans}
      </div>
    </>
  );
};

export default Arrival;
