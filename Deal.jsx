import React from 'react'
import "./Deal.css"

function Deal() {
  return (
  <>
  <div className='main-deal' id='main-deal'>
   <h1>WE DEAL IN </h1>
   <div className='deal-allinfo'>
    <div className='deal-info'>
     <h3>SUV</h3>
     <h4>BREZZA , CREATA , TATA HARRIER HONDA ELEVATE , FRONX , VENUE ,TATA NEXON , INNOVA </h4>
    </div>
    <div className='deal-info'>
     <h3>SEDAN </h3>
     <h4>HONDA CITY , HUNDAI VERNA , WAGON R , VOLVO XC70 ,I20</h4>
    </div>
    <div className='deal-info'>
     <h3>SECURITY VEHICLES </h3>
     <h4>FORTUNER , ENDEAVOUR , THAR ,XUV 700 , INNOVA  </h4>
    </div>
   </div>
  </div>
  <div className='cardiv'>
   <img src="/img2.jpg"/>
  </div>
  </>
 )
}

export default Deal