import React from 'react';

const Header = ({ onChangePage }) => {
  return (
    <div className="relative">
      {/* Top Bar with Government Info */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col space-y-1">
            {/* Government Info */}
            <div className="text-left">
              <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent">
                THE GOVERNMENT OF SIERRA LEONE
              </h1>
              <h2 className="text-xl font-semibold tracking-wide bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                OFFICE OF THE ADMINISTRATOR & REGISTRAR GENERAL
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Left side with SL Land Registry */}
            <div className="flex-shrink-0 mr-12">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                SL Land Registry
              </span>
            </div>

            {/* Navigation Menu */}
            <div className="flex items-center gap-8">
              {[
                { label: 'HOME', page: 'home' },
                { label: 'LOGIN', page: 'login' },
                { label: 'REGISTER', page: 'register' },
                { label: 'DASHBOARD', page: 'dashboard' },
                { label: 'SERVICES', page: 'services' },
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => onChangePage(item.page)}
                  className="group relative px-2 py-1"
                >
                  <span className="text-sm font-bold tracking-wider bg-gradient-to-r from-emerald-800 to-blue-800 bg-clip-text text-transparent hover:from-emerald-600 hover:to-blue-600 transition-all duration-300">
                    {item.label}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;