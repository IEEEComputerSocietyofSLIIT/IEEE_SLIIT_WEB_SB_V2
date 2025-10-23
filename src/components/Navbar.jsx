import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import IEEELogo from "../assets/logos/IEEE.png";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={IEEELogo}
                alt="IEEE SLIIT Logo"
                className="w-40 h-30 object-contain"
              />
            </Link>
          </div>

          {/* Centered Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:cursor-pointer hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:cursor-pointer hover:text-blue-600 transition">About Us</Link>
            <Link to="/events" className="text-gray-700 hover:cursor-pointer hover:text-blue-600 transition">Events</Link>
            {/* <Link to="/chapters" className="text-gray-700 hover:text-blue-600 transition">Chapters</Link> */}
            <Link to="/committee" className="text-gray-700 hover:cursor-pointer hover:text-blue-600 transition">Committee</Link>
            <Link to="/contact" className="text-gray-700 hover:cursor-pointer hover:text-blue-600 transition">Contact Us</Link>
          </div>

          {/* Right Join Button & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <button 
            onClick={()=>{window.open("https://forms.fillout.com/t/pZwz6iZ95hus", "_blank");}}
            className="hidden hover:cursor-pointer md:block bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition">
              Join Now
            </button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200 mt-2">
            <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600">About Us</Link>
            <Link to="/events" className="block text-gray-700 hover:text-blue-600">Events</Link>
            <Link to="/chapters" className="block text-gray-700 hover:text-blue-600">Chapters</Link>
            <Link to="/committee" className="block text-gray-700 hover:text-blue-600">Committee</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600">Contact Us</Link>
            <button className="w-full bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600">
              Join Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
