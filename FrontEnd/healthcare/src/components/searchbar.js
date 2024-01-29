import React from 'react';

function Searchbar() {
  return (
    <section  className="section is-searchbar py-4 flex items-center justify-center mt-[10vh]">
        <div className="searchbar-component h-12 max-w-5xl w-full px-8">
            <input className="searchbar-field w-5/6 text-sm outline-2 h-full px-4 rounded-lg rounded-r-none border-solid border-whistler-blue border placeholder-gray-400 outline-none " placeholder="Search doctors, therapies, nurse services, hospitals, location" />
            <button className='searchbar-button w-1/6 h-full rounded-lg rounded-l-none text-lg text-white bg-whistler-blue font-inter font-semibold hover:bg-whistler-green'>Search</button>
        </div>
    </section>
  );
}

export default Searchbar;
