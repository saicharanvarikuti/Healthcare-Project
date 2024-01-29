import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import Home from './components/Homepage';
import ServicesPage from './components/Servicespage'
import ShowDoctors from './components/showdoctorspage';
import DoctorAppointmentBooking from './components/doctorappointmentbook';
import LoginPage from './components/loginpage';
import reportWebVitals from './reportWebVitals';
import SelectPartner from './components/viewpartners';
import DoctorDetails from './components/doctordetails';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/services' element={<ServicesPage />}/>
          <Route path='/showdoctors' element={<ShowDoctors />}/>
          <Route path='/doctorappointmentbooking' element={<DoctorAppointmentBooking />}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/selectDoctor' element={<SelectPartner/>}/>
          <Route path='/doctorDetails' element={<DoctorDetails/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
