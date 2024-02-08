import React from 'react';
import technologyImage from '../Images/technologyImage.jpg'

function Technology() {
  return (
        <section className='section is-technology px-24 py-24 h-screen bg-cover bg-center' style={{ backgroundImage: `url(${technologyImage})` }}>
            <h2 className='text-4xl text-white font-merriweather'>Seamless Technology, Seamless Experience</h2>
            <p className='mt-10 text-white max-w-[70%] font-varela-round leading-extraloose text-xl'>Our user-friendly platform ensures a hassle-free experience.
              From booking appointments to accessing your medical records,
              managing your healthcare has never been this convenient.
              All Round Health Care brings the future of healthcare to your fingertips.</p>
            <p className='mt-16 text-white max-w-[70%] font-varela-round leading-extraloose text-xl'>Join us on the journey to a healthier, happier you.
              we're committed to making healthcare accessible and efficient.
              Take the first step towards a healthier tomorrow – because your health is our priority.</p>  
        </section>
    );
}
export default Technology;