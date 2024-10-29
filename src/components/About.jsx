import { FiTag, FiZap, FiHeart } from "react-icons/fi";

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          {/* Heading Section */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Design, Build,{" "}
            <span className="text-blue-600 underline decoration-blue-300">
              Scale
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Computers used to be magical. But much of that magic has been lost
            over time, replaced by subpar tools and practices that slow teams
            down and hold great work back.
          </p>

          {/* Feature Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            {/* Feature 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-full bg-blue-50">
                <FiTag className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                The lowest price
              </h3>
              <p className="text-gray-500">Some text here</p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-full bg-purple-50">
                <FiZap className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                The fastest on the market
              </h3>
              <p className="text-gray-500">Some text here</p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-full bg-yellow-50">
                <FiHeart className="text-yellow-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                The most loved
              </h3>
              <p className="text-gray-500">Some text here</p>
            </div>
          </div>

          {/* Logo Section */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
            <img
              src="https://ampire.netlify.app/images/clients/airbnb.svg"
              alt="Airbnb"
              className="h-8 w-auto"
            />
            <img
              src="https://ampire.netlify.app/images/clients/airbnb.svg"
              alt="GE"
              className="h-8 w-auto"
            />
            <img
              src="https://ampire.netlify.app/images/clients/airbnb.svg"
              alt="Coty"
              className="h-8 w-auto"
            />
            <img
              src="https://ampire.netlify.app/images/clients/airbnb.svg"
              alt="Microsoft"
              className="h-8 w-auto"
            />
          </div>
        </div>
      </section>

      <section
        style={{ border: "1px solid red" }}
        className="bg-white flex flex-col md:flex-row items-center md:items-start justify-center space-y-8 md:space-y-0 md:space-x-8 py-16 px-4 md:px-8"
      >
        {/* Left - Stacked Images */}
        <div className="relative flex-shrink-0">
          <div className="relative w-48 h-64 md:w-64 md:h-80 bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://ampire.netlify.app/images/mission.webp"
              alt="Main Mission Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute -top-8 -left-8 w-32 h-44 md:w-48 md:h-64 bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://ampire.netlify.app/images/mission.webp"
              alt="Secondary Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="max-w-xl text-center md:text-left space-y-4">
          <h3 className="text-blue-600 uppercase text-sm font-semibold tracking-wide">
            Mission
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Help great teams become{" "}
            <span className="text-blue-600">dream teams</span>
          </h2>
          <p className="text-gray-600">
            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam
            mollitia.
          </p>
          <p className="text-gray-600">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugit alias sapiente maxime repellendus impedit
            commodi blanditiis debitis rerum, quisquam aspernatur quod aliquid
            molestiae eveniet suscipit, natus dolore? Vero, eum voluptatem?
          </p>
        </div>
      </section>

      <section className="relative bg-white pt-16 pb-32 text-center px-4 md:px-8">
        {/* Wavy SVG */}
        <div
          style={{ border: "1px solid red" }}
          className="absolute top-0 left-0 right-0 overflow-hidden -mt-16"
        >
          {/* <svg
          className="w-full h-32 md:h-48"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#E0E7FF"
            d="M0,160L80,170.7C160,181,320,203,480,186.7C640,171,800,117,960,112C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg> */}
          <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center space-y-8">
          {/* Heading and Description */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            We <span className="text-blue-600">Scaled!</span>
          </h2>
          <p className="max-w-xl text-gray-600">
            A growing team doesn't need to mean growing pains. With
            best-of-breed features, security, privacy, and the right tools for
            every step of your journey, our software allows you to scale without
            friction—regardless of your company size.
          </p>

          {/* Logo with Glow Effect */}
          <div className="relative mt-8">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <img
                src="/path/to/logo-image.png"
                alt="Logo"
                width={50}
                height={50}
                className="opacity-90"
              />
            </div>
          </div>

          {/* Timeline */}
          <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-8 w-full max-w-2xl">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  className="rounded-full shadow-lg"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie image"
                />
              </span>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex justify-between items-center dark:bg-gray-700 dark:border-gray-600">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                  just now
                </time>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                  Bonnie moved{" "}
                  <a
                    href="#"
                    className="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Jese Leos
                  </a>{" "}
                  to
                  <span className="bg-gray-100 text-gray-800 text-xs font-normal ml-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                    Funny Group
                  </span>
                </div>
              </div>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  className="rounded-full shadow-lg"
                  src="/docs/images/people/profile-picture-5.jpg"
                  alt="Thomas Lean image"
                />
              </span>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <div className="sm:flex justify-between items-center mb-3">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    2 hours ago
                  </time>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                    Thomas Lean commented on{" "}
                    <a
                      href="#"
                      className="font-semibold text-gray-900 dark:text-white hover:underline"
                    >
                      Flowbite Pro
                    </a>
                  </div>
                </div>
                <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                  Hi ya'll! I wanted to share a webinar zeroheight is having
                  regarding how to best measure your design system! This is the
                  second session of our new webinar series on #DesignSystems
                  discussions where we'll be speaking about Measurement.
                </div>
              </div>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  className="rounded-full shadow-lg"
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt="Jese Leos image"
                />
              </span>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex justify-between items-center dark:bg-gray-700 dark:border-gray-600">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                  1 day ago
                </time>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                  Jese Leos has changed{" "}
                  <a
                    href="#"
                    className="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Pricing page
                  </a>{" "}
                  task status to{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Finished
                  </span>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
