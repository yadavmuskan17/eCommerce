import React from "react";
import { Navbar, Form, Button, Nav, Image } from "react-bootstrap";
import "../Css/Header.css";
import avtar from "../assets/avatar.svg"




const Header = () => {
  return (
    <Navbar expand="lg" className=" navbar-custom py-3 px-4">
      {/* Search Bar */}
      <Form className="d-flex flex-grow-1">
        <h1 style={{fontWeight:"bolder",fontSize:"30px",color:"#fff"}}>@HPHONE</h1>
      </Form>

      {/* Right Section */}
      <Nav className="ml-auto d-flex align-items-center">
        {/* New Task Button */}
        <Button variant="primary" className="rounded-pill shadow-sm px-3 me-3">
          LOGOUT
        </Button>

   

        {/* Profile Section */}
        <div className="d-flex align-items-center">
          <Image
            src={avtar}
            roundedCircle
            className="me-2"
            style={{width:"50px"}}
          />
          <span className="fw-medium" style={{color:"#fff"}}>Profile
          {/* <Form.Select aria-label="Default select example" id='options'className="mb-2" >
             <option><GoMultiSelect  style={{fontSize:"30px",color:"black"}}/> </option>
             <option value="ADMIN">ADMIN</option>
             <option value="EMPLOYEE">EMPLOYEE</option>
         </Form.Select> */}
          </span>
        </div>
      </Nav>
    </Navbar>
  );
};

export default Header;
