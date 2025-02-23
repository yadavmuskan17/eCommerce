

import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { prodislike } from "../Redux/wishlistSlice";

import BASE_URL from "../config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Wishlist=()=>{
    const navigate=useNavigate()
    const wishlistData=useSelector(state=>state.wishlist.wish)

    const dispatch=useDispatch();

    const disLike=(id)=>{
       dispatch(prodislike({id:id}))
    }

    useEffect(()=>{
        if(!localStorage.getItem("username"))
        {
            navigate("/login")
        }
    },[])

const ProductDetails=(id)=>{
    navigate(`/details/${id}`);
}
    let sno=0;
    const ans=wishlistData.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>
                    <img src={`${BASE_URL}/${key.defaultImage}`} style={{ width: 60, height: 60 ,cursor:"pointer"}}  onClick={()=>{ProductDetails(key.id)}} alt="" />
                </td>
                <td>{key.name}</td>
                <td>{key.brand}</td>
                <td>
                    <details>
                        <summary>Details</summary>
                            <p>{key.description}</p>
                        
                    </details>
                </td>
                <td>₹ {key.price}</td>
                <td>
                    <Button variant="danger" onClick={()=>{disLike(key.id)}}>Dislike</Button>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h3 align="center" style={{marginTop:"15px", marginBottom:"15px"}}>Wishlist</h3>
        <div style={{marginBottom:"35px"}}>
        <Table striped bordered hover style={{fontSize:"12px"}}>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Image</th>
          <th>Product Name</th>
          <th>Brand</th>
          <th>Description</th>
          <th>Price</th>
          <th>Dislike</th>
        </tr>
      </thead>
      <tbody>
       {ans}
       </tbody>
       </Table>
       </div>
        </>
    )
}
export default Wishlist;