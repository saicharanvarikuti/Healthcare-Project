import React, { useState } from 'react';
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer';
import axios from 'axios';

function HelpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/enquire', formData);
      console.log(response.data);
      setSuccessMessage('Enquiry submitted successfully.');
      setErrorMessage('');
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      setErrorMessage('Failed to submit enquiry. Please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-36 py-8 mt-20 ">
        <h1 className="text-4xl font-bold text-center mb-8 font-merriweather">Customer Support</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white shadow-2xl rounded-xl px-16 py-16    ">
                      <h2 className="text-xl font-semibold mb-4 font-inter">Contact Information</h2>
                      <p className="mb-2 font-varela-round text-sm"><strong>Email:</strong> support@whistlershealthcare.com</p>
                      <p className="mb-2 font-varela-round text-sm"><strong>Phone:</strong> +91 9490184144</p>
                      <p className="mb-2 font-varela-round text-sm"><strong>Address:</strong> 123 Health Lane Wellness City, Mediville Vitality County, HLT 456 United States</p>
                      <h2 className="text-xl font-semibold mb-4 font-inter mt-10">FAQs</h2>
                      <div className="mb-4">
                          <strong className='font-inter'>Q: How do I book an appointment?</strong>
                          <p className='font-varela-round text-sm'>A: You can book an appointment by logging into your account and selecting the desired healthcare service.</p>
                      </div>
                      <div className="mb-4">
                          <strong className='font-inter'>Q: Do you accept insurance?</strong>
                          <p className='font-varela-round text-sm'>A: Yes, we accept a wide range of insurance plans. Please contact our support team for more information.</p>
                      </div>
                      <div className="mb-4">
                          <strong className='font-inter'>Q: What are your operating hours?</strong>
                          <p className='font-varela-round text-sm'>A: Our operating hours are from 9:00 AM to 5:00 PM, Monday through Friday. We are closed on weekends and public holidays.</p>
                      </div>
                      <div className="mb-4">
                          <strong className='font-inter'>Q: How can I cancel or reschedule my appointment?</strong>
                          <p className='font-varela-round text-sm'>A: To cancel or reschedule your appointment, please log in to your account and navigate to the appointments section. From there, you can manage your appointments accordingly.</p>
                      </div>
                  </div>
          <div className="bg-white shadow-2xl rounded-xl px-16 py-16">
            <h2 className="text-xl font-semibold mb-4 font-inter">Enquiry Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="name" className="block text-sm font-medium mb-1 font-inter">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-gray-200 p-2 pl-2 w-full rounded mb-4  focus:outline-whistler-green" />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="block text-sm font-medium mb-1 font-inter">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="bg-gray-200 p-2 pl-2 w-full rounded mb-4  focus:outline-whistler-green" />
              </div>
              <div className="mb-2">
                <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1 font-inter">Phone Number</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="bg-gray-200 p-2 pl-2 w-full rounded mb-4  focus:outline-whistler-green" />
              </div>
              <div className="mb-2">
                <label htmlFor="message" className="block text-sm font-medium mb-1 font-inter">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="bg-gray-200 p-2 pl-2  w-full rounded mb-4  focus:outline-whistler-green"></textarea>
              </div>
              <button type="submit" className="w-full mt-8 px-4 py-2 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green">Submit</button>
              {successMessage && <div className="text-green-600 mb-4">{successMessage}</div>}
              {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HelpPage;
