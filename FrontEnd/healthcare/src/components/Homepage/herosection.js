import React from 'react';
import Heroimage from '../Images/heroimage.png'
import { Link } from 'react-router-dom';

function Homehero() {
  return (
    <section className='section is-homehero px-24 py-8 flex '>
        <div className="hero-left-container w-1/2 h-full" >
            <img src={Heroimage} alt={'hero image'}className='h-full'/>
        </div>
        <div className="hero-right-container w-1/2 h-full pt-12 pb-24 px-16 flex flex-col items-center">
            <h1 className='font-medium mb-8 text-xl font-inter'>WELCOME TO</h1>
            <div className='flex'>
                <h1 className='text-6xl font-pacifico text-whistler-blue'>whistler's </h1>
                <div className='w-4'></div>
                <h1 className='text-6xl text-green font-pacifico text-whistler-green'>healthcare</h1>
            </div>
            <p className='text-xl mt-4 font-mali'>Your complete wellness hub</p>
            <p className='text-center mt-12 w-4/5 font-varela-round text-special-gray text-sm'>At Whistler’s Health Care, we're here to revolutionize your healthcare experience. </p>
            <p className='text-center mt-4 w-5/6 font-varela-round text-special-gray text-sm'>Say goodbye to the hassle of multiple appointments and endless waiting times – we bring everything you need under one roof!</p>
            <Link to="/services"><button className='mt-10 px-6 py-4 text-white rounded-lg text-xl bg-whistler-blue font-inter font-bold hover:bg-whistler-green hover:scale-105'>Our Services</button></Link>
        </div>
    </section>
  );
}

export default Homehero;
