import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import nav1 from '../assets/nav1.webp';
import nav2 from '../assets/nav2.jpg';
import nav3 from '../assets/nav3.webp';
import nav4 from '../assets/nav4.webp';
import nav5 from '../assets/nav5.jpg';
import nav6 from '../assets/nav6.webp';
import { FaUserAltSlash } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

import "../Css/Topbar.css";
import { FaCartPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Offcanvas, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import BASE_URL from "../config";
import { useContext } from "react";
import { myLoginContext } from "../LoginContext";
import {qntyIncrease, qntyDecrease, productRemove} from "../Redux/cardSlice";

const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const proData = useSelector((state) => state.mycart.cart); // Redux cart data
  const dispatch = useDispatch();

  const ProductData = useSelector(state => state.mycart.cart);
  const proLength = ProductData.length;

  const [showCart, setShowCart] = useState(false);


  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);
  const { isLogedIn, setIsLogedIn } = useContext(myLoginContext);

  const logout = () => {
    localStorage.clear();
    setIsLogedIn(false);
  }


  const QuantityIncrease=(id)=>{
    dispatch(qntyIncrease({id:id}));
}

const QuantityDecrease=(id)=>{
  dispatch(qntyDecrease({id:id}));
}

const productDelete=(id)=>{
   dispatch(proDelete({id:id}))
}
  return (
    <>
      <Navbar expand="lg" className="topbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-logo" style={{ color: "#fff" }}>
            @HPHONE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto" >
              <Nav.Link as={Link} to="/" style={{ color: "#fff" }}>
                HOME
              </Nav.Link>
              <NavDropdown title="SHOP" id="navbarScrollingDropdown"   >
                <div className="dropdown-with-images" >
                  <div className="dropdown-column">
                    <NavDropdown.Item as={Link} to="/earbuds">
                      <img src={nav1} alt="Earbuds" className="dropdown-image" />
                      <span >True Wireless Earbuds</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/speaker">
                      <img src={nav2} alt="Speakers" className="dropdown-image" />
                      <span>Wireless Speakers</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/neckband" className="d-flex align-items-center">
                      <img src={nav3} alt="Neckbands" className="dropdown-image" />
                      <span>Neckbands</span>
                    </NavDropdown.Item>
                  </div>
                  {/* Second Column */}
                  <div className="dropdown-column">
                    <NavDropdown.Item as={Link} to="/headphone" className="d-flex align-items-center">
                      <img src={nav4} alt="Headphones" className="dropdown-image" />
                      <span>Wireless Headphones</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/earphone" className="d-flex align-items-center">
                      <img src={nav5} alt="Earphones" className="dropdown-image" />
                      <span>Wired Earphones</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Party-Speakers" className="d-flex align-items-center">
                      <img src={nav6} alt="Party Speakers" className="dropdown-image" />
                      <span>Party Speakers</span>
                    </NavDropdown.Item>
                  </div>
                </div>
              </NavDropdown>
              <NavDropdown title="PAGES"   id="navbarScrollingDropdown" >
                <NavDropdown.Item  as={Link} to="/adminlayout" className="d-flex align-items-center">
                <span>Dashbord</span>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/" style={{ color: "#fff" }}>
                CONTACT

              </Nav.Link>
            </Nav>
            {/* <Button  onClick={handleShow} className="cart-button"> */}


            <div style={{ cursor: "pointer", display: "inline-block" }} >
              <Nav className="d-flex gap-3">
                {/* DROPDOWN */}
                
                <Dropdown show={showDropdown} onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                  <Nav.Link className="d-flex align-items-center " onClick={() => setShowDropdown(!showDropdown)}>
                    {isLogedIn ? (<>
                      <FaUserCheck size={30} color="white" className="cursor-pointer mt-1 " />
                    </>) : (<>
                      <FaUserAltSlash size={28} color="white" className="cursor-pointer mt-1 " />
                    </>)}

                  </Nav.Link>
                  <Dropdown.Menu>
                    {isLogedIn ? (<>
                      <Dropdown.Item as={Link} to="/login">
                        Welcome: <span style={{ color: "blue",fontSize:"16px" }}>{localStorage.getItem("username")}</span>
                      </Dropdown.Item>
                      <Dropdown.Item onClick={logout}>
                        Logout!
                      </Dropdown.Item>
                    </>) : (<>
                      <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/signup">Signup</Dropdown.Item>
                    </>)}

                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </div>
         

            <div className="cart-container position-relative mx-3">
              <a onClick={handleShow} style={{ cursor: "pointer" }}>
                {/* <FaShoppingBag className="nav-icon" /> */}
                <FaCartPlus onClick={handleShow} style={{ fontSize: "30px", color: "#fff",alignItems:"center",borderRadius:"50px",border:"2px soild black" }} />              
                <sup className="myitem" 
                style={{marginRight:"20px",background:"#fff",
                borderRadius:"60%",padding:"5px",color:"black",
                fontWeight:"bold",fontSize:"11px"}}>{proLength}</sup>
              </a>
            </div>
            <div
              style={{ cursor: "pointer", display: "inline-block" }}>
            </div>
            {/* </Button> */} 
          </Navbar.Collapse>
        </Container>
      </Navbar>



      {/* //--------------------------------------------------------------------------- */}
      <Offcanvas show={showCart} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* If Cart is Empty */}
          {proData.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            proData.map((key) => (
              <div key={key._id} className="cart-item d-flex align-items-center mb-3">
                <img
                  src={`${BASE_URL}/${key.defaultImage}`} // Dynamic Image
                  style={{ width: 50, height: 50, marginRight: 10 }}
                  alt="Product"
                />
                <div>
                  <p style={{ margin: 0, fontWeight: "bold" }}>{key.name}</p>
                  <p style={{ margin: 0 }}>Rs. {key.price} x {key.qnty} = Rs. {key.price * key.qnty}</p>
                </div>
                <div>
                <FaMinusCircle onClick={()=>{dispatch(qntyDecrease({id:key.id}))}} />
                   {key.qnty} 
               <FaPlusCircle onClick={()=>{dispatch(qntyIncrease({id:key.id}))}} />  
                </div>
                {/* Remove Button */}
                <Button
                  variant="danger"
                  size="sm"
                  style={{ marginLeft: "auto" }}
                  onClick={()=>{dispatch(productRemove({id:key.id}))}}                >
                  Remove
                </Button>
              </div>
            ))
          )}

          {/* Buttons */}
          <Button variant="primary" className="w-100 mb-2" 
          onClick={()=>{navigate("/checkout")}}>
            Proceed to Checkout
          </Button>
          <Button variant="secondary" className="w-100" onClick={handleClose}>
            View Cart
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Topbar;








