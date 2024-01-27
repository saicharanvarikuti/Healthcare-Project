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

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/services' element={<ServicesPage />}/>
          <Route path='/showdoctors' element={<ShowDoctors />}/>
          <Route path='/doctorappointmentbooking' element={<DoctorAppointmentBooking />}/>
          <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
