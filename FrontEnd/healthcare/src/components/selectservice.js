import React from 'react';
import doctorServiceImage from './doctor.jpg'
import therapyImage from './therapy.jpg'
import nurseImage from './nurse.png'

function SelectService() {
  return ( 
    <section className='section is-selectservice px-24 py-16 flex flex-col bg-black h-screen justify-between'>
            <h2 className='text-white'>Explore our Services:</h2>
            <div className='flex justify-between w-full gap-28'>
                <div className='services-card w-full h-[70vh] rounded-3xl overflow-hidden'>
                    <img src={doctorServiceImage} alt='doctor services image' className="h-3/5 w-full object-cover"/>
                    <div className='h-2/5 bg-gray-300 flex flex-col justify-between px-10 py-10 items-center'>
                        <h2>Speciality Doctors</h2>
                        <button className='mt-8 px-6 py-3 bg-black text-white rounded-md font-bold'>View Doctors</button>
                    </div>
                </div>
                <div className='services-card w-full h-[70vh] rounded-3xl overflow-hidden'>
                    <img src={therapyImage} alt='doctor services image' className="h-3/5 w-full object-cover"/>
                    <div className='h-2/5 bg-gray-300 flex flex-col justify-between px-10 py-10 items-center'>
                        <h2>Therapy Services</h2>
                        <button className='mt-8 px-6 py-3 bg-black text-white rounded-md font-bold'>View Therapies</button>
                    </div>
                </div>
                <div className='services-card w-full h-[70vh] rounded-3xl overflow-hidden'>
                    <img src={nurseImage} alt='doctor services image' className="h-3/5 w-full object-cover"/>
                    <div className='h-2/5 bg-gray-300 flex flex-col justify-between px-10 py-10 items-center'>
                        <h2>Nurse Home Care</h2>
                        <button className='mt-8 px-6 py-3 bg-black text-white rounded-md font-bold'>View Nurse Care</button>
                    </div>
                </div>
            </div>
    </section>
  );
}

export default SelectService;
