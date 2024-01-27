import React from 'react';
import Navbar from './navbar'
import Searchbar from './searchbar';
import Homehero from './herosection';
import ServicesSection from './services_landingpage';
import Technology from './technology';
import Testimonial from './testimonial';
import Footer from './footer';

function Home(){
    return (
        <div>
            <Navbar/>
            <Searchbar/>
            <Homehero/>
            <ServicesSection/>
            <Technology/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}

export default Home;