import React from 'react';
import Navbar from '../Navbar/navbar'
import DoctorDetails from './doctordetails';
import PatientDetails from './patientdetails'
import Footer from '../Footer/footer';

const DoctorAppointmentBooking = ({ selectedDoctor, setSelectedDoctor }) => {
    return (
        <div>
            <Navbar/>
            <DoctorDetails selectedDoctor={selectedDoctor} setSelectedDoctor={setSelectedDoctor}/>
            <PatientDetails selectedDoctor={selectedDoctor}/>
            <Footer/>
        </div>
    )
}

export default DoctorAppointmentBooking;