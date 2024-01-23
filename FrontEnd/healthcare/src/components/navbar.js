import React from 'react';
import WhistlersLogoColor from './WhistlersLogoColor.png';

function Navbar() {
  return (
    <div className="Nav-component py-2 shadow-md">
      <div className="Nav-container px-24 flex justify-between items-center">
        <div className="Nav-left-wrapper">
          <img src={WhistlersLogoColor} alt="Whistlers Logo" className='w-40' />
        </div>
            <div className="Nav-right-wrapper flex gap-8">
                <button className='Nav-button text-black'>Home</button>
                <button className='Nav-button text-black'>Services</button>
                <button className='Nav-button text-black'>Help</button>
                <div className='Nav-button-wrapper'>
                    <button className='Nav-login-button text-black font-bold'>Login / Sign Up</button>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Navbar;
