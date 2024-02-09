import React from 'react';
import { useNavigate } from "react-router-dom";

function TherapyDetails({selectedTherapy, setSelectedTherapy}) {
    const navigate = useNavigate();
    const currentTherapy = selectedTherapy;
    if (!currentTherapy) {
        return <div className='mt-24'>Loading, please wait   </div>; 
    }
  return ( 
    <section className='section is-selectpartner mt-10 p-24 pb-36 flex flex-col bg-white justify-between h-screen'>
        <div className='flex justify-between'>
            <div><h2 className='text-black font-merriweather text-4xl mb-16'>Therapy Booking:</h2></div>
            <div><button onClick={()=>{navigate('/selectTherapy'); setSelectedTherapy(null);}} className='px-4 py-2 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-white hover:scale-105 hover:text-whistler-blue'>Go Back</button></div>
        </div>
        <div className='doctor-details-wrapper flex flex-row gap-6 px-16 justify-center'>
            <div className='w-1/3 pr-16'>
                <img src={currentTherapy.IMAGE_URL} alt='doctor image' className='w-full max-h-[60vh] object-cover  rounded-3xl'/>
            </div>
            <div className='flex flex-col justify-between items-end py-8 font-medium'>
                    <p>Therapy Name: {currentTherapy.THERAPY_NAME}</p>
                    <p>Description: {currentTherapy.DESCRIPTION}</p>
                    <p>Location: {currentTherapy.LOCATION}</p>
                    <p>Fee: {currentTherapy.FEE}</p>
                </div>
        </div>
    </section>
);
  }

export default TherapyDetails;
