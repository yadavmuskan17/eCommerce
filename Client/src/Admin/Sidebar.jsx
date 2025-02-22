import React from "react";
import "../Css/Sidebar.css";
import { GoMultiSelect } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { RiSlideshowView } from "react-icons/ri";
import { Link ,Outlet} from "react-router-dom";



const Sidebar = () => {
  return (
    <>
    <div className="sidebar-container">
      <aside className="menu">
        <p className="menu-title">Menu</p>
     <hr style={{color:"#fff",width:"300px",fontWeight:"bold"}}></hr>
        <nav className="menu-links" >
         <Link to="dash">
          <MdDashboard />
            DASHBOARD
          </Link>
         <Link to="addproduct">
          <IoMdPersonAdd />
          ADD PRODUCT
          </Link>
         <Link to="updateproducts">
          <MdAddTask />
          UPDATE PRODUCT
          </Link>
          <Link to="customerorders">
          <MdAddTask />
          CUSTOMER ORDER
          </Link>
          <Link to="displaycustomer">
          <MdAddTask />
          CUSTOMER DISPLAY
           </Link>
           <Link to="updatecustomer">
           <MdAddTask />
           CUSTOMER UPDATE
           </Link>
         <Link>
          <RiSlideshowView />
          LOGOUT
          </Link>
         <Link>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
            
          </Link>
        </nav>

      </aside>
      
    </div>
   <div >
   {/* <Outlet/> */}
   </div>
    </>
  );
};

export default Sidebar;
