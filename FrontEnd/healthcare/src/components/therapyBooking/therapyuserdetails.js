import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TherapyUserDetails({selectedTherapy}) {
  const [formData, setFormData] = useState({
    patientName: '',
    gender: '',
    DOB: '',
    weight: '',
    address: '',
    mobileNumber: '',
    appointmentDate: '',
    symptoms: '',
    partnerId:''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (selectedTherapy) {
      setFormData(prevState => ({
        ...prevState,
        partnerId: selectedTherapy.PARTNER_ID
      }));
    }
  }, [selectedTherapy]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `${token}`,
      };
      const response = await axios.post('http://localhost:3000/scheduleTherapy', formData, { headers });
      setSuccessMessage(response.data.message);
      setError('');
      console.log('Form submitted:', response.data.message);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An unexpected error occurred. Please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <section className='section is-selectpartner px-24 py-16 flex flex-col bg-white justify-between'>
      <h2 className='text-black font-merriweather text-2xl mb-10'>Enter Patient Details To Book Appointment:</h2>
      <form onSubmit={handleSubmit}>
      <div className='doctor-details-wrapper flex flex-col md:flex-row gap-6 px-16 justify-center'>
          <div className='flex flex-col justify-between items-start py-4 gap-4 w-3/6 grow-0'>
            <div className="flex flex-row items-center w-full justify-between">
              <label htmlFor="selectedDoctor" className="mr-2 font-inter font-semibold text-sm">Selected Therapy:</label>
              <input id='selectedDoctor' type='text' name='selectedDoctor' className='w-4/6 h-10 bg-gray-200 text-sm rounded p-2 outline-none ' readOnly value= {selectedTherapy.THERAPY_NAME} />
            </div>
            <div className="flex flex-row items-center w-full justify-between">
              <label htmlFor="patientName" className="mr-2 font-inter font-semibold text-sm">Patient Name:</label>
              <input id='patientName' type='text' name='patientName' className='w-4/6 h-10 bg-gray-200 text-sm rounded p-2    focus:outline-whistler-green' placeholder='Enter Full Name' value={formData.patientName} onChange={handleChange} required />
            </div>
            <div className="flex flex-row items-center w-full justify-between">
              <label htmlFor="gender" className="mr-2 font-inter font-semibold text-sm">Gender:</label>
              <select id='gender' name='gender' className='w-4/6 h-10 bg-gray-200 text-sm rounded p-2 focus:outline-whistler-green' value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select></div>
            <div className="flex flex-row items-center w-full justify-between">
              <label htmlFor="DateofBirth" className="mr-2 font-inter font-semibold text-sm">Date of Birth:</label>
              <input id='DateofBirth' type='date' name='DOB' className='w-4/6 h-10 bg-gray-200 text-sm rounded p-2    focus:outline-whistler-green' placeholder='Enter patient age' value={formData.DOB} onChange={handleChange} required />
            </div>
            <div className="flex flex-row items-center w-full justify-between">
              <label htmlFor="weight" className="mr-2 font-inter font-semibold text-sm">Weight:</label>
              <input id='weight' type='number' name='weight' className='w-4/6 h-10 bg-gray-200 text-sm rounded p-2    focus:outline-whistler-green' placeholder='Enter patient weight in Kilograms' value={formData.weight} onChange={handleChange} required />
            </div>
            <div className="flex flex-row items-center w-full justify-between">
              <label htmlFor="address" className="mr-2 font-inter font-semibold text-sm">Address:</label>
              <input id='address' type='text' name='address' className='w-4/6 h-10 bg-gray-200 text-sm rounded p-2    focus:outline-whistler-green' placeholder='Enter Patient address' value={formData.address} onChange={handleChange} required />
            </div>
            <div className="flex flex-row items-center w-full justify-between">
              <label htmlFor="mobileNumber" className="mr-2 font-inter font-semibold text-sm">Mobile Number:</label>
              <input id='mobileNumber' type='tel' name='mobileNumber' className='w-4/6 h-10 bg-gray-200 text-sm rounded p-2    focus:outline-whistler-green' placeholder='Enter Patient Mobile Number' value={formData.mobileNumber} onChange={handleChange} required />
            </div>
            <div className="flex flex-row items-center w-full justify-between">
              <label htmlFor="appointmentDate" className="mr-2 font-inter font-semibold text-sm w-2/6">Date of Appointment:</label>
              <input id='appointmentDate' type='date' name='appointmentDate' className='w-4/6 h-10 bg-gray-200 text-sm rounded p-2    focus:outline-whistler-green' value={formData.appointmentDate} onChange={handleChange} required />
            </div>
            <div className="flex flex-row items-center w-full justify-between">
              <label htmlFor="symptoms" className="mr-2 font-inter font-semibold text-sm">Describe ailment/symptoms:</label>
              <textarea id='symptoms' name='symptoms' rows={4} className='w-4/6 h-40 bg-gray-200 text-sm rounded p-2    focus:outline-whistler-green' value={formData.symptoms} onChange={handleChange} required/>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button type="submit" className="mt-8 px-6 py-4 bg-whistler-blue text-white rounded-lg font-semibold font-inter flex-shrink-0 hover:bg-whistler-green hover:scale-105">Book Appointment</button>
        </div>
      </form>
      {successMessage && <div className="text-green-600">{successMessage}</div>}
      {error && <div className="text-red-600">{error}</div>}
    </section>
  );
}

export default TherapyUserDetails;
