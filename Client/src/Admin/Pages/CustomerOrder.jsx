
import { useState,useEffect } from "react";
import BASE_URL from "../../config";
import Table from 'react-bootstrap/Table';
import axios from "axios";

const CustomerOrders=()=>{

  const [mydata,setMydata]=useState([]);


    const loadData=async()=>{
        let api=`${BASE_URL}/admin/customerOrders`;
    try {
        const response= await axios.get(api);
        setMydata(response.data);
        console.log(mydata);
    } catch (error) {
        console.log(error)
    }
}
    useEffect(()=>{
        loadData();
    },[])



   let sno=0;
   const ans=mydata.map((key)=>{
    sno++;

// converting time in indian standard time
    const isoDate=key.date;
    const date = new Date(isoDate);
    const options = { 
      timeZone: 'Asia/Kolkata',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric', 
      hour12: true
  };
  const DateandTime=date.toLocaleString('en-IN', options);
// ------------------------------------------------------------
    return(
      <>
      <tr>
        <td>{sno}</td>
        <td>
          <img src={key.proImage} alt=""style={{ width: 60, height: 60 , cursor:"pointer"}} />
        </td>
        <td>{key.products}</td>
        <td>₹{key.amount}</td>
        <td>{key.name}</td>
        <td>{key.contact}</td>
        <td>{key.email}</td>
        
        <details>
          <summary>Address</summary>
           <p><td>{key.address}</td></p>
        </details>

        <td>{key.city}</td>
        <td>{DateandTime}</td>
      </tr>
      
      </>
    )
   })
    return(
        <>
          <h3 align="center" style={{marginTop:"15px",marginBottom:"15px"}}>Customer Orders</h3>
        <Table striped bordered hover   style={{fontSize:"14px"}}>
      <thead>
        <tr>
          <th>sno</th>
          <th>Image</th>
          <th>Products</th>
          <th>Amount</th>
          <th>Customer_Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Address</th>
          <th>City</th>
          <th>Date</th>
          {/* <th>{isoDate}</th> */}
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
        </>
    )
}
export default CustomerOrders