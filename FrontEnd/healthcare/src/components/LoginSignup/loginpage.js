import React, { useState } from 'react';
import Navbar from '../Navbar/navbar'
import { Login, Registration } from './login';
import Footer from '../Footer/footer';

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
            <div className="login-register-container w-full flex justify-center gap-8 font-semibold pt-[10vh] pb-4 shadow-sm ">
                <button onClick={showLoginForm} className={showLogin ? "px-4 py-2 bg-whistler-blue text-white rounded" : "px-4 py-2 bg-white text-black"}>Login</button>
                <button onClick={showRegistrationForm} className={showLogin ? "px-4 py-2 bg-white text-black":" px-4 py-2 bg-whistler-blue text-white rounded"}>Register</button>
            </div>
            {showLogin ? <Login /> : <Registration />}
            <Footer/>
        </div>
    )
}

export default LoginPage;