import React, { useState } from 'react';
import PartnerNavbar from '../partnerportal/partnernavbar'
import { PartnerLogin, PartnerRegistration } from './partnerlogin';

const PartnerLoginPage = ({ selectedDoctor, setSelectedDoctor }) => {
    const [showLogin, setShowLogin] = useState(true);

    const showLoginForm = () => {
        setShowLogin(true);
      };
    
      const showRegistrationForm = () => {
        setShowLogin(false);
      };
    return (
        <div>
            <PartnerNavbar/>
            <div className="login-register-container w-full flex justify-center gap-8 font-semibold pt-[10vh] pb-4 shadow-sm ">
                <button onClick={showLoginForm} className={showLogin ? "px-4 py-2 bg-whistler-blue text-white rounded" : "px-4 py-2 bg-white text-black"}>Partner Login</button>
                <button onClick={showRegistrationForm} className={showLogin ? "px-4 py-2 bg-white text-black":" px-4 py-2 bg-whistler-blue text-white rounded"}>Partner Register</button>
            </div>
            {showLogin ? <PartnerLogin/> : <PartnerRegistration/>}            
        </div>
    )
}

export default PartnerLoginPage;