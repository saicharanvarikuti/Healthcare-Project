import React from 'react';
import doctorImage from '../Images/doctor.jpg'
import therapyImage from '../Images/therapy.jpg'
import nurseImage from '../Images/nurse.png'
import { Link } from 'react-router-dom';

function ServicesSection() {
  return (
    <section className='section is-services flex flex-col gap-16 py-8 px-44 bg-gray-200'>
        <div className="Service-card flex  w-full rounded-3xl overflow-hidden shadow-lg">
            <img src= {doctorImage} className='w-1/2 object-cover'/>
            <div className='w-1/2 h-full bg-red-200 p-12 text-center rounded-3xl rounded-l-none bg-gradient-to-b from-gredient-green to-white'>
                <h2 className='text-4xl font-merriweather text-center leading-normal mb-8'>EXPERT DOCTORS AT YOUR FINGERTIPS </h2>
                <p className='text-center font-varela-round text-sm leading-normal mb-6'>BOOK APPOINTMENTS WITH TOP-NOTCH HEALTHCARE PROFESSIONALS ACROSS VARIOUS SPECIALTIES EFFORTLESSLY</p>
                <Link to="/selectDoctor"><button className='mt-8 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105'>Book Appointment</button></Link>
            </div>
        </div>
        <div className="Service-card flex w-full rounded-3xl overflow-hidden shadow-lg">
            <div className='w-1/2 h-full bg-red-200 p-12 text-center bg-gradient-to-b from-gredient-green to-white'>
                <h2 className='text-4xl font-merriweather text-center leading-normal mb-8'>COMPREHENSIVE THERAPY SERVICES </h2>
                <p className='text-center font-varela-round text-sm leading-normal mb-6'>MENTAL AND PHYSICAL WELL-BEING GO HAND IN HAND.EXPLORE A VARIETY OF THERAPY OPTIONS TAILORED TO YOUR NEEDS</p>
                <Link to="/selectTherapy"><button className='mt-8 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105'>Book A Therapy</button></Link>
            </div>
            <img src= {therapyImage} className='w-1/2 object-cover'/>
        </div>
        <div className="Service-card flex  w-full rounded-3xl overflow-hidden shadow-lg">
            <img src= {nurseImage} className='w-1/2  object-cover'/>
            <div className='w-1/2 h-full bg-gradient-to-b from-gredient-green to-white p-12 text-center rounded-3xl rounded-l-none'>
                <h2 className='text-4xl font-merriweather text-center leading-normal mb-8'>SKILLED NURSE CARE IN COMFORT OF YOUR HOME</h2>
                <p className='text-center font-varela-round text-sm leading-normal mb-6'>OUR SKILLED NURSING SERVICES BRING THE CARE YOU DESERVE RIGHT TO YOUR DOORSTEP</p>
                <Link to="/selectNurse"><button className='mt-8 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105'>Book A Nurse Care</button></Link>
            </div>
        </div>
    </section>
  );
}

export default ServicesSection;
