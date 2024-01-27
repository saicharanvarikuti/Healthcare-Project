import React from 'react';
import Navbar from './navbar'
import DoctorDetails from './doctordetails';
import PatientDetails from './patientdetails'
import Footer from './footer';

function DoctorAppointmentBooking(){
    return (
        <div>
            <Navbar/>
            <DoctorDetails/>
            <PatientDetails/>
            <Footer/>
        </div>
    )
}

export default DoctorAppointmentBooking;