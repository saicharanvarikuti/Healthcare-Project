import React from 'react';
import Navbar from '../Navbar/navbar'
import Searchbar from './searchbar';
import Homehero from './herosection';
import ServicesSection from './services_landingpage';
import Technology from './technology';
import Testimonial from './testimonial';
import Footer from '../Footer/footer';

function Home({selectedDoctor,setSelectedDoctor}){
    return (
        <div>
            <Navbar/>
            <Searchbar setSelectedDoctor={setSelectedDoctor} selectedDoctor={selectedDoctor}/>
            <Homehero/>
            <ServicesSection/>
            <Technology/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}

export default Home;