import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WhistlersLogoWhite from '../Images/WhistlersLogoWhite.png';
import accountCircle from '../Images/accountcircle-black.svg';
import { useNavigate } from "react-router-dom";

function PartnerNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  // const userFirstName = "firstname"
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate('/');
  };

  return (
    <div className="Nav-component py-2 shadow-md fixed top-0 left-0 w-full bg-whistler-blue z-50">
      <div className="Nav-container px-24 flex justify-between items-center">
        <div className="Nav-left-wrapper">
          <img src={WhistlersLogoWhite} alt="Whistlers Logo" className='w-40' />
        </div>
        <div className="Nav-right-wrapper flex gap-10 items-center">
          <Link to="/pricing"><button className='Nav-button text-white font-inter text-sm hover:text-whistler-green'>Pricing</button></Link>
          {isLoggedIn ? (
            <div className='flex gap-2 items-center relative'>
              <>
                <button onClick={() => setShowDropdown(!showDropdown)}>
                  <img  src={accountCircle} className='w-10' alt="Account" />
                </button>
                {showDropdown && (
                  <div className="dropdown-menu absolute top-12  bg-white border border-gray-200 rounded-md shadow-lg">
                    <Link to="/partnerprofile"><button className="dropdown-item block px-6 py-4 pr-8 text-gray-800 hover:bg-gredient-green font-inter text-sm truncate w-full text-left">My Profile</button></Link>
                    <Link to="/Requests"><button className="dropdown-item block px-6 py-4 pr-8 text-gray-800 hover:bg-gredient-green font-inter text-sm truncate w-full text-left">Requests</button></Link>
                    <Link to="/PartnerBookings"><button className="dropdown-item block px-6 py-4 pr-8 text-gray-800 hover:bg-gredient-green font-inter text-sm truncate w-full text-left">Bookings</button></Link>
                    <button onClick={handleLogout} className="dropdown-item block px-6 py-4 pr-8 text-gray-800 hover:bg-gredient-green font-inter text-sm w-full text-left">Logout</button>
                  </div>
                )}
                {/* <p className='text-black p-2 text-sm'>Welcome {userFirstName}</p> */}
              </>
            </div>
          ) : (
            <Link to="/login">
              <button className='Nav-login-button px-4 py-2 bg-whistler-blue text-white font-inter rounded-md text-sm font-semibold hover:bg-whistler-green hover:text-white'>Not a partner? Login as patient</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default PartnerNavbar;
