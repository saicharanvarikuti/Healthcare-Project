import React, { useState } from 'react';
import Navbar from './navbar'
import { Login, Registration } from './login';
import Footer from './footer';

function LoginPage(){
    const [showLogin, setShowLogin] = useState(true);

    const showLoginForm = () => {
        setShowLogin(true);
      };
    
      const showRegistrationForm = () => {
        setShowLogin(false);
      };

    return (
        <div>
            <Navbar/>
            <div className="login-register-container w-full flex justify-center gap-14 font-semibold pt-[10vh] pb-4 shadow-sm ">
                <button onClick={showLoginForm} className={showLogin ? "px-4 py-2 bg-blue-100" : "p-0 bg-none"}>Login</button>
                <button onClick={showRegistrationForm} className={showLogin ? "p-0 bg-none":"px-4 py-2 bg-blue-100"}>Register</button>
            </div>
            {showLogin ? <Login /> : <Registration />}
            <Footer/>
        </div>
    )
}

export default LoginPage;