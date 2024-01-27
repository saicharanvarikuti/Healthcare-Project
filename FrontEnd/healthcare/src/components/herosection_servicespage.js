import React from 'react';
import servicesHeroImage from './serviceshero.jpg'

function ServicesHero() {
  return (
    <section className='section is-serviceshero px-24 py-8 flex '>
        <div className="hero-left-container w-1/2 h-full" >
            <img src={servicesHeroImage} alt={'hero image'}className='h-full'/>
        </div>
        <div className="hero-right-container w-1/2 h-full py-24 px-16 flex flex-col items-center">
            <div className='flex'>
                <h1 className='text-6xl text-green-600 font-bold'>Our Services</h1>
            </div>
            <p className='font-semibold text-xl mt-4'>Ensuring your well-being is our top priority</p>
            <p className='text-center mt-10 w-4/5'>Our range of services is designed to provide a holistic and convenient healthcare experience, </p>
            <p className='text-center mt-2 w-5/6'>ensuring you have access to all the resources you need for optimal health.</p>
            <button className='mt-8 px-6 py-3 bg-black text-white rounded-md font-bold'>Talk to an Expert</button>
        </div>
    </section>
  );
}

export default ServicesHero;
