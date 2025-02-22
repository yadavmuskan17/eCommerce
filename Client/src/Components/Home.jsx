import Carousel from 'react-bootstrap/Carousel';
import silder1 from '../assets/slider.png'
import silder2 from '../assets/slider-2.png'
import silder3  from '../assets/slider-3.png'
import '../Css/Home.css';
import div2img from '../assets/home-div2img.png';
import homelogo from '../assets/home-logo.png';
import Home2 from '../Components/Home2';
import Arrivals from '../Components/Arrival';
import BASE_URL from '../config';

import { useContext, useEffect, useState } from 'react';

import { myLoginContext } from '../LoginContext';
import axios from 'axios';
const Home=()=> {
  const {setIsLogedIn}=useContext(myLoginContext);


  const getProfile=async()=>{
          const token=localStorage.getItem("token");
          try {
            let api=`${BASE_URL}/user/userprofile`;
            const response=await axios.post(api, null, {headers: { "Authorization": token } });
            localStorage.setItem("userid", response.data._id)
            localStorage.setItem("username", response.data.name);
            setIsLogedIn(true); 
          } catch (error) {
            console.log(error)
          }
  }

useEffect(()=>{
  if(localStorage.getItem("token"))
  {
    getProfile()
  }
},[])
  return (
    <>
    <Carousel data-bs-theme="dark" className='home-side'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={silder1}
          alt="First slide"
          style={{ float: 'right' }} // Align image to the right
        />
        <div className='side-div'>
        <h1 style={{fontSize:"80px"}}> STYLISH WIRELESS <br></br>
            ON-EAR HEADPHONE
          </h1>
         <pre style={
            {fontSize:"30px"}
         }>
         Fine Quality<br></br> 
         wireless headphones to stay inspried
         </pre>
        <button className='side-btn'>ORDER NOW</button>       
     </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={silder2}
          alt="Second slide"
        />
        <div className='side-div'>
        <h1 style={{fontSize:"80px"}}> FEEL THE MUSIC <br></br>
        IN YOUR BONES
          </h1>
         <pre style={
            {fontSize:"30px"}
         }>
         Music Loud<br></br> 
         Fulfill Your music needs
         </pre>
        <button className='side-btn'>ORDER NOW</button>       
     </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={silder3}
          alt="Third slide"
        />
       <div className='side-div2'>
        <h1 style={{fontSize:"80px"}}> EXHALE WORRIES <br></br>
            WITH HEADPHONE
          </h1>
         <pre style={
            {fontSize:"30px"}
         }>
         Deserve best<br></br> 
         interpret Your music differently
         </pre>
        <button className='side-btn'>ORDER NOW</button>       
     </div>
      </Carousel.Item>
    </Carousel>

    <div className="home-div2">
      <div class="image">
        <img  className="home-div2-img"  src={div2img}/>
      </div>
      <div class="home-div2text">
        <h1 style={{color:"rgb(102, 132, 222)",fontSize:"80px",fontWeight:"bold"}}>What's in the box</h1>
        <p>Marques ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis <br></br>
            ipsum suspendisse ultrices gravida. Risus commodo viverra.
       </p>
       <ul style={{fontSize:"32px"}}>
       <li> Solo Pro wireless headphones</li>
       <li> Carrying Case</li>
       <li>Lightning to USD-A charging cable</li>
        <li> Quick Start Guide</li>
        <li> Warranty Cart</li>
       </ul>
      </div>
      <img src={ homelogo } style={{position:"relative",top:"400px",width:"400px"}} ></img>
    </div>
<Arrivals/>
 <Home2/>


   

    </>
  );
}

export default  Home;