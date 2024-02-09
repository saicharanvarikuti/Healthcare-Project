import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Searchbar({selectedDoctor,setSelectedDoctor}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchResultsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };  
  }, []);

  useEffect(() => {
    if (selectedDoctor) {
      navigateToDoctorAppointmentBooking(selectedDoctor);
    }
  }, [selectedDoctor]);
  const handleViewDetails = (result) => {
    setSelectedDoctor(result);
  };

  const navigateToDoctorAppointmentBooking = (selectedDoctor) => {
    navigate('/DoctorAppointmentBooking', selectedDoctor = { selectedDoctor });
  };

  const handleClickOutside = (event) => {
    if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
      setSearchResults([]);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:3000/search', { searchQuery });
      setSearchResults(response.data);
      console.log("the doctors are:",searchResults.doctors)
      console.log("the therapies are:",searchResults.therapies)
      console.log("the nurse care are:",searchResults.nurses)
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <section className="section is-searchbar py-4 flex items-center justify-center mt-[10vh]">
      <div className="searchbar-component h-12 max-w-5xl w-full px-8" ref={searchResultsRef}>
        <input
          className="searchbar-field w-5/6 text-sm outline-2 h-full px-4 rounded-lg rounded-r-none border-solid border-whistler-blue border placeholder-gray-400 outline-none "
          placeholder="Search doctors, therapies, nurse services, hospitals, location"
          value={searchQuery}
          onChange={handleChange}
        />
        <button
          className='searchbar-button w-1/6 h-full rounded-lg rounded-l-none text-lg text-white bg-whistler-blue font-inter font-semibold hover:bg-whistler-green'
          onClick={handleSearch}>Search</button>
        {searchResults.length > 0 && (
          searchResults.doctors.length > 0 && (
            <div className="search-results absolute bg-white shadow-md p-4 mt-2 max-w-5xl z-10 px-8">
              <h2 className="text-lg font-semibold mb-2">Matching Doctors:</h2>
              <ul className='flex flex-col font-inter text-sm text-black px-6 py-14 overflow-y-auto'>
                {searchResults.doctors.map((result) => (
                  <li key={result.DOCTOR_ID}>
                    <div className='flex gap-12 justify-center items-center'>
                      <div><img className='w-28 h-28 object-cover rounded-md' alt='doctor image' src={result.IMAGE_URL} /></div>
                      <div className='flex flex-col gap-4'>
                        <div className=' font-inter text-sm text-black'><strong>Name:</strong> {result.FIRST_NAME} {result.LAST_NAME}</div>
                        <div className=' font-inter text-sm text-black'><strong>Specialization:</strong> {result.SPECIALIZATION}</div>
                        <div className=' font-inter text-sm text-black'><strong>Location:</strong> {result.LOCATION}</div>
                        <div className=' font-inter text-sm text-black'><strong>Fee:</strong> {result.FEE}</div>
                      </div>
                      <div>
                        <button onClick={() => handleViewDetails(result)} className='px-4 py-4 bg-whistler-blue hover:bg-whistler-green font-inter font-bold text-white rounded-md font-sm mt-4 w-full'>View Details</button>
                      </div>
                    </div>
                    <hr className="my-4 border-gray-300" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Searchbar;
