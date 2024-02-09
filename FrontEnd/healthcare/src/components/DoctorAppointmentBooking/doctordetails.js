import React from 'react';
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

function DoctorDetails({selectedDoctor, setSelectedDoctor}) {
=======
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function DoctorDetails({selectedDoctor}) {
>>>>>>> c5aa4c5825dd8a5c1129843b2f1106c14ac4515a
    const navigate = useNavigate();
    const currentDoctor = selectedDoctor;
    if (!currentDoctor) {
        return <div className='mt-24'>Loading, please wait   </div>; 
    }
  return ( 
    <section className='section is-selectpartner mt-10 p-24 pb-36 flex flex-col bg-white justify-between h-screen'>
        <div className='flex justify-between'>
            <div><h2 className='text-black font-merriweather text-4xl mb-16'>Doctor Appointment Booking:</h2></div>
<<<<<<< HEAD
            <div><button onClick={()=>{navigate('/selectDoctor'); setSelectedDoctor(null);}} className='px-4 py-2 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-white hover:scale-105 hover:text-whistler-blue'>Go Back</button></div>
=======
            {/* <div><Link to="/selectDoctor"><button className='px-4 py-2 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-white hover:scale-105 hover:text-whistler-blue'>Go Back</button></Link></div> */}
            <div><button onClick={()=>{navigate('/selectDoctor');}} className='px-4 py-2 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-white hover:scale-105 hover:text-whistler-blue'>Go Back</button></div>
>>>>>>> c5aa4c5825dd8a5c1129843b2f1106c14ac4515a
        </div>
        <div className='doctor-details-wrapper flex flex-row gap-6 px-16 justify-center'>
            <div className='w-1/3 pr-16'>
                <img src={currentDoctor.IMAGE_URL} alt='doctor image' className='w-full max-h-[60vh] object-cover  rounded-3xl'/>
            </div>
            <div className='flex flex-col justify-between items-end py-8 font-medium'>
                    <p>Doctor Name: {currentDoctor.FIRST_NAME} {currentDoctor.LAST_NAME}</p>
                    <p>Specialization: {currentDoctor.SPECIALIZATION}</p>
                    <p>Location: {currentDoctor.LOCATION}</p>
                    <p>Consultation Fee: {currentDoctor.FEE}</p>
                </div>
        </div>
    </section>
);
  }

export default DoctorDetails;
