import { useState } from 'react';

export default function GrowTeam() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <section className="max-w-6xl mx-auto p-6 md:p-12">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded-full ${activeTab === 1 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}
          onClick={() => handleTabChange(1)}
        >
          First Tab
        </button>
        <button
          className={`px-4 py-2 rounded-full ${activeTab === 2 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}
          onClick={() => handleTabChange(2)}
        >
          Second Tab
        </button>
        <button
          className={`px-4 py-2 rounded-full ${activeTab === 3 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}
          onClick={() => handleTabChange(3)}
        >
          Third Tab
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {activeTab === 1 && 'Make work flow across teams while connecting back to company goals'}
            {activeTab === 2 && 'Enhance team collaboration and efficiency'}
            {activeTab === 3 && 'Foster innovation through teamwork'}
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eum omnis voluptatem accusantium nemo perspicitatis delectus atque autem! Repellat expedita consequatur! Officiis id consequatur atque doloremque.
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-50 rounded-full">
                {/* Icon */}
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M..." />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Together as one</h3>
                <p className="text-gray-500">
                  Accusantium nemo perspicitatis delectus atque autem!
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-green-50 rounded-full">
                {/* Icon */}
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M..." />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">New ideas</h3>
                <p className="text-gray-500">
                  Accusantium atque autem accusantium delectus atque autem!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex flex-1 justify-center">
          <img
            src="https://ampire.netlify.app/images/screenshots/tailus-home.webp" // Replace with actual image path
            alt="Customized modern UI"
            className="max-w-full w-[300px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
