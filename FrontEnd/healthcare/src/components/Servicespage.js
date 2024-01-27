import React from 'react';
import Navbar from './navbar'
import Searchbar from './searchbar';
import ServicesHero from './herosection_servicespage'
import SelectService from './selectservice'
import Footer from './footer';

function ServicesPage(){
    return (
        <div>
            <Navbar/>
            <Searchbar/>
            <ServicesHero/>
            <SelectService/>
            <Footer/>
        </div>
    )
}

export default ServicesPage;