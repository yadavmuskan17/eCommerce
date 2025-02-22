



import { useState,useEffect } from "react";
import BASE_URL from "../../config";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import Button from 'react-bootstrap/Button';

const UpdateCustomer=()=>{
    const [mydata,setMydata]=useState([]);

    const loadData=async()=>{
        let api=`${BASE_URL}/admin/displaycustomer`;
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

const CustomerDetel=async(id)=>{
     try {
         let api=`${BASE_URL}/admin/UserDelete`
         const response=await axios.post(api,{id:id});
         alert(response.data.msg);
         loadData()
     } catch (error) {
        console.log(error)
     }
}



    let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
               <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.address}</td>
                <td>{key.city}</td>
                <td>{key.contact}</td>
                <td>{key.email}</td>
                <td>
                    <Button variant="danger" onClick={()=>{CustomerDetel(key._id)}}>Delete</Button>
                </td>
               </tr>
            </>
        )
    })

    return(
        <>
         <h3 align="center" style={{marginTop:"15px",marginBottom:"15px"}}>All Customer's</h3>
        <Table striped bordered hover   style={{fontSize:"14px"}}>
      <thead>
        <tr>
          <th>sno</th>
          <th>Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
        </>
    )
}
export default UpdateCustomer;