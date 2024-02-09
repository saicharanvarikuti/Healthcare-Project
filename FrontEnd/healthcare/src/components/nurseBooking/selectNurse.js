import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SelectNurse({ setSelectedNurse, selectedNurse }) {
    const [nurses, setNurses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/nurse')
            .then(response => {
                setNurses(response.data);
            })
            .catch(error => {
                console.error('Error fetching therapies data: ', error);
            });
    }, []);

    useEffect(() => {
        if (selectedNurse) {
            navigateToNurseBooking(selectedNurse);
        }
    }, [selectedNurse]);

    const handleViewDetails = (nurse) => {
        setSelectedNurse(nurse);
    };

    const navigateToNurseBooking = (selectedNurse) => {
      navigate('/nursebooking', selectedNurse={ selectedNurse } );
    };

    return (
        <div>
            <Navbar />
            <section className='section is-selectpartner mt-10 p-24 flex flex-col bg-whistler-blue  justify-between'>
                <div className='flex justify-between'>
                    <div><h2 className='text-white font-merriweather text-4xl mb-16'>Nurse Services</h2></div>
                    <div><Link to="/services"><button className='px-4 py-2 bg-gredient-green text-whistler-blue rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-blue hover:scale-105 hover:text-white'>Go Back</button></Link></div>
                </div>

                <div className='grid grid-cols-4 w-full gap-16'>
                    {nurses.map(nurse => (
                        <div key={nurse.NURSE_SERVICE_ID} className='services-card w-full h-[60vh] rounded-3xl overflow-hidden'>
                            <img src={nurse.IMAGE_URL} alt='doctor services image' className="h-3/6 w-full object-cover" />
                            <div className='h-3/6 bg-gredient-green flex flex-col justify-between px-4 py-6 items-center'>
                                <div className='flex gap-2 items-center'>
                                    <h2 className='font-sm font-inter'>{nurse.NURSE_SERVICE_NAME}</h2>
                                </div>
                                <p className='text-xs font-inter'>Description: {nurse.DESCRIPTION}</p>
                                <p className='text-xs font-inter'>Location: {nurse.LOCATION}</p>
                                <p className='text-xs font-inter'>Nurse Service Fee: {nurse.FEE}</p>
                                <button onClick={() => handleViewDetails(nurse)} className='mt-2 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105'>View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default SelectNurse;
