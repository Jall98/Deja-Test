import React from 'react';
import './Common.css';

const Header = ({ onChangePage }) => {
  return (
    <div>
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="text-center space-y-1">
            <h1 className="text-xl font-bold text-green-600">
              THE GOVERNMENT OF SIERRA LEONE
            </h1>
            <h2 className="text-lg font-semibold text-blue-600">
              MINISTRY OF LANDS, HOUSING AND COUNTRY PLANNING (MLHCP)
            </h2>
          </div>
        </div>
      </div>

      <nav className="bg-green-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="text-white text-2xl font-bold">
                SL Land Registry
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => onChangePage('home')}
                className="nav-button">
                Home
              </button>
              <button onClick={() => onChangePage('login')}
                className="nav-button">
                Login
              </button>
              <button onClick={() => onChangePage('register')}
                className="nav-button">
                Register
              </button>
              <button onClick={() => onChangePage('dashboard')}
                className="nav-button">
                Dashboard
              </button>
              <button onClick={() => onChangePage('services')}
                className="nav-button">
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
