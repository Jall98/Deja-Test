// Header.js
import React from 'react';

const Header = ({ onChangePage }) => {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="text-center space-y-1">
            <h1
              className="text-4xl font-extrabold tracking-wide"
              style={{
                color: '#007236', // Green color
                fontFamily: "'Playfair Display', serif",
              }}
            >
              THE GOVERNMENT OF SIERRA LEONE
            </h1>
            <h2
              className="text-2xl font-bold"
              style={{
                color: '#003399', // Blue color
                fontFamily: "'Playfair Display', serif",
              }}
            >
              OFFICE OF THE ADMINISTRATOR & REGISTRAR GENERAL (OARG)
            </h2>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            {/* Logo/Title */}
            <div className="flex items-center mb-4 md:mb-0">
              <div
                className="text-gray-800 text-3xl font-extrabold tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                SL Land Registry
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => onChangePage('home')}
                className="text-gray-800 font-medium hover:text-green-700 transition duration-200"
              >
                Home
              </button>
              <button
                onClick={() => onChangePage('login')}
                className="text-gray-800 font-medium hover:text-green-700 transition duration-200"
              >
                Login
              </button>
              <button
                onClick={() => onChangePage('register')}
                className="text-gray-800 font-medium hover:text-green-700 transition duration-200"
              >
                Register
              </button>
              <button
                onClick={() => onChangePage('dashboard')}
                className="text-gray-800 font-medium hover:text-green-700 transition duration-200"
              >
                Dashboard
              </button>
              <button
                onClick={() => onChangePage('services')}
                className="text-gray-800 font-medium hover:text-green-700 transition duration-200"
              >
                Services
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
