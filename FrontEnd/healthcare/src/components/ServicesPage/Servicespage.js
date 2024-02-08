import React from 'react';
import Navbar from '../Navbar/navbar'
import Searchbar from '../Homepage/searchbar';
import ServicesHero from './herosection_servicespage'
import SelectService from './selectservice'
import Footer from '../Footer/footer';

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