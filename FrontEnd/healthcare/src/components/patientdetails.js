import React from 'react';

function PatientDetails() {
  return ( 
    <section className='section is-selectpartner px-24 py-16 flex flex-col bg-white justify-between'>
            <h2 className='text-black mb-10'>Enter Patient Details To Book Appointment:</h2>
            <div className='doctor-details-wrapper flex flex-row gap-6 px-16 justify-center'>
            
                <div className='flex flex-col justify-between items-end py-8 font-medium'>
                    <label for="Patient-name">Patient Name:</label>
                    <label>Gender:</label>
                    <label>Age:</label>
                    <label>Weight:</label>
                    <label>Address:</label>
                    <label>Mobile Number:</label>
                    <label>Date of Appointment:</label>
                    <label>Describe ailment/ symptoms:</label>
                </div>
                <div className='flex flex-col justify-between items-start py-8'>
                    <input id='Patient-name' type='text' name='Patient-name'placeholder=''></input>
                </div>
            </div>
    </section>
  );
}

export default PatientDetails;
