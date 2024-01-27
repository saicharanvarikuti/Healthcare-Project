import React from 'react';
import Navbar from './navbar'
import SelectPartner from './viewpartners'
import Footer from './footer';

function ShowDoctors(){
    return (
        <div>
            <Navbar/>
            <SelectPartner/>
            <Footer/>
        </div>
    )
}

export default ShowDoctors;