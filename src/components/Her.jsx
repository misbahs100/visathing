// Hero.jsx
export default function Hero() {
  return (
    <section className="mt-32 max-w-7xl mx-auto p-4 space-y-6 md:space-y-0">
      <h1 className="text-7xl font-bold text-gray-800">
        Design, Build,{" "}
        <span className="text-blue-600 underline decoration-wavy">Scale</span>
      </h1>
      {/* Left Content */}

      <div style={{border: '1px solid red'}} className="flex flex-col md:flex-row items-center">
        <div style={{border: '1px solid red'}}  className="flex-1 space-y-4">
          <div className="py-4">
            <p className="text-gray-600">
              Computers used to be magical. But much of that magic has been lost
              over time, replaced by subpar tools and practices that slow teams
              down and hold great work back.
            </p>
          </div>
          <div className="flex items-center space-x-2 py-4">
            <input
              type="email"
              placeholder="Your mail address"
              className="p-4 rounded-lg border border-gray-300 flex-grow"
            />
            <button className="bg-blue-600 text-white px-4 py-4 rounded-lg">
              Get Started
            </button>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <span className="text-gray-600">From the most talented Team!</span>
            <div className="flex -space-x-2">
              {/* Replace the src with actual image URLs */}
              {[1, 2, 3, 4].map((index) => (
                <img
                  key={index}
                  src={`https://ampire.netlify.app/images/avatars/avatar.webp`}
                  alt="team member"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div style={{border: '1px solid red'}} className="flex-1 flex justify-center">
          <img
          style={{border: '1px solid red'}}
            src="https://ampire.netlify.app/images/team.svg"
            alt="Hero illustration"
            className="w-full max-w-xs md:max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
