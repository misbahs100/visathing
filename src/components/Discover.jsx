import React from 'react';

const categories = [
  { name: 'All', label: '186 Countries', icon: '🌍' },
  { name: 'E-Visa', label: '46 Countries', icon: '🛂' },
  { name: 'Flexible Submission', label: '42 Countries', icon: '📋' },
  { name: 'In-Person Submission', label: '71 Countries', icon: '🧍' },
  { name: 'Visa Free', label: '14 Countries', icon: '🎟️' },
  { name: 'Visa On Arrival', label: '15 Countries', icon: '🛬' },
];

const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));


export default function Discover() {
  const countries = [
    { name: 'Afghanistan', flag: '🇦🇫', services: ['Visa Consultancy', 'Express Consultation'], availableServices: 3 },
    { name: 'Albania', flag: '🇦🇱', services: ['Premium Consultancy', 'Express Consultation'], availableServices: 2 },
    { name: 'Algeria', flag: '🇩🇿', services: ['E-Visa Processing', 'Visa Consultancy'], availableServices: 4 },
    { name: 'Algeria', flag: '🇩🇿', services: ['E-Visa Processing', 'Visa Consultancy'], availableServices: 4 },
    { name: 'Algeria', flag: '🇩🇿', services: ['E-Visa Processing', 'Visa Consultancy'], availableServices: 4 },
    { name: 'Algeria', flag: '🇩🇿', services: ['E-Visa Processing', 'Visa Consultancy'], availableServices: 4 },
    { name: 'Algeria', flag: '🇩🇿', services: ['E-Visa Processing', 'Visa Consultancy'], availableServices: 4 },
    { name: 'Algeria', flag: '🇩🇿', services: ['E-Visa Processing', 'Visa Consultancy'], availableServices: 4 },
    { name: 'Algeria', flag: '🇩🇿', services: ['E-Visa Processing', 'Visa Consultancy'], availableServices: 4 },
  ];



  return (
    <section className="py-12 bg-white">


      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Find the gateway of <span className="text-blue-600">186+ countries</span> with an effortless visa solution
          </h2>
        </div>

        {/* <div className="px-4 py-8"> */}

          {/* Categories Section */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex items-center justify-between gap-2 bg-gray-100 p-3 rounded-lg shadow-md min-w-[200px] snap-center transition hover:bg-blue-50 focus:ring-2 focus:ring-blue-500"
              >
                <span className="text-lg">{category.icon}</span>
                <span className="text-sm font-semibold">{category.name}</span>
                <span className="text-xs text-gray-500">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Alphabet Section */}
          <div className="mt-6 flex gap-2 justify-center overflow-x-auto snap-x snap-mandatory no-scrollbar">
            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg snap-center">ALL</button>
            {alphabet.map((letter, index) => (
              <button
                key={index}
                className="px-3 py-1 bg-gray-200 text-gray-800 rounded-lg snap-center hover:bg-gray-300 focus:bg-blue-500 focus:text-white transition"
              >
                {letter}
              </button>
            ))}
          </div>
        {/* </div> */}

        {/* Cards Section */}
        <div className="overflow-hidden ">
          <div className="flex gap-6 lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 snap-mandatory snap-x overflow-x-auto  h-50 no-scrollbar ">
            {countries.map((country, index) => (
              <div
                key={index}
                className="min-w-[240px] max-w-[320px] bg-gray-100 p-4 rounded-lg shadow-md snap-center"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{country.flag}</span>
                  <h3 className="text-xl font-semibold">{country.name}</h3>
                </div>
                <p className="text-gray-600 mb-2">Available Services: <span className="text-green-600">+{country.availableServices}</span></p>
                <ul className="text-gray-700">
                  {country.services.map((service, idx) => (
                    <li key={idx} className="text-sm">{service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>


        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
