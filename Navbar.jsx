import React from 'react';
import "./Navbar.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';  // Import Link from react-scroll

function Navbar({ setshowlogin, setshowcontact, settoken, token }) {
  const [headline, setheadline] = useState('home');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    settoken(""); // Reset token to empty
    navigate("/"); // Redirect after logout
  };

  return (
    <div className="value2" id='value2'>
      <div className="value">
        <div className="all">
          <img src="./uu.jpeg" alt="" />
         
          <ScrollLink to='carouselExampleIndicators' spy={true} smooth={true} offset={-70} duration={600}> <video  autoplay muted className='video'>
            <source className='imgvideo' src='/logo.mp4' type='video/mp4'></source>
          </video></ScrollLink>
        </div>
        <div className='div2'>
          {/* Use ScrollLink from react-scroll to achieve smooth scrolling */}
          <ScrollLink to="maindiv" spy={true} smooth={true} offset={-70} duration={600}>
            <li>ABOUT</li>
          </ScrollLink>
          <ScrollLink to="main-service" spy={true} smooth={true} offset={-70} duration={600}>
            <li>SERVICES</li>
          </ScrollLink>
          <ScrollLink to="main-deal" spy={true} smooth={true} offset={-70} duration={600}>
            <li>CARS</li>
          </ScrollLink>
          {token ? (
            <li onClick={() => setshowcontact(true)} className='contact'>BOOK NOW</li>
          ) : (
            <li onClick={() => setshowlogin(true)} className='contact'>BOOK NOW</li>
          )}

          {/* Conditional rendering for Login and Logout */}
          {!token ? (
            <button onClick={() => setshowlogin(true)} className='btn'>Sign In</button>
          ) : (
            <div className='nav-profile'>
              <button onClick={logout} className='btn clr'>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
