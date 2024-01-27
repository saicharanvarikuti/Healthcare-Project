import React from 'react';
import { Link } from 'react-router-dom';
import WhistlersLogoColor from './WhistlersLogoColor.png';

function Navbar() {
  return (
    <div className="Nav-component py-2 shadow-md fixed top-0 left-0 w-full bg-white">
      <div className="Nav-container px-24 flex justify-between items-center">
        <div className="Nav-left-wrapper">
          <img src={WhistlersLogoColor} alt="Whistlers Logo" className='w-40' />
        </div>
            <div className="Nav-right-wrapper flex gap-8 items-center">
                <Link to="/"><button className='Nav-button text-black'>Home</button></Link>
                <Link to="/services"><button className='Nav-button text-black'>Services</button></Link>
                <Link to=""><button className='Nav-button text-black'>Help</button></Link>
                <div className='Nav-button-wrapper'>
                  <Link to="/login"><button className='Nav-login-button px-4 py-2 bg-black text-white rounded-md font-sm'>Login / Sign Up</button></Link>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Navbar;
