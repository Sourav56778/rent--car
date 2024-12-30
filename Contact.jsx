import React, { useState } from 'react';
import "./Contact.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact({ setshowcontact }) {
  const notify = () => toast("Booking successful!");

  const [data, setdata] = useState({
    name: "",
    address: "",
    number: "",
    from: "",
    to: "",
    date: ""
  });

  const onchnagehandeler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata(data => ({ ...data, [name]: value }));
  }

  const url = "http://localhost:4000";

  const addinfo = async (e) => {
    e.preventDefault();
    let newurl = url + "/api/contact/info";
    try {
      const response = await axios.post(newurl, data);

      if (response.data.success) {
        notify(); // Show toast on success
        alert("Booking successful!")
        setshowcontact(false); // Optionally close the contact form
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  }

  return (
    <div>
      <ToastContainer />
      <div className='login-popup'>
        <form onSubmit={addinfo} className='login-container'>
          <div className='login-popup-display'>
            <h2>Contact Form</h2>
            <i onClick={() => setshowcontact(false)} className="fa-solid fa-x"></i>
          </div>
          <div className='loginpopup-input'>
            <input name="name" onChange={onchnagehandeler} value={data.name} type='text' placeholder='Enter your name' required />
            <textarea name="address" onChange={onchnagehandeler} value={data.address} placeholder='Enter Your Address' rows="4" cols="50"></textarea>
            <input name='number' onChange={onchnagehandeler} value={data.number} type='text' placeholder='Enter Your Mobile Number' required />
            Destination:
            <div className='destination'>
              <input name='from' onChange={onchnagehandeler} value={data.from} type='text' placeholder='From' required />
              <input name='to' onChange={onchnagehandeler} value={data.to} type='text' placeholder='To' required />
            </div>
            <input name='date' onChange={onchnagehandeler} value={data.date} type='date' required />
          </div>
          <div className='login-popup-condition'>
            <button type='submit'>Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
