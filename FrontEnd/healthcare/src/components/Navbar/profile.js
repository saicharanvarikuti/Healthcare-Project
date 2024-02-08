import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const [profileDetails, setProfileDetails] = useState([]);
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `${token}`,
  };
  useEffect(() => {
    axios.get('http://localhost:3000/myProfile',{ headers }).then(response => {
      setProfileDetails(response.data);
      console.log(profileDetails)
    })
    .catch(error => {
        console.error('Error fetching profile details: ', error);
      });
  }, []);
  return (
    <div>
      <Navbar/>
      <div>
        <section className='section is-selectpartner mt-10 p-24 flex flex-col bg-white  justify-between'>
          <div className='flex justify-between'>
            <div><h2 className='text-whistler-blue font-merriweather text-3xl mb-16'>My Profile:</h2></div>
            <div><Link to="/"><button className='px-4 py-2 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-white  hover:scale-105 hover:text-whistler-blue'>Close</button></Link></div>
          </div>
          <div className='font-inter'>
            <p>User ID: {profileDetails.userId}</p>
            <p>First Name: {profileDetails.firstName}</p>
            <p>Last Name: {profileDetails.lastName}</p>
            <p>Email ID: {profileDetails.emailId}</p>
            <p>Account Status: {profileDetails.status}</p>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default Profile;