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
                <h1 className='text-6xl font-pacifico text-whistler-green'>Our Services</h1>
            </div>
            <p className='mt-4 text-xl font-mali'>Ensuring your well-being is our top priority</p>
            <p className='text-center mt-10 w-4/5 font-varela-round text-special-gray text-sm'>Our range of services is designed to provide a holistic and convenient healthcare experience, </p>
            <p className='text-center mt-2 w-5/6 font-varela-round text-special-gray text-sm'>ensuring you have access to all the resources you need for optimal health.</p>
            <button className='mt-8 px-6 py-4 text-white rounded-lg text-xl bg-whistler-blue font-inter font-bold hover:bg-whistler-green hover:scale-105'>Talk to an Expert</button>
        </div>
    </section>
  );
}

export default ServicesHero;
