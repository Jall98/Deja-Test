import React from 'react';

const Header = ({ onChangePage }) => {
  return (
    <div className="relative">
      {/* Top Bar with Government Info */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            {/* Government Info - Left Side */}
            <div className="text-left max-w-lg">
              <h1 className="text-sm font-semibold tracking-wide bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent">
                THE GOVERNMENT OF SIERRA LEONE
              </h1>
              <h2 className="text-xs font-medium tracking-wide bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                OFFICE OF THE ADMINISTRATOR & REGISTRAR GENERAL
              </h2>
            </div>

            {/* Central Logo/Brand - this will be visible on larger screens */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-2">
                <img 
                  src="/api/placeholder/40/40" 
                  alt="SL Coat of Arms" 
                  className="w-10 h-10"
                />
                <span className="font-serif text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  SL Land Registry
                </span>
              </div>
            </div>

            {/* Right side - can be used for contact info or other details */}
            <div className="text-right text-sm text-gray-600">
              <div>Contact: +232 XX XXX XXX</div>
              <div>info@oarg.gov.sl</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Mobile/Small Screen Logo */}
            <div className="md:hidden">
              <span className="font-serif text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                SL Land Registry
              </span>
            </div>

            {/* Navigation Menu */}
            <div className="flex items-center justify-center flex-1 gap-8">
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
                  className="group relative"
                >
                  <span className="text-sm font-bold tracking-wider bg-gradient-to-r from-emerald-800 to-blue-800 bg-clip-text text-transparent hover:from-emerald-600 hover:to-blue-600 transition-all duration-300">
                    {item.label}
                  </span>
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
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