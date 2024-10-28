// Navbar.jsx
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold">ProwesdIT</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#solution" className="text-gray-700">Solution</a>
          <a href="#customers" className="text-gray-700">Customers</a>
          <a href="#pricing" className="text-gray-700">Pricing</a>
          <a href="#blog" className="text-gray-700">Blog</a>
          <a href="#company" className="text-gray-700">Company</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Get Started</button>
        </nav>

        {/* Mobile Menu Icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/90 p-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">ProwesdIT</div>
            <button onClick={() => setIsOpen(false)} className="text-gray-700">✖</button>
          </div>
          <nav className="py-4 px-2 bg-black mt-6 flex flex-col space-y-4 text-left">
            <a href="#solution" className="text-gray-700">Solution</a>
            <a href="#customers" className="text-gray-700">Customers</a>
            <a href="#pricing" className="text-gray-700">Pricing</a>
            <a href="#blog" className="text-gray-700">Blog</a>
            <a href="#company" className="text-gray-700">Company</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Get Started</button>
          </nav>
        </div>
      )}
    </header>
  );
}
