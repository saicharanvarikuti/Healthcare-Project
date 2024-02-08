import React from 'react';
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';

function ViewBooking({selectedBooking}) {
    const currentBooking = selectedBooking;
    return (
        <div>
            <Navbar />
            <section className=' mt-10 p-24 flex flex-col bg-white  justify-between'>
                <div className='flex justify-between'>
                    <div><h2 className='text-whistler-blue font-merriweather text-3xl mb-16'>View Booking:</h2></div>
                    <div><Link to="/mybookings"><button className='px-4 py-2 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-white  hover:scale-105 hover:text-whistler-blue'>Go Back</button></Link></div>
                </div>
                <div className='flex flex-col rounded-xl overflow-hidden'>
                    <div className=' '>
                        {/* <p>Booking ID: {currentBooking.BOOKING_ID}</p> */}
                        <p>Booking Date: {currentBooking.BOOKING_DATE}</p>
                        <p>Patient Name: {currentBooking.PATIENT_NAME}</p>
                        <p>Gender: {currentBooking.GENDER}</p>
                        <p>Date of Birth: {currentBooking.DOB}</p>
                        <p>Weight: {currentBooking.WEIGHT}</p>
                        <p>Address: {currentBooking.ADDRESS}</p>
                        <p>Mobile Number: {currentBooking.MOBILE_NUMBER}</p>
                        <p>Appointment Date: {currentBooking.APPOINTMENT_DATE}</p>
                        <p>Ailment Description: {currentBooking.AILMENT_DESCRIPTION}</p>
                        <p>Booking Status: {currentBooking.BOOKING_STATUS}</p>
                        <p>Booking Type: {currentBooking.BOOKING_TYPE}</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div> 

    );

}
export default ViewBooking;