import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home";
import Admin from "./Admin/Admin";
import Earbuds from "./Pages/Earbuds";
import AdminLayout from "./Admin/AdminLayout";
import Add_Product from "./Admin/Pages/AddProduct";
import UpdatProduct from "./Admin/Pages/UpdateProduct";
import Login from "./Admin/Login";
import Signup from "./Admin/Signup";
import Checkout from "./Pages/Checkout"
import CustomerOrders from "./Admin/Pages/CustomerOrder"; 
import DisplayCustomer from "./Admin/Pages/CustomerDisplay";
import UpdateCustomer from "./Admin/Pages/UpdateCustomer";

const App = () => {
  return (
   <>
    <BrowserRouter>
      <Routes>
        {/* Main Layout with Topbar */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="earbuds" element={<Earbuds />} />        
          <Route path="login" element={<Login/>}></Route>
          <Route path="signup" element={<Signup/>}/> 
          <Route path="checkout" element={<Checkout/>}/> 

          {/* Nested Admin Routes inside AdminLayout */}   
 
     </Route>
    
    <Route path="adminlayout" element={<AdminLayout />}>
            <Route path="admin" element={<Admin />} />
            <Route path="addproduct" element={<Add_Product/>}/>
            <Route path="updateproducts" element={<UpdatProduct/>}/>
            <Route path="customerorders" element={<CustomerOrders/>}/>
              <Route path="displaycustomer" element={<DisplayCustomer/>}/>
              <Route path="updatecustomer" element={<UpdateCustomer/>}/>
          </Route>
      <Route path="login" element={<Login/>}/>

    </Routes>
    </BrowserRouter>
   </>
  );
};

export default App;
