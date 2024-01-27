import React from 'react';
import Navbar from './navbar'
import { Login, Registration } from './login';

import Footer from './footer';

function LoginPage(){
    return (
        <div>
            <Navbar/>
            <Login/>
            <Registration/>
            {/* <Footer/> */}
        </div>
    )
}

export default LoginPage;