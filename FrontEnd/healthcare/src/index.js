import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import reportWebVitals from './reportWebVitals';
import Homehero from './components/herosection';
import ServicesSection from './components/services_landingpage'
import Technology from './components/technology'
import Testimonial from './components/testimonial';
import Footer from './components/footer';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Searchbar />
    <Homehero/>
    <ServicesSection/>
    <Technology/>
    <Testimonial/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
