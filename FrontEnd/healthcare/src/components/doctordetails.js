import React from 'react';
import doctorServiceImage from './doctor.jpg'

function DoctorDetails() {
  return ( 
    <section className='section is-selectpartner px-24 py-16 flex flex-col bg-white justify-between'>
            <div className='flex justify-between'>
                <h2 className='text-black mb-10'>Doctor Appointment Booking:</h2>
                <button className='mt-8 px-4 py-2 bg-black text-white rounded-md font-medium'>Go Back</button>
            </div>
            <div className='doctor-details-wrapper flex flex-row gap-6 px-16 justify-center'>
                <div className='w-1/3 pr-16'>
                    <img src={doctorServiceImage} alt='doctor image' className='w-full max-h-[60vh] object-cover  rounded-3xl'/>
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
  );
}

export default DoctorDetails;
