import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaUserAltSlash } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import nav1 from '../assets/nav1.webp';
import nav2 from '../assets/nav2.jpg';
import nav3 from '../assets/nav3.webp';
import nav4 from '../assets/nav4.webp';
import nav5 from '../assets/nav5.jpg';
import nav6 from '../assets/nav6.webp';
import { useContext } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import "../Css/Topbar.css";
import BASE_URL from "../config";
import { myLoginContext } from "../LoginContext";
import { qntyIncrease, qntyDecrease, productRemove } from "../Redux/cardSlice";
import { FcLike } from "react-icons/fc";



const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const proData = useSelector((state) => state.mycart.cart); // Redux cart data
  const dispatch = useDispatch();
  const productData = useSelector(state => state.mycart.cart);
  const prolength = productData.length;
  const [showCart, setShowCart] = useState(false);
  const likefun = () => {
    navigate('/wishlist');
  }

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);
  const { isLogedIn, setIsLogedIn } = useContext(myLoginContext);

  const logout = () => {
    localStorage.clear();
    setIsLogedIn(false);
  }
  const qntyDecrease = (id) => {
    dispatch(qntyIncrease({ id: id }));
  }
  const QuantityDecrease = (id) => {
    dispatch(qntyDecrease({ id: id }));
  }

  const productDelete = (id) => {
    dispatch(proDelete({ id: id }))
  }

  return (
    <>

      <div id="topmenu">
        <Navbar expand="lg" className="topbar" >
          <Container fluid>
            <Navbar.Brand href="#" style={{ marginLeft: "20px", fontWeight: "bolder", color: "#fff" }}> @HPHONE </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto"
                // className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/" style={{ color: "#fff" }}>Home</Nav.Link>

                <NavDropdown title="SHOP" id="navbarScrollingDropdown" style={{ color: "#fff" }}>
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
                  <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link as={Link} to="adminlayout" style={{ color: "#fff" }}>Admin</Nav.Link>

              </Nav>



              <Nav className="d-flex gap-3">
                {/* DROPDOWN */}
                <Dropdown show={showDropdown} onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                  <Nav.Link className="d-flex align-items-center " onClick={() => setShowDropdown(!showDropdown)}>
                    {isLogedIn ? (<>
                      <FaUserCheck size={30} className="cursor-pointer mt-1 " style={{ color: "#fff" }} />
                    </>) : (<>
                      <FaUserAltSlash size={30} className="cursor-pointer mt-1 " style={{ color: "#fff" }} />
                    </>)}

                  </Nav.Link>
                  <Dropdown.Menu>
                    {isLogedIn ? (<>
                      <Dropdown.Item as={Link} to="/userlogin">
                        Welcome: <span style={{ color: "blue", fontSize: "16px" }}>{localStorage.getItem("username")}</span>
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
              <div >
                <FcLike size={30} onClick={likefun} ></FcLike>
              </div>


              <div className="cart-container position-relative mx-3">
                <a onClick={handleShow} style={{ cursor: "pointer" }}>
                  {/* <FaShoppingBag className="nav-icon" /> */}
                  <FaCartPlus onClick={handleShow} style={{ fontSize: "30px", color: "#fff", alignItems: "center", borderRadius: "50px", border: "2px soild black" }} />
                  <sup className="myitem"
                    style={{
                      marginRight: "20px", background: "#fff",
                      borderRadius: "60%", padding: "5px", color: "black",
                      fontWeight: "bold", fontSize: "11px"
                    }}>{prolength}</sup>
                </a>
              </div>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* ---------------------------------------------------------------------------------- */}
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
                  <FaMinusCircle onClick={() => { dispatch(qntyDecrease({ id: key.id })) }} />
                  {key.qnty}
                  {key.qnty}
                  <FaPlusCircle onClick={() => { dispatch(qntyIncrease({ id: key.id })) }} />
                </div>
                {/* Remove Button */}
                <Button
                  variant="danger"
                  size="sm"
                  style={{ marginLeft: "auto" }}
                  onClick={() => { dispatch(productRemove({ id: key.id })) }}                >
                  Remove
                </Button>
              </div>
            ))
          )}

          {/* Buttons */}
          <Button variant="primary" className="w-100 mb-2"
            onClick={() => { navigate("/checkout") }}>
            Proceed to Checkout
          </Button>
          <Button variant="secondary" className="w-100" onClick={handleClose}>
            View Cart
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}
export default Topbar;


