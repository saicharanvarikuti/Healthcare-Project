import React from 'react';
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer';
import TherapyDetails from './therapydetails';
import TherapyUserDetails from './therapyuserdetails'

const TherapyBooking = ({ selectedTherapy, setSelectedTherapy }) => {
    return (
        <div>
            <Navbar/>
            <TherapyDetails selectedTherapy={selectedTherapy} setSelectedTherapy={setSelectedTherapy}/>
            <TherapyUserDetails selectedTherapy={selectedTherapy}/>
            <Footer/>
        </div>
    )
}

export default TherapyBooking;