import React from 'react';
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer';
import NurseDetails from './nursedetails';
import NurseUserDetails from './nurseuserdetails'

const NurseBooking = ({ selectedNurse, setSelectedNurse }) => {
    return (
        <div>
            <Navbar/>
            <NurseDetails selectedNurse={selectedNurse} setSelectedNurse={setSelectedNurse}/>
            <NurseUserDetails selectedNurse={selectedNurse}/>
            <Footer/>
        </div>
    )
}

export default NurseBooking;