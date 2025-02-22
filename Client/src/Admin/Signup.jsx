

import { Link } from "react-router-dom";
import "../Css/Login.css";
import { useEffect, useState } from "react";
import BASE_URL from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';

const Signup=()=>{
    const [input, setInput] = useState({});
const navigate= useNavigate();


const handleInput=(e)=>{
    let name=e.target.name;
    let value= e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
}

const handleSubmit=async(e)=>{
    e.preventDefault();
    const api=`${BASE_URL}/user/usersignup`;
   
    try {
         const response= await axios.post(api, input);
         console.log(response);
         toast.success(response.data.msg)
         navigate("/login")
    } catch (error) {
         toast.error(error.response.data.msg);
    }
}

// useEffect(()=>{
//     if(localStorage.getItem("username"))
//     {
//         navigate("/home")
//     }
// },[])
    return(
        <>
          <div className="signup-container" style={{marginBottom:"62px", marginTop:"20px"}}>
            <div className="signup-box"  style={{marginBottom:"12px"}}>
                <h2 className="signup-title">Sign Up</h2>
                <form className="signup-form">
               <input type="text" name="name" placeholder="Full Name" className="signup-input"
                    value={input.name} onChange={handleInput} />
                    <input type="text" name="address" placeholder="Shipping Address" className="signup-input" 
                    value={input.address} onChange={handleInput} />
                    <input type="text" name="city" placeholder="City" className="signup-input" 
                    value={input.city} onChange={handleInput} />
                    <input type="text" name="contact" placeholder="Contact no" className="signup-input" 
                    value={input.contact} onChange={handleInput} />
                    <input type="email" name="email" placeholder="Email" className="signup-input" 
                    value={input.email} onChange={handleInput} />
                    <input type="password" name="password" placeholder="Password" className="signup-input" 
                    value={input.password} onChange={handleInput} />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" className="signup-input" 
                    value={input.confirmPassword} onChange={handleInput} />
                    <button type="submit" className="signup-button"
                    onClick={handleSubmit}>Sign Up</button>
                </form>
                <p className="signup-text">
                    Already have an account? <Link to="/login" className="signup-link">Login</Link>
                </p>
            </div>
            <ToastContainer />
        </div>
        </>
    )
}
export default Signup;