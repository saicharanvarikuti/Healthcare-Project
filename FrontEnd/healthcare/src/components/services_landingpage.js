import React from 'react';
import doctorImage from './doctor.jpg'
import therapyImage from './therapy.jpg'
import nurseImage from './nurse.png'

function ServicesSection() {
  return (
    <section className='section is-services flex flex-col gap-16 py-8 px-48'>
        <div className="Service-card flex h-96 w-full rounded-3xl overflow-hidden">
            <img src= {doctorImage} className='w-1/2 h-full object-cover'/>
            <div className='w-1/2 h-full bg-red-200 p-16'>
                <h2 className='text-4xl'>EXPERT DOCTORS AT YOUR FINGERTIPS </h2>
                <p className='text-base'>BOOK APPOINTMENTS WITH TOP-NOTCH HEALTHCARE PROFESSIONALS ACROSS VARIOUS SPECIALTIES EFFORTLESSLY</p>
                <button className='mt-8 px-6 py-3 bg-black text-white rounded-md font-bold'>Book Appointment</button>
            </div>
        </div>
        <div className="Service-card flex h-96 w-full rounded-3xl overflow-hidden">
            <div className='w-1/2 h-full bg-red-200 p-16'>
                <h2 className='text-4xl'>COMPREHENSIVE THERAPY SERVICES </h2>
                <p className='text-base'>MENTAL AND PHYSICAL WELL-BEING GO HAND IN HAND.EXPLORE A VARIETY OF THERAPY OPTIONS TAILORED TO YOUR NEEDS</p>
                <button className='mt-8 px-6 py-3 bg-black text-white rounded-md font-bold'>Book A Therapy</button>
            </div>
            <img src= {therapyImage} className='w-1/2 h-full object-cover'/>
        </div>
        <div className="Service-card flex h-96 w-full rounded-3xl overflow-hidden">
            <img src= {nurseImage} className='w-1/2 h-full object-cover'/>
            <div className='w-1/2 h-full bg-red-200 p-16'>
                <h2 className='text-4xl'>SKILLED NURSE CARE IN COMFORT OF YOUR HOME</h2>
                <p className='text-base'>OUR SKILLED NURSING SERVICES BRING THE CARE YOU DESERVE RIGHT TO YOUR DOORSTEP</p>
                <button className='mt-8 px-6 py-3 bg-black text-white rounded-md font-bold'>Book A Nurse Care</button>
            </div>
        </div>
    </section>
  );
}

export default ServicesSection;
