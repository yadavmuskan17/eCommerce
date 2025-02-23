import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdAddTask } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { RiSlideshowView } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import "../Css/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>
      <div className={`sidebar-container ${isOpen ? "open" : "closed"}`}>
        <aside className="menu">
          <p className="menu-title">Menu</p>
          <hr style={{ color: "#fff", width: "90%", fontWeight: "bold" }} />
          <nav className="menu-links">
            <Link to="dash">
              <MdDashboard /> DASHBOARD
            </Link>
            <Link to="addproduct">
              <IoMdPersonAdd /> ADD PRODUCT
            </Link>
            <Link to="updateproducts">
              <MdAddTask /> UPDATE PRODUCT
            </Link>
            <Link to="customerorders">
              <MdAddTask /> CUSTOMER ORDER
            </Link>
            <Link to="displaycustomer">
              <MdAddTask /> CUSTOMER DISPLAY
            </Link>
            <Link to="updatecustomer">
              <MdAddTask /> CUSTOMER UPDATE
            </Link>
            <Link to="/home">
              <RiSlideshowView /> LOGOUT
            </Link>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
