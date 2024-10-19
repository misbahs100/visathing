import React from 'react';

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
