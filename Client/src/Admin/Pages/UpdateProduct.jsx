// import { useEffect, useState } from "react";
// import BASE_URL from "../../config";
// import { Button } from "react-bootstrap";
// import Table from 'react-bootstrap/Table';
// import axios from "axios";




// const UpdatProduct=()=>{
//  const [mydata,setMydata]=useState([]);

//  const loadData=async()=>{
//     const api=`${BASE_URL}/admin/productdisplay`;
//     try{
//         const response=await axios.get(api);
//         console.log(response.data);
//         setMydata(response.data);
//     }
//     catch(error){
//         console.log(error);
//     }
//  }
//  useEffect(()=>{
//     loadData();
//  },[])
   
//  const handlePrimary= async(e,id)=>{
//     e.preventDefault();
//     const api=`${BASE_URL}/admin/productmakeprimary`;
//     try{
//         const response= await axios.post(api,{id:id});
//         console.log(response.data);
//     }catch(error) {
//         console.log(error);
//     }
//     loadData();
//  }
//  const handleNormal= async(e,id)=>{
//     e.preventDefault();
//     const api=`${BASE_URL}/admin/productmakenormal`;
//     try{
//         const response= await axios.post(api,{id:id});
//         console.log(response.data);
//     }catch(error) {
//         console.log(error);
//     }
//     loadData();
//  }
// const ans=mydata.map((key)=>{
//     return(
//         <>
//         <tr>
//             <td>
//                 <img src={`${BASE_URL}/${key.defaultImage}`} style={{ width: 50, height: 50 }} alt="Uploaded File" />
//             </td>
//             <td>{key.name}</td>
//             <td>{key.brand}</td>
//             <td>{key.price}</td>
//             <td>{key.description}</td>
//             <td>{key.category}</td>
//             <td>{key.ratings}</td>
//             <td>
//                 {key.status=="normal"?
//                 (<>
//                     <Button  variant="warning" onClick={(e)=>{handlePrimary(e,key._id)}}>Primary</Button>
//                 </>):(
//                 <>
//                   <Button  variant="success"  onClick={(e)=>{handleNormal(e,key._id)}}>Normal</Button>
//                 </>)}
              
//             </td>
//         </tr>
//         </>
//     )
// })


//     return(
//         <>
//        <div>
//         <h1>UPDATE PRODUCT</h1>
     
//        <Table striped bordered hover style={{fontSize:"12px"}}>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Product Name</th>
//           <th>Brand</th>
//           <th>Price</th>
//           <th>Description</th>
//           <th>Category</th>
//           <th>Status</th>
//           <th>Rating</th>
//           <th> </th>
//         </tr>
//       </thead>
//       <tbody>
//        {ans}
//       </tbody>
//       </Table>
//       </div>

//         </>
//     )
// }
// export default UpdatProduct;

import { useState, useEffect } from 'react';
import { CSmartTable, CAvatar, CBadge, CButton, CCollapse, CCardBody } from '@coreui/react-pro';
import axios from "axios";
import BASE_URL from "../../config";
import { Button } from "react-bootstrap";

import { message } from "antd";
import { useNavigate } from "react-router-dom";


const UpdateProduct = () => {
  const [details, setDetails] = useState([]);
  const [bookdata, setbookdata] = useState([]);  // State for API data
  const navigate= useNavigate();
  // Fetch API data
  const loaddata = () => {
    let url = `${BASE_URL}/admin/productdisplay`;  // Replace with your API endpoint
    axios.get(url).then((res) => {
      console.log(res.data);
      setbookdata(res.data);  // Set the fetched data to bookdata
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });
  };

  useEffect(() => {
    loaddata();
  }, []);
  const handlePrimary= async(e,id)=>{
    e.preventDefault();
    const api=`${BASE_URL}/admin/productmakeprimary`;
    try{
        const response= await axios.post(api,{id:id});
        console.log(response.data);
    }catch(error) {
        console.log(error);
    }
    loadData();
 }
 const handleNormal= async(e,id)=>{
    e.preventDefault();
    const api=`${BASE_URL}/admin/productmakenormal`;
    try{
        const response= await axios.post(api,{id:id});
        console.log(response.data);
    }catch(error) {
        console.log(error);
    }
    loadData();
 }
// }
  const columns = [
    { key: 'avatar', label: '', filter: false, sorter: false, },
    { key: 'name', label: 'Product Name' },  // Define column for employee number
    { key: 'brand', label: 'Brand' },  // Column for employee name
    { key: 'description', label: 'Description' },  // Column for email
    { key: 'price', label: 'Price' },  // Column for contact number
    { key: 'show_details', label: '', _style: { width: '1%' }, filter: false, sorter: false },
  ];

  const getBadge = (status) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Inactive': return 'secondary';
      case 'Pending': return 'warning';
      case 'Banned': return 'danger';
      default: return 'primary';
    }
  };

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  return (
    <>
         <div style={{ width: '100%', height: '100vh' }}>
          <div style={{float :"right"}}>
          {/* <Addbutton/> */}
          </div>

      <CSmartTable
        cleaner
        clickableRows
        columns={columns}
        columnFilter
        columnSorter
        footer
        items={bookdata}  // Use bookdata for table rows
        itemsPerPageSelect
        itemsPerPage={5}
        pagination
        scopedColumns={{
            avatar: (item) => (
                          <td>
                            <img style={{width:"42px"}} src={`${BASE_URL}/${item.defaultImage}`} />
                          </td>
                        ),
          show_details: (item) => (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => toggleDetails(item.name)}
              >
                {details.includes(item.name) ? 'Hide' : 'Show'}
              </CButton>
            </td>
          ),
          details: (item) => (
            <CCollapse visible={details.includes(item.name)}>
              <CCardBody className="p-3">
                <h4>{item.brand}</h4>
                <p className="text-body-secondary">Price {item.price}</p>
                <p>Description {item.description}</p>
                <CButton size="sm" color="info" onClick={()=>{navigate(`/editdata/${item._id}`)}}>
                     Edit</CButton>
                <CButton size="sm" color="danger" className="ms-1"
                onClick={(e)=>{handlePrimary(e,item._id)}}>
                     Delete</CButton>
                     {item.status=="normal"?
                (<>
                    <Button  variant="warning" onClick={(e)=>{handlePrimary(e,item._id)}}>Primary</Button>
                </>):(
                <>
                  <Button  variant="success"  onClick={(e)=>{handleNormal(e,item._id)}}>Normal</Button>
                </>)}
              </CCardBody>
            </CCollapse>
          
          ),
        }}
        selectable
        tableFilter
        tableProps={{ className: 'add-this-class', responsive: true, striped: true, hover: true }}
        tableBodyProps={{ className: 'align-middle' }}
      />
        </div>
    </>
  );
};

export default UpdateProduct;


