import React from 'react';

export default function Hero() {
  return (
    <section  className="bg-blue-50 py-12 lg:py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-snug">
            Visa Processing Support Center in Bangladesh
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Visa processing is a very difficult thing when you are thinking of going abroad. There are not a lot of
            opportunities to get a visa from Bangladesh smoothly. But now you have VISATHing, the country's number one
            visa processing support center in Bangladesh. Get all of your visa-related solutions in one place.
          </p>
          <p className="mt-2 text-gray-600 font-semibold">Trusted by <span className="text-indigo-600">3.2M+</span> travelers worldwide.</p>
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700">
              Book Appointment
            </button>
            <button className="px-6 py-3 bg-white border border-indigo-600 text-indigo-600 font-medium rounded-lg shadow hover:bg-indigo-50">
              E-Visa Service
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <img
            src="https://visathing.com/_next/image/?url=https%3A%2F%2Funispaces.sgp1.cdn.digitaloceanspaces.com%2Fnebula%2Fimages%2F1714039209188.png&w=640&q=100"  // Replace this with your own image source
            alt="Visa Processing"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Search Section */}
      <div className="mt-12 bg-white shadow-md rounded-lg px-6 py-8 mx-6 lg:mx-auto lg:w-5/6">
        <form className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">I'm a Citizen of</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <span className="mr-2 text-xl">🇧🇩</span> {/* Add a flag dynamically */}
              <select className="w-full bg-white focus:outline-none">
                <option value="Bangladesh">Bangladesh</option>
                {/* Add other options */}
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Traveling to</label>
            <select className="border border-gray-300 rounded-lg p-2 bg-white w-full focus:outline-none">
              <option>Select Country</option>
              {/* Add countries dynamically */}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Visa Category</label>
            <select className="border border-gray-300 rounded-lg p-2 bg-white w-full focus:outline-none">
              <option>Select Visa Category</option>
              {/* Add visa categories dynamically */}
            </select>
          </div>
          <div className="flex justify-center items-end mt-4 lg:mt-0">
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700">
              Check Details
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
