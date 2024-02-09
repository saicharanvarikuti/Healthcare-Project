import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SelectTherapy({ setSelectedTherapy, selectedTherapy }) {
    const [therapies, setTherapies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/therapies')
            .then(response => {
                setTherapies(response.data);
            })
            .catch(error => {
                console.error('Error fetching therapies data: ', error);
            });
    }, []);

    useEffect(() => {
        if (selectedTherapy) {
            navigateToTherapyBooking(selectedTherapy);
        }
    }, [selectedTherapy]);

    const handleViewDetails = (therapy) => {
        setSelectedTherapy(therapy);
    };

    const navigateToTherapyBooking = (selectedTherapy) => {
      navigate('/therapybooking', selectedTherapy={ selectedTherapy } );
    };

    return (
        <div>
            <Navbar />
            <section className='section is-selectpartner mt-10 p-24 flex flex-col bg-whistler-blue  justify-between'>
                <div className='flex justify-between'>
                    <div><h2 className='text-white font-merriweather text-4xl mb-16'>Therapies</h2></div>
                    <div><Link to="/services"><button className='px-4 py-2 bg-gredient-green text-whistler-blue rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-blue hover:scale-105 hover:text-white'>Go Back</button></Link></div>
                </div>

                <div className='grid grid-cols-4 w-full gap-16'>
                    {therapies.map(therapy => (
                        <div key={therapy.THERAPY_ID} className='services-card w-full h-[60vh] rounded-3xl overflow-hidden'>
                            <img src={therapy.IMAGE_URL} alt='doctor services image' className="h-3/6 w-full object-cover" />
                            <div className='h-3/6 bg-gredient-green flex flex-col justify-between px-4 py-6 items-center'>
                                <div className='flex gap-2 items-center'>
                                    <h2 className='font-sm font-inter'>{therapy.THERAPY_NAME}</h2>
                                </div>
                                <p className='text-xs font-inter'>Description: {therapy.DESCRIPTION}</p>
                                <p className='text-xs font-inter'>Location: {therapy.LOCATION}</p>
                                <p className='text-xs font-inter'>Therapy Fee: {therapy.FEE}</p>
                                <button onClick={() => handleViewDetails(therapy)} className='mt-2 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105'>View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default SelectTherapy;
