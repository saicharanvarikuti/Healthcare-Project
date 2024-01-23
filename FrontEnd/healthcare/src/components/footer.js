import React from 'react';
import whiteLogo from './WhistlersLogoWhite.png'
import footerImage from './footerImage.png'

function Footer() {
  return (
    <section className='section is-footer pl-24 py-8 bg-black flex gap-16'>
        <div className='w-1/2 flex flex-col justify-between pr-4'>
            <img src={whiteLogo} className='w-full' alt='whistlers logo'/>
            <div className='flex w-full text-white gap-8'>
                <div className='w-1/2'>
                    <p>Registered Office At:</p>
                    <p>123 Health Lane Wellness City, Mediville Vitality County, HLT 456 United States</p>
                </div>
                <div className='w-1/2'>
                    <p>Customer Care Support:</p>
                    <p>For any inquiries, assistance, or feedback, Reach out to us at support@whistlershealthcare.com or call us at +91 9490184144</p>
                </div>
            </div>
            <div className='text-white flex justify-between'>
                <button className=''>Home Page</button>
                <button className=''>Services</button>
                <button className=''>Help</button>
                <button className=''>My Account</button>
            </div>
            <div className='flex flex-col'>
                <p className='text-white'>Subscribe to our News Letter:</p>
                <div className='flex gap-2'>
                    <input className='w-3/4 h-8 bg-gray-200 rounded p-2 text-sm opacity-25 placeholder-gray-400' placeholder="Enter Your Email Address"/>
                    <button className='w-1/4 h-8 bg-gray-400 rounded text-white'>Subscribe</button>
                </div>  
            </div>
            <div className='text-white flex justify-between'>
                <p className='text-white'>Follow us on:</p>
                <button className=''>facebook</button>
                <button className=''>Twitter</button>
                <button className=''>Instagram</button>
                <button className=''>Pinterest</button>
            </div>
        </div>
        <div className='w-1/2'>
            <img src={footerImage} className='w-full' alt='doctor image'/>
        </div>
    </section>
    );
}
export default Footer;