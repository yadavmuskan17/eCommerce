
// import { useState,useEffect } from "react";
// import BASE_URL from "../../config";
// import Table from 'react-bootstrap/Table';
// import axios from "axios";

// const CustomerOrders=()=>{

//   const [mydata,setMydata]=useState([]);


//     const loadData=async()=>{
//         let api=`${BASE_URL}/admin/customerOrders`;
//     try {
//         const response= await axios.get(api);
//         setMydata(response.data);
//         console.log(mydata);
//     } catch (error) {
//         console.log(error)
//     }
// }
//     useEffect(()=>{
//         loadData();
//     },[])



//    let sno=0;
//    const ans=mydata.map((key)=>{
//     sno++;

// // converting time in indian standard time
//     const isoDate=key.date;
//     const date = new Date(isoDate);
//     const options = { 
//       timeZone: 'Asia/Kolkata',
//       year: 'numeric', 
//       month: 'long', 
//       day: 'numeric', 
//       hour: 'numeric', 
//       minute: 'numeric', 
//       second: 'numeric', 
//       hour12: true
//   };
//   const DateandTime=date.toLocaleString('en-IN', options);
// // ------------------------------------------------------------
//     return(
//       <>
//       <tr>
//         <td>{sno}</td>
//         <td>
//           <img src={key.proImage} alt=""style={{ width: 60, height: 60 , cursor:"pointer"}} />
//         </td>
//         <td>{key.products}</td>
//         <td>₹{key.amount}</td>
//         <td>{key.name}</td>
//         <td>{key.contact}</td>
//         <td>{key.email}</td>
        
//         <details>
//           <summary>Address</summary>
//            <p><td>{key.address}</td></p>
//         </details>

//         <td>{key.city}</td>
//         <td>{DateandTime}</td>
//       </tr>
      
//       </>
//     )
//    })
//     return(
//         <>
//           <h3 align="center" style={{marginTop:"15px",marginBottom:"15px"}}>Customer Orders</h3>
//         <Table striped bordered hover   style={{fontSize:"14px"}}>
//       <thead>
//         <tr>
//           <th>sno</th>
//           <th>Image</th>
//           <th>Products</th>
//           <th>Amount</th>
//           <th>Customer_Name</th>
//           <th>Contact</th>
//           <th>Email</th>
//           <th>Address</th>
//           <th>City</th>
//           <th>Date</th>
//           {/* <th>{isoDate}</th> */}
//         </tr>
//       </thead>
//       <tbody>
//         {ans}
//         </tbody>
//         </Table>
//         </>
//     )
// }
// export default CustomerOrders;





import { useState, useEffect } from 'react';
import { CSmartTable, CAvatar, CBadge, CButton, CCollapse, CCardBody } from '@coreui/react-pro';
import axios from "axios";
import BASE_URL from "../../config";
import { Button } from "react-bootstrap";

import { message } from "antd";
import { useNavigate } from "react-router-dom";


const CustomerOrders = () => {
  const [details, setDetails] = useState([]);
  const [bookdata, setbookdata] = useState([]);  // State for API data
  const navigate= useNavigate();
  // Fetch API data
  const loaddata = () => {
    let url = `${BASE_URL}/admin/customerOrders`;  // Replace with your API endpoint
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

// }
  const columns = [
    { key: 'avatar', label: '', filter: false, sorter: false, },
    { key: 'name', label: 'Product Name' },  // Define column for employee number
    { key: 'address', label: 'Address' },  // Column for employee name
    { key: 'city', label: 'City' },  // Column for email
    { key: 'contact', label: 'Contact' }, 
    { key: 'email', label: 'Email' },   // Column for contact number
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
                            <img style={{width:"42px"}} src={`${BASE_URL}/${item.proImage}`} />
                          </td>
                        ),
          show_details: (item) => (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => toggleDetails(item.products)}
              >
                {details.includes(item.products) ? 'Hide' : 'Show'}
              </CButton>
            </td>
          ),
          details: (item) => (
            <CCollapse visible={details.includes(item.products)}>
              <CCardBody className="p-3">
                <h4>{item.amount}</h4>
                <p className="text-body-secondary">Price {item.address}</p>
                <p className="text-body-secondary">Email {item.email}</p>
                <p className="text-body-secondary">City {item.city}</p>
                <p>Contact {item.contact}</p>
                <CButton size="sm" color="info" >
                     Edit</CButton>
                <CButton size="sm" color="danger" className="ms-1"
                >
                     Delete</CButton>
                 
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

export default CustomerOrders;






