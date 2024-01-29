import React from 'react';
import doctorServiceImage from './doctor.jpg'
import Navbar from './navbar'
import Footer from './footer';
import suryaDoctor from './suryadoctor.jpg'
import { Link } from 'react-router-dom';

function SelectPartner() {
  return ( 
    <div>
          <Navbar />
          <section className='section is-selectpartner mt-10 p-24 flex flex-col bg-whistler-blue  justify-between'>
              <div className='flex justify-between'>
                  <div><h2 className='text-white font-merriweather text-4xl mb-16'>Speciality Doctors</h2></div>
                  <div><Link to="/services"><button className='px-4 py-2 bg-gredient-green text-whistler-blue rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-blue hover:scale-105 hover:text-white'>Go Back</button></Link></div>
              </div>

              <div className='grid grid-cols-4 w-full gap-16'>
                  <div className='services-card w-full h-[60vh] rounded-3xl overflow-hidden'>
                      <img src={suryaDoctor} alt='doctor services image' className="h-3/6 w-full object-cover" />
                      <div className='h-3/6 bg-gredient-green flex flex-col justify-between px-4 py-6 items-center'>
                          <div className='flex gap-2 items-center'>
                              <h2 className='font-sm font-inter'>Dr. Surya Agarwal</h2>
                              <p className='font-inter text-xs'>Md. Phd</p>
                          </div>
                          <p className='text-xs font-inter'>Specialized Gynacolegist</p>
                          <p className='text-xs font-inter'>Location: Bengaluru</p>
                          <p className='text-xs font-inter'>Consultation Fee: INR600</p>
                          <Link to="/DoctorDetails" ><button className='mt-2 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105'>View Details</button></Link>
                      </div>
                  </div>
                  <div className='services-card w-full h-[60vh] rounded-3xl overflow-hidden'>
                      <img src={suryaDoctor} alt='doctor services image' className="h-3/6 w-full object-cover" />
                      <div className='h-3/6 bg-gredient-green flex flex-col justify-between px-4 py-6 items-center'>
                          <div className='flex gap-2 items-center'>
                              <h2 className='font-sm font-inter'>Dr. Surya Agarwal</h2>
                              <p className='font-inter text-xs'>Md. Phd</p>
                          </div>
                          <p className='text-xs font-inter'>Specialized Gynacolegist</p>
                          <p className='text-xs font-inter'>Location: Bengaluru</p>
                          <p className='text-xs font-inter'>Consultation Fee: INR600</p>
                          <Link to="/DoctorDetails" ><button className='mt-2 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105'>View Details</button></Link>
                      </div>
                  </div>
                  <div className='services-card w-full h-[60vh] rounded-3xl overflow-hidden'>
                      <img src={suryaDoctor} alt='doctor services image' className="h-3/6 w-full object-cover" />
                      <div className='h-3/6 bg-gredient-green flex flex-col justify-between px-4 py-6 items-center'>
                          <div className='flex gap-2 items-center'>
                              <h2 className='font-sm font-inter'>Dr. Surya Agarwal</h2>
                              <p className='font-inter text-xs'>Md. Phd</p>
                          </div>
                          <p className='text-xs font-inter'>Specialized Gynacolegist</p>
                          <p className='text-xs font-inter'>Location: Bengaluru</p>
                          <p className='text-xs font-inter'>Consultation Fee: INR600</p>
                          <Link to="/DoctorDetails" ><button className='mt-2 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105'>View Details</button></Link>
                      </div>
                  </div>
                  <div className='services-card w-full h-[60vh] rounded-3xl overflow-hidden'>
                      <img src={suryaDoctor} alt='doctor services image' className="h-3/6 w-full object-cover" />
                      <div className='h-3/6 bg-gredient-green flex flex-col justify-between px-4 py-6 items-center'>
                          <div className='flex gap-2 items-center'>
                              <h2 className='font-sm font-inter'>Dr. Surya Agarwal</h2>
                              <p className='font-inter text-xs'>Md. Phd</p>
                          </div>
                          <p className='text-xs font-inter'>Specialized Gynacolegist</p>
                          <p className='text-xs font-inter'>Location: Bengaluru</p>
                          <p className='text-xs font-inter'>Consultation Fee: INR600</p>
                          <Link to="/DoctorDetails" ><button className='mt-2 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105'>View Details</button></Link>
                      </div>
                  </div>
                  <div className='services-card w-full h-[60vh] rounded-3xl overflow-hidden'>
                      <img src={suryaDoctor} alt='doctor services image' className="h-3/6 w-full object-cover" />
                      <div className='h-3/6 bg-gredient-green flex flex-col justify-between px-4 py-6 items-center'>
                          <div className='flex gap-2 items-center'>
                              <h2 className='font-sm font-inter'>Dr. Surya Agarwal</h2>
                              <p className='font-inter text-xs'>Md. Phd</p>
                          </div>
                          <p className='text-xs font-inter'>Specialized Gynacolegist</p>
                          <p className='text-xs font-inter'>Location: Bengaluru</p>
                          <p className='text-xs font-inter'>Consultation Fee: INR600</p>
                          <Link to="/DoctorDetails" ><button className='mt-2 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105'>View Details</button></Link>
                      </div>
                  </div>
                  <div className='services-card w-full h-[60vh] rounded-3xl overflow-hidden'>
                      <img src={suryaDoctor} alt='doctor services image' className="h-3/6 w-full object-cover" />
                      <div className='h-3/6 bg-gredient-green flex flex-col justify-between px-4 py-6 items-center'>
                          <div className='flex gap-2 items-center'>
                              <h2 className='font-sm font-inter'>Dr. Surya Agarwal</h2>
                              <p className='font-inter text-xs'>Md. Phd</p>
                          </div>
                          <p className='text-xs font-inter'>Specialized Gynacolegist</p>
                          <p className='text-xs font-inter'>Location: Bengaluru</p>
                          <p className='text-xs font-inter'>Consultation Fee: INR600</p>
                          <Link to="/DoctorDetails" ><button className='mt-2 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105'>View Details</button></Link>
                      </div>
                  </div>
                  <div className='services-card w-full h-[60vh] rounded-3xl overflow-hidden'>
                      <img src={suryaDoctor} alt='doctor services image' className="h-3/6 w-full object-cover" />
                      <div className='h-3/6 bg-gredient-green flex flex-col justify-between px-4 py-6 items-center'>
                          <div className='flex gap-2 items-center'>
                              <h2 className='font-sm font-inter'>Dr. Surya Agarwal</h2>
                              <p className='font-inter text-xs'>Md. Phd</p>
                          </div>
                          <p className='text-xs font-inter'>Specialized Gynacolegist</p>
                          <p className='text-xs font-inter'>Location: Bengaluru</p>
                          <p className='text-xs font-inter'>Consultation Fee: INR600</p>
                          <Link to="/DoctorDetails" ><button className='mt-2 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105'>View Details</button></Link>
                      </div>
                  </div>
              </div>
          </section>
          <Footer />
    </div>
    
  );
}

export default SelectPartner;
