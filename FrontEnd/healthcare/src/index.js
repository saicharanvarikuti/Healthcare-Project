import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import Home from './components/Homepage/Homepage';
import ServicesPage from './components/ServicesPage/Servicespage'
import DoctorAppointmentBooking from './components/DoctorAppointmentBooking/doctorappointmentbook';
import LoginPage from './components/LoginSignup/loginpage';
import reportWebVitals from './reportWebVitals';
import SelectDoctor from './components/DoctorAppointmentBooking/selectDoctor';
import HelpPage from './components/HelpPage/help';
import ScrollToTop from './scrolltotop';
import Profile from './components/Navbar/profile';
import MyBookings from './components/Navbar/mybookings';
import ViewBooking from './components/Navbar/viewbooking';
import TherapyBooking from './components/therapyBooking/therapybook';
import SelectTherapy from './components/therapyBooking/selectTherapy';
import SelectNurse from './components/nurseBooking/selectNurse';
import NurseBooking from './components/nurseBooking/nursebook';
import PartnerLoginPage from './components/partnerportal/partnerloginpage';
import PartnerBookings from './components/partnerportal/partnerbookings';

const App = ()=>{
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTherapy, setSelectedTherapy] = useState(null);
  const [selectedNurse, setSelectedNurse] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  return(
    <React.StrictMode>
    <Router>
      <ScrollToTop/>
      <Routes>
          <Route path="/" element={<Home setSelectedDoctor={setSelectedDoctor} selectedDoctor={selectedDoctor}/>} />
          <Route path='/services' element={<ServicesPage />}/>
          <Route path='/doctorappointmentbooking' element={<DoctorAppointmentBooking selectedDoctor={selectedDoctor} setSelectedDoctor={setSelectedDoctor}/>}/>
          <Route path='/therapybooking' element={<TherapyBooking selectedTherapy={selectedTherapy} setSelectedTherapy={setSelectedTherapy} />}/>
          <Route path='/nursebooking' element={<NurseBooking selectedNurse={selectedNurse} setSelectedNurse={setSelectedNurse} />}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/selectDoctor' element={<SelectDoctor setSelectedDoctor={setSelectedDoctor} selectedDoctor={selectedDoctor}/>}/>
          <Route path='/selectTherapy' element={<SelectTherapy selectedTherapy={selectedTherapy} setSelectedTherapy={setSelectedTherapy}/>}/>
          <Route path='/selectNurse' element={<SelectNurse selectedNurse={selectedNurse} setSelectedNurse={setSelectedNurse}/>}/>
          <Route path='/Help' element={<HelpPage/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/mybookings' element={<MyBookings selectedBooking={selectedBooking} setSelectedBooking={setSelectedBooking}/>}/>
          <Route path='/viewbooking' element={<ViewBooking selectedBooking={selectedBooking}/>}/>
          <Route path='/partnerlogin' element={<PartnerLoginPage/>}/>
          <Route path='/partnerbookings' element={<PartnerBookings/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
  )
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

reportWebVitals();
