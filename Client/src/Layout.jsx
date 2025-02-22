import { Outlet } from "react-router-dom";
import Topbar from "./Components/Topbar"
import Footer from "./Components/Footer";




const Layout=()=>{
    return(
        <>
           <Topbar/>
           {/* <Header/> */}
        
        <Outlet />
      
           <Footer/>

        </>
    )
}

export default Layout;