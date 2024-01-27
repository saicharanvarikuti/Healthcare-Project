import React from 'react';
import doctorServiceImage from './doctor.jpg'

function SelectPartner() {
  return ( 
    <section className='section is-selectpartner px-24 py-16 flex flex-col bg-black justify-between'>
            <div className='flex justify-between'>
                <h2 className='text-white mb-10'>Speciality Doctors</h2>
                <button className='mt-8 px-4 py-2 bg-white text-black rounded-md font-medium'>Go Back</button>
            </div>
            
            <div className='flex justify-between w-full gap-16'>
                <div className='services-card w-full h-[60vh] rounded-3xl overflow-hidden'>
                    <img src={doctorServiceImage} alt='doctor services image' className="h-3/6 w-full object-cover"/>
                    <div className='h-3/6 bg-gray-300 flex flex-col justify-between px-4 py-6 items-center'>
                        <div className='flex'>
                            <h2>Dr Surya Agarwal</h2>
                            <p>Md. Phd</p>
                        </div>
                        <p>Specialized Gynacolegist</p>
                        <p>Location: Bengaluru</p>
                        <p>Consultation Fee: INR600</p>
                        <button className='mt-8 px-6 py-3 bg-black text-white rounded-md font-bold'>View Details</button>
                    </div>
                </div>
                <div className='services-card w-full h-[60vh] rounded-3xl overflow-hidden'>
                    <img src={doctorServiceImage} alt='doctor services image' className="h-3/6 w-full object-cover"/>
                    <div className='h-3/6 bg-gray-300 flex flex-col justify-between px-4 py-6 items-center'>
                        <div className='flex'>
                            <h2>Dr Surya Agarwal</h2>
                            <p>Md. Phd</p>
                        </div>
                        <p>Specialized Gynacolegist</p>
                        <p>Location: Bengaluru</p>
                        <p>Consultation Fee: INR600</p>
                        <button className='mt-8 px-6 py-3 bg-black text-white rounded-md font-bold'>View Details</button>
                    </div>
                </div>
                <div className='services-card w-full h-[60vh] rounded-3xl overflow-hidden'>
                    <img src={doctorServiceImage} alt='doctor services image' className="h-3/6 w-full object-cover"/>
                    <div className='h-3/6 bg-gray-300 flex flex-col justify-between px-4 py-6 items-center'>
                        <div className='flex'>
                            <h2>Dr Surya Agarwal</h2>
                            <p>Md. Phd</p>
                        </div>
                        <p>Specialized Gynacolegist</p>
                        <p>Location: Bengaluru</p>
                        <p>Consultation Fee: INR600</p>
                        <button className='mt-8 px-6 py-3 bg-black text-white rounded-md font-bold'>View Details</button>
                    </div>
                </div>
                <div className='services-card w-full h-[60vh] rounded-3xl overflow-hidden'>
                    <img src={doctorServiceImage} alt='doctor services image' className="h-3/6 w-full object-cover"/>
                    <div className='h-3/6 bg-gray-300 flex flex-col justify-between px-4 py-6 items-center'>
                        <div className='flex'>
                            <h2>Dr Surya Agarwal</h2>
                            <p>Md. Phd</p>
                        </div>
                        <p>Specialized Gynacolegist</p>
                        <p>Location: Bengaluru</p>
                        <p>Consultation Fee: INR600</p>
                        <button className='mt-8 px-6 py-3 bg-black text-white rounded-md font-bold'>View Details</button>
                    </div>
                </div>
            </div>
    </section>
  );
}

export default SelectPartner;
