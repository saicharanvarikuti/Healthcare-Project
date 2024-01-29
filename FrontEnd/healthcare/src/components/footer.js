import React from 'react';
import whiteLogo from './WhistlersLogoWhite.png'
import footerImage from './footerImage.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className='section is-footer pl-24 py-12 w-full bg-whistler-blue flex gap-16'>
        <div className='w-1/2 flex flex-col justify-between pr-10'>
            <img src={whiteLogo} className='w-full' alt='whistlers logo'/>
            <div className='flex w-full text-white gap-8'>
                <div className='w-1/2'>
                    <p className='font-semibold mb-2'>Registered Office At:</p>
                    <p className='text-sm'>123 Health Lane Wellness City, Mediville Vitality County, HLT 456 United States</p>
                </div>
                <div className='w-1/2'>
                    <p className='font-semibold mb-2'>Customer Care Support:</p>
                    <p className='text-sm'>For any inquiries, assistance, or feedback, Reach out to us at support@whistlershealthcare.com or call us at +91 9490184144</p>
                </div>
            </div>
            <div className='text-white flex justify-between'>
                <Link to="/"> <button className=''>Home Page</button></Link>
                <Link to="/services"> <button className=''>Services</button></Link>
                <Link to="/"> <button className=''>Help</button></Link>
                <Link to="/"> <button className=''>My Account</button></Link>
            </div>
            <div className='flex flex-col'>
                <p className='text-white mb-2'>Subscribe to our News Letter:</p>
                <div className='flex gap-2 w-full'>
                    <input className=' h-8 w-full bg-subscribe-input rounded p-2 text-sm opacity-25 placeholder-black ' placeholder="Enter Your Email Address"/>
                    <button className=' h-8 px-4 bg-subscribe-gray rounded text-white'>Subscribe</button>
                </div>  
            </div>
            <div className='text-white flex justify-between'>
                <p className='text-white font-semibold'>Follow us on:</p>
                <button className='text-sm'>facebook</button>
                <button className='text-sm'>Twitter</button>
                <button className='text-sm'>Instagram</button>
                <button className='text-sm  '>Pinterest</button>
            </div>
        </div>
        <div className='w-1/2'>
            <img src={footerImage} className='w-full' alt='doctor image'/>
        </div>
    </section>
    );
}
export default Footer;