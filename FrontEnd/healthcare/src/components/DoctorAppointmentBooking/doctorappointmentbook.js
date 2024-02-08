import React from 'react';
import Navbar from '../Navbar/navbar'
import DoctorDetails from './doctordetails';
import PatientDetails from './patientdetails'
import Footer from '../Footer/footer';

const DoctorAppointmentBooking = ({ selectedDoctor }) => {
    return (
        <div>
            <Navbar/>
            <DoctorDetails selectedDoctor={selectedDoctor}/>
            <PatientDetails selectedDoctor={selectedDoctor}/>
            <Footer/>
        </div>
    )
}

export default DoctorAppointmentBooking;