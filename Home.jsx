import React from 'react'
import "./Home.css"

function Home({setshowlogin}) {

 return (
  <div className='maindiv'  >
   <div className='right-div-home'>
    <img src='https://imgd.aeplcdn.com/600x600/n/cw/ec/43037/toyota-fortuner-front-three-quarter-8.jpeg' />
   </div>
   <div className='left-div-home'>
   <div className='left-info'>
    <h1>WELCOME TO <span className='span'>RENT AVENUE</span></h1>
    <p>Welcome to RentAvenue, Siliguri's trusted choice for reliable and convenient car rentals! Whether you're planning a scenic trip through the foothills of the Himalayas, exploring the beauty of North Bengal, or need a vehicle for your daily travels, we have the perfect car for you. Located in the heart of Siliguri, we offer a wide range of vehicles, from compact cars to spacious SUVs, all at competitive rates. With RentAvenue, you’ll enjoy seamless service, transparent pricing, and a smooth rental experience every time. Let us be your travel partner as you explore Siliguri and beyond—welcome to RentAvenue, where your journey begins!</p>
    <button onClick={() => setshowlogin(true)}>BOOK NOW</button> {/* Removed navigate() */}
    </div>
   </div>
  </div>

 )
}

export default Home