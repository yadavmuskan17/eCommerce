import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Checkout.css";
import BASE_URL from "../config"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();
  const [mydata, setMydata] = useState({});

  const proData= useSelector(state=>state.mycart.cart);
const dispatch= useDispatch();


useEffect(()=>{
    if (!localStorage.getItem("username"))
    {
      navigate("/login");
    }

    loadData();
}, [])

const loadData=async()=>{
  const api=`${BASE_URL}/user/getuserdetail`;
  const response = await axios.post(api, {id:localStorage.getItem("userid")});
  console.log(response.data);
  setMydata(response.data);
}
  let totalAmount=0;
  let myProImg="";
  let myProList="";
  const ans= proData.map((key)=>{
    totalAmount+=key.price * key.qnty;
    myProImg=`${BASE_URL}/${key.defaultImage}`;
    myProList+=key.name+", ";
  return(
    <>
                <div className="card border-0">
                  <div className="card-header card-2">
                    <p className="card-text text-muted mt-md-4 mb-2 space">YOUR ORDER</p>
                    <hr className="my-2" />
                  </div>
                  <div className="card-body pt-0">
                    <div className="row justify-content-between">
                      <div className="col-auto col-md-7">
                        <div className="media flex-column flex-sm-row">
                          <img className="img-fluid" src={`${BASE_URL}/${key.defaultImage}`}  width="62" height="62" alt="Product" />
                          <div className="media-body my-auto">
                            <p><b>{key.name} </b></p>
                            <small className="text-muted">{key.brand}</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto my-auto"><p className="boxed-1">Price</p></div>
                      <div className="col-auto my-auto"><p><b> {key.price}</b></p></div>
                    </div>
                    <hr className="my-2" />
                    <div className="row justify-content-between">
                      <div className="col-4"><p><b>Price</b></p></div>
                      <div className="col-auto"><p><b> {key.price}</b></p></div>
                    </div>
                    <div className="row justify-content-between">
                      <div className="col"><p><b>Quanity</b></p></div>
                      <div className="col-auto"><p><b> {key.qnty} </b></p></div>
                    </div>
                    <div className="row justify-content-between">
                      <div className="col-4"><p><b>Total Amount</b></p></div>
                      <div className="col-auto"><p><b>{key.price * key.qnty}</b></p></div>
                    </div>
                    <hr className="my-0" />
                </div>
                </div>
    </>
  )
 })

 //Payment----------------------------------------------
 const [shoe,setShoe] = useState({
    name: "Training Shoes",
    creator: "Nike",
    img: "https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 500,
});

  
const initPay = (data) => {
  const options = {
    key : "rzp_test_Z3gcni2Pre1fWs",
    amount: data.amount,
    currency: data.currency,
    name: myProList,
    description: "Test",
    image:myProImg,
    order_id: data.id,
    handler: async (response) => {
      try {
        const verifyURL = "https://localhost:8080/api/payment/verify";
        const {data} = await axios.post(verifyURL,response);
      } catch(error) {
        console.log(error);
      }
    },
    theme: {
      color: "#3399cc",
    },
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};




   const handlePay = async () => {
    try {
      const orderURL = "http://localhost:8080/api/payment/orders";
      const {data} = await axios.post(orderURL,{amount: totalAmount});
      console.log(data);
      initPay(data.data);
    } catch (error) {
      console.log(error);
    }
  };

 //-------------------------------------------------------

  return (
    <div className="container-fluid my-5">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="card shadow-lg">
            <div className="row p-2 mt-3 justify-content-between mx-sm-2">
              <div className="col-auto">
                <img
                  className="img-fluid bell cursor-pointer"
                  src="https://i.imgur.com/uSHMClk.jpg"
                  width="30"
                  height="30"
                  alt="Notification"
                />
              </div>
            </div>
            
            <div className="row mx-auto justify-content-center text-center">
              <div className="col-12 mt-3">
                <nav aria-label="breadcrumb" className="second">
                  <ol className="breadcrumb indigo lighten-6 first">
                    <li className="breadcrumb-item font-weight-bold">
                      <button className="btn btn-link" onClick={() => navigate("/")}>BACK TO SHOP</button>
                    </li>

                  </ol>
                </nav>
              </div>
            </div>
            
            <div className="row justify-content-around">
              <div className="col-md-5">
                <div className="card border-0">
                  <div className="card-header pb-0">
                    <h2 className="card-title space">Checkout</h2>
                    <p className="card-text text-muted mt-4 space">SHIPPING DETAILS</p>
                    <hr className="my-0" />
                  </div>
                  <div className="card-body">
                    {/* <p><b>BBBootstrap Team Vasant Vihar 110020 New Delhi India</b></p>
                    <p><b>BBBootstrap@gmail.com</b></p> */}
                    <hr className="mt-0" />
                    <p className="text-muted mb-2">PAYMENT DETAILS</p>
                    <div className="form-group">
                      <label className="small text-muted mb-1">CUSTOMER NAME </label>
                      <input type="text"  value={mydata.name} className="form-control form-control-sm" placeholder="BBBootstrap Team" />
                    </div>
                    <div className="form-group">
                      <label className="small text-muted mb-1">CONTACT NO.</label>
                      <input type="text"  value={mydata.contact} className="form-control form-control-sm" placeholder="4534 5555 5555 5555" />
                    </div>
                    <div className="form-group">
                      <label className="small text-muted mb-1">EMAIL</label>
                      <input type="text"  value={mydata.email} className="form-control form-control-sm" placeholder="4534 5555 5555 5555" />
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6 pr-sm-2">
                        <div className="form-group">
                          <label className="small text-muted mb-1">SHIPPING ADDRESS</label>
                          <input type="text" value={mydata.address}  className="form-control form-control-sm" placeholder="06/21" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="small text-muted mb-1">CITY</label>
                          <input type="text" value={mydata.city} className="form-control form-control-sm" placeholder="183" />
                        </div>
                      </div>
                    </div>
                    {/* <button className="btn btn-lg btn-block">PAYMENT NOW</button> */}
                  </div>
                </div>
              </div>
              
              <div className="col-md-5">
              <div className="col-md">
                {ans}
                <div className="row justify-content-between">
                      <div className="col-4"><p><b>Net Amount</b></p></div>
                      <div className="col-auto"><p><b> {totalAmount}</b></p></div>
                    </div>  <hr className="my-0" />
                    <button className="btn btn-block btn-outline-primary btn-lg mt-4"  onClick={handlePay}>PAYMENT NOW</button>

                </div>
             <div>
                
             </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
