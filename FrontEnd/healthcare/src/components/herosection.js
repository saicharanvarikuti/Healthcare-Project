import React from 'react';
import Heroimage from './heroimage.png'

function Homehero() {
  return (
    <section className='section is-homehero px-24 py-8 flex '>
        <div className="hero-left-container w-1/2 h-full" >
            <img src={Heroimage} alt={'hero image'}className='h-full'/>
        </div>
        <div className="hero-right-container w-1/2 h-full py-24 px-16 flex flex-col items-center">
            <h1 className='font-bold mb-2 text-xl'>WELCOME TO</h1>
            <div className='flex'>
                <h1 className='text-6xl text-black font-bold'>whistler's </h1>
                <div className='w-4'></div>
                <h1 className='text-6xl text-green font-bold'>healthcare</h1>
            </div>
            <p className='font-semibold text-xl mt-4'>Your complete wellness hub</p>
            <p className='text-center mt-10 w-4/5'>At Whistler’s Health Care, we're here to revolutionize your healthcare experience. </p>
            <p className='text-center mt-2 w-5/6'>Say goodbye to the hassle of multiple appointments and endless waiting times – we bring everything you need under one roof!</p>
            <button className='mt-8 px-6 py-3 bg-black text-white rounded-md font-bold'>Our Services</button>
        </div>
    </section>
  );
}

export default Homehero;
