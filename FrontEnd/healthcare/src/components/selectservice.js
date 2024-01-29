import React from 'react';
import doctorServiceImage from './doctor.jpg'
import therapyImage from './therapy.jpg'
import nurseImage from './nurse.png'
import { Link } from 'react-router-dom';

function SelectService() {
  return ( 
    <section className='section is-selectservice  p-24 flex flex-col bg-whistler-blue  justify-between'>
            <h2 className='text-white font-merriweather text-4xl mb-16'>Explore our Services:</h2>
            <div className='flex justify-between w-full gap-28'>
                <div className='services-card w-full h-[70vh] rounded-3xl overflow-hidden'>
                    <img src={doctorServiceImage} alt='doctor services image' className="h-3/5 w-full object-cover"/>
                    <div className='h-2/5 bg-gredient-green flex flex-col justify-between px-10 py-10 items-center'>
                        <h2 className='font-merriweather text-xl text-whistler-blue'>Speciality Doctors</h2>
                        <Link to="/selectDoctor"><button className='mt-8 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105'>View Doctors</button></Link>
                    </div>
                </div>
                <div className='services-card w-full h-[70vh] rounded-3xl overflow-hidden'>
                    <img src={therapyImage} alt='doctor services image' className="h-3/5 w-full object-cover"/>
                    <div className='h-2/5 bg-gredient-green flex flex-col justify-between px-10 py-10 items-center'>
                        <h2 className='font-merriweather text-xl text-whistler-blue'>Therapy Services</h2>
                        <button className='mt-8 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105'>View Therapies</button>
                    </div>
                </div>
                <div className='services-card w-full h-[70vh] rounded-3xl overflow-hidden'>
                    <img src={nurseImage} alt='doctor services image' className="h-3/5 w-full object-cover"/>
                    <div className='h-2/5 bg-gredient-green flex flex-col justify-between px-10 py-10 items-center'>
                        <h2 className='font-merriweather text-xl text-whistler-blue'>Nurse Home Care</h2>
                        <button className='mt-8 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105'>View Nurse Care</button>
                    </div>
                </div>
            </div>
    </section>
  );
}

export default SelectService;
