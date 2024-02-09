import React from 'react';
import Navbar from '../Navbar/navbar'
import DoctorDetails from './doctordetails';
import PatientDetails from './patientdetails'
import Footer from '../Footer/footer';

<<<<<<< HEAD
const DoctorAppointmentBooking = ({ selectedDoctor, setSelectedDoctor }) => {
    return (
        <div>
            <Navbar/>
            <DoctorDetails selectedDoctor={selectedDoctor} setSelectedDoctor={setSelectedDoctor}/>
=======
const DoctorAppointmentBooking = ({ selectedDoctor }) => {
    return (
        <div>
            <Navbar/>
            <DoctorDetails selectedDoctor={selectedDoctor}/>
>>>>>>> c5aa4c5825dd8a5c1129843b2f1106c14ac4515a
            <PatientDetails selectedDoctor={selectedDoctor}/>
            <Footer/>
        </div>
    )
}

export default DoctorAppointmentBooking;