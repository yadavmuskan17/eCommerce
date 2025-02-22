

import {Outlet} from "react-router-dom"
import Header from  "./Header";

import Sidebar from "./Sidebar";
const AdminLayout=()=>{
    return(
        <>
        <div>
                  {/* <TopMenu/> */}
                  <Header/>
                  <Sidebar/>
        </div>
        <div style={{display:"flex",justifyContent:"center",marginTop:"100px",marginLeft:"400px"}}>
                    <Outlet/>
        </div>
       
            
        </>
    )
    // sdfZGl0E
}
export default AdminLayout;




