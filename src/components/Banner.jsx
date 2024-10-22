// Banner.jsx
import React from 'react';
import backgroundPattern from '../assets/banner_bg_pattern.svg'; // Adjust the path

const Banner = () => {
  return (
    <div className="w-full bg-blue-600 py-6 relative overflow-hidden rounded-b-[50px]" >
      {/* Background pattern */}
      <img 
        src="https://visathing.com/images/banner_bg_pattern.svg"
        alt="background pattern" 
        className="absolute inset-0 w-full h-full object-cover" 
        style={{ zIndex: -1}} 
      />

      {/* Banner container with 80% width on large screens */}
      <div className="max-w-screen-lg mx-auto py-8 px-4 lg:px-0">
        {/* First row: Breadcrumb */}
        <div className="text-white mb-4">
          <nav className="text-sm flex items-center space-x-2">
            <a href="/" className="hover:underline">Home</a>
            <span>&gt;</span>
            <a href="/bangladesh" className="hover:underline">Bangladesh</a>
            <span>&gt;</span>
            <span className="font-bold">News</span>
          </nav>
        </div>

        {/* Second row: Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left column: Text content */}
          <div className="text-white col-span-2">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated with VISATThing!</h1>
            <p className="text-lg">
              Get the latest news and press releases from VISATThing! Stay informed about our company
              updates, industry insights, and travel-related news.
            </p>
          </div>

          {/* Right column: Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="https://visathing.com/images/about_us.svg" 
              alt="news illustration" 
              className="max-w-full h-auto" 
            />
          </div>
        </div>
      </div>

      {/* Curved bottom corners */}
      {/* <div className="absolute bottom-0 left-0 w-full h-16 bg-blue-600 rounded-b-[50px]"></div> */}
    </div>
  );
};

export default Banner;
