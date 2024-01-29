import React from 'react';
import suryaDoctor from './suryadoctor.jpg'
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import Footer from './footer';

function DoctorDetails() {
    const handleBooking = async(event)=>{
        event.preventDefault(); 
        // try {
        //     const response = await axios.post('http://localhost:3000/scheduleDoctor', {
        //         FIRST_NAME: firstName,
        //         LAST_NAME: lastName,
        //         EMAILID: email,
        //         PASSWORD: password,
        //     });

        //     if (response.status === 200) {
        //         console.log('Registration successful');
        //         setSuccessMessage(response.data.message);
        //         setError('');
        //     } else {
        //         setError(response.data.message);
        //         setSuccessMessage('');
        //     }
        // } catch (error) {
        //     console.error('Error during registration:', error);
        //     if (error.response) {
        //         const { status, data } = error.response;
        //         if (status === 401 || status === 404 || status === 500) {
        //             setError(data.message);
        //             setSuccessMessage('');
        //         } else {
        //             setError('An unexpected error occurred. Please try again later.');
        //             setSuccessMessage('');
        //         }
        //     }else {
        //         setError('An unexpected error occurred. Please try again later.');
        //         setSuccessMessage('');
        //     }
        // }
    }
  return ( 
    <>
    <Navbar/>
    <section className='section is-selectpartner mt-10 p-24 pb-36 flex flex-col bg-white justify-between h-screen'>
            <div className='flex justify-between'>
                  <div><h2 className='text-black font-merriweather text-4xl mb-16'>Doctor Appointment Booking:</h2></div>
                  <div><Link to="/selectDoctor"><button className='px-4 py-2 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-white hover:scale-105 hover:text-whistler-blue'>Go Back</button></Link></div>
              </div>
            <div className='doctor-details-wrapper flex flex-row gap-6 px-16 justify-center'>
                <div className='w-1/3 pr-16'>
                    <img src={suryaDoctor} alt='doctor image' className='w-full max-h-[60vh] object-cover  rounded-3xl'/>
                </div>
                <div className='flex flex-col justify-between items-end py-8 font-medium'>
                    <p>Doctor Name:</p>     
                    <p>Specialization:</p>
                    <p>Location:</p>
                    <p>Hospital:</p>
                    <p>Consultation Fee:</p>
                    <p>Experience in Years:</p>
                    <p>Doctor Ratings:</p>
                    <p>Doctor Overview:</p>
                    <p>Availability Status:</p>
                </div>
                <div className='flex flex-col justify-between items-start py-8'>
                    <p>Dr Surya Agarwal</p>     
                    <p>Gynacolegist</p>
                    <p>Bengaluru</p>
                    <p>ABC Hospital</p>
                    <p>INR 600</p>
                    <p>8</p>
                    <p>5</p>
                    <p>Doctor overview text</p>
                    <p>Available</p>
                </div>
            </div>
    </section>
    <section className='px-24'>
        <h2 className='text-black font-merriweather text-2xl mb-16'>Enter Patient Details to Book Appointment:</h2>
        <form onSubmit={handleBooking}>
                  <div>
                      <label className="register-text1 mb-1 font-varela-round text-whistler-blue">Patient Name</label>
                      {/* <input
                          type="text"
                          className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4  focus:outline-whistler-green"
                          placeholder="Enter Patient Name"
                          value={patientName}
                          onChange={(e) => setFirstName(e.target.value)}
                      /> */}
                  </div>
        </form>
    </section>
    <Footer/>
    </>
  );
}

export default DoctorDetails;
