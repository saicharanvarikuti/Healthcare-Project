import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function PartnerBookings({selectedBooking, setSelectedBooking}) {
  const navigate = useNavigate();
  const [myBookings, setMyBookings] = useState([]);
  const token = localStorage.getItem('token');
      const headers = {
        Authorization: `${token}`,
      };
  useEffect(() => {
    axios.get('http://localhost:3000/partnerBookings',{ headers }).then(response => {
      setMyBookings(response.data);
    })
    .catch(error => {
        console.error('Error fetching bookings data: ', error);
      });
  }, []);

//   useEffect(() => {
//     if (selectedBooking) {
//         navigateToViewBooking(selectedBooking);
//     }
// }, [selectedBooking]);

const handleViewBooking = (booking) => {
  setSelectedBooking(booking);
  navigate('/viewbooking', { state: { selectedBooking: booking } });  
};

// useEffect(() => {
//   if (selectedBooking) {
//     navigate('/viewbooking', { state: { selectedBooking } });
//   }
// }, [selectedBooking]);
  
  const handleCancelBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      axios.post('http://localhost:3000/cancelBooking', { BOOKING_ID: bookingId }, { headers })
        .then(response => {
          console.log('Cancellation response:', response.data);
          setMyBookings(myBookings.map(booking => {
            if (booking.BOOKING_ID === bookingId) {
              booking.BOOKING_STATUS = 'cancelled';
            }
            return booking;
          }));
          alert('Booking cancelled successfully');
        })
        .catch(error => {
          console.error('Error cancelling booking: ', error);
          alert('Error cancelling booking');
        });
    }
  }
  return (
    <div>
      <Navbar />
      <section className='section is-selectpartner mt-10 p-24 flex flex-col bg-white  justify-between'>
        <div className='flex justify-between'>
          <div><h2 className='text-whistler-blue font-merriweather text-3xl mb-16'>Recent Bookings:</h2></div>
          <div><Link to="/profile"><button className='px-4 py-2 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-white  hover:scale-105 hover:text-whistler-blue'>Close</button></Link></div>
        </div>
        <div className='flex flex-col rounded-xl overflow-hidden'>
          <div className='h-12 grid grid-flow-col grid-cols-5 items-center font-bold text-white bg-whistler-blue px-4 text-center font-inter text-sm '>
            <p>Patient Name</p>
            <p>Appointment Date</p>
            <p>Booking Status</p>
            <p>Booking Type</p>
            <p>Action</p>
          </div>
          {myBookings.map(booking => (
            <div>
              <hr className="border-whistler-blue " />
            <div className='h-16 grid grid-flow-col grid-cols-5 items-center px-4 text-center font-inter text-sm bg-gray-300'>
              <p>{booking.PATIENT_NAME}</p>
              <p>{booking.APPOINTMENT_DATE}</p>
              <p>{booking.BOOKING_STATUS}</p>
              <p>{booking.BOOKING_TYPE}</p>
              <div className='flex gap-4 w-full justify-center'>
                <button onClick={()=> handleViewBooking(booking)} className=' px-4 py-2 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105 text-sm'>View</button>
                {booking.BOOKING_STATUS !== 'cancelled' && (<button onClick={() => handleCancelBooking(booking.BOOKING_ID)} className='px-4 py-2 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105 text-sm'>Cancel</button>)}
              </div>
            </div>
            </div>
            ))}
        </div>
      </section>
      <Footer />
    </div>    
  );
}

export default PartnerBookings;