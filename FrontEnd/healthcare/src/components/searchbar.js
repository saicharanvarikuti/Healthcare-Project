import React from 'react';

function Searchbar() {
  return (
    <section className='section is-searchbar py-4 flex items-center justify-center '>
        <div className="searchbar-component h-12 max-w-5xl w-full px-8">
            <input className="searchbar-field w-4/5 outline-2 h-full px-4 rounded-lg rounded-r-none border-solid border-black border" defaultValue="Search doctors, therapies, nurse services, hospitals, location" />
            <button className='searchbar-button w-1/5 h-full rounded-lg rounded-l-none bg-blue-200'>Search</button>
        </div>
    </section>
  );
}

export default Searchbar;
