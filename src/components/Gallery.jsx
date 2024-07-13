import React from 'react';

const Gallery = () => {
    return (
           <section id="projects" className="text-gray-600 body-font bg-blue-100 scroll-smooth">
  <div className="container px-5 py-7 mx-auto">

   <div> <h1 className="text-6xl text-center py-10">Projects</h1></div>

    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-center h-full" src="/assets/login.png" />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">CRUD and React Project</h2>
      <p className="text-base leading-relaxed mt-2">Built a web app with sign-up/sign-in, CRUD operations using React, MongoDB, and Bootstrap for responsive design and seamless user experience.</p>
        <a className="text-indigo-500 text-xl inline-flex items-center mt-3" href="https://github.com/RameshPolubothu/login-registration">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-center h-full" src="/assets/Railway.png" />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">DBMS Project</h2>
        <p className="text-base leading-relaxed mt-2">Developed a ticket booking, reservation, and cancellation system with data retrieval using Python and PostgreSQL, ensuring efficient database management and user functionality.</p>
        <a className="text-indigo-500 text-xl inline-flex items-center mt-3" href="https://github.com/RameshPolubothu/IRCTC-DBIS_Project">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-center h-full" src="/assets/weather.png" />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">API Project</h2>
        <p className="text-base leading-relaxed mt-2">A weather app with React and MongoDB, leveraging an API to provide real-time weather data for cities, ensuring a seamless user interface.</p>
        <a className="text-indigo-500 text-xl inline-flex items-center mt-3" href="https://github.com/RameshPolubothu/api-backend">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
    );
}

export default Gallery;
