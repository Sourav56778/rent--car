import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/service/Service';
import Deal from './components/deal/Deal';

import Carasual from './components/carasual/Carasual';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/loginpopup/Login';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';

function App() {
  const [showlogin, setshowlogin] = useState(false);
  const [showcontact, setshowcontact] = useState(false);
  const [token, settoken] = useState(localStorage.getItem("token") || ""); 


 

  return (
    <>
      {showlogin && <Login setshowlogin={setshowlogin} settoken={settoken} token={token}  />} {/* Conditionally render login modal */}
      {showcontact && <Contact setshowcontact={setshowcontact}  />}
      <Navbar setshowlogin={setshowlogin} setshowcontact={setshowcontact} settoken={settoken} token={token} />
      <Carasual />
      <Routes>
        <Route path='/' element={<Home setshowlogin={setshowlogin} />} />
        
      </Routes>
      <About />
      <Service />
      <Deal />
      
      <Footer />
    </>
  );
}

export default App;
