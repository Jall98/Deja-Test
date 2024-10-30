import React, { useState } from 'react';

const LandVerification = () => {
  const [lawyerDropdownOpen, setLawyerDropdownOpen] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);

  const handleVerification = () => {
    setVerificationComplete(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-xl font-bold">Land Registry</h1>
        </div>
        <nav className="mt-4">
          {[
            { icon: "🏠", label: "Dashboard" },
            { icon: "📝", label: "Register Land" },
            { icon: "📋", label: "My Properties" },
            { icon: "🔍", label: "Search Properties" },
            { icon: "✅", label: "Verify Land", active: true },
            { icon: "👤", label: "Profile" },
            { icon: "⚙️", label: "Settings" }
          ].map((item) => (
            <div
              key={item.label}
              className={`px-6 py-3 flex items-center space-x-3 ${
                item.active ? 'bg-gray-100' : 'hover:bg-gray-50'
              } cursor-pointer`}
            >
              <span>{item.icon}</span>
              <span className={item.active ? 'font-medium' : ''}>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Land Verification</h1>
          <p className="text-gray-600">
            Verify land documentation with LS Number, OARG records, and legal confirmation.
          </p>
        </div>

        {/* Verification Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LS Number
              </label>
              <input
                type="text"
                defaultValue="LS1234/2024"
                className="w-full p-2 border rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Page Number
              </label>
              <input
                type="text"
                defaultValue="123"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Volume Number
              </label>
              <input
                type="text"
                defaultValue="45"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Lawyer
              </label>
              <div className="relative">
                <button
                  className="w-full p-2 border rounded-lg text-left flex justify-between items-center bg-white"
                  onClick={() => setLawyerDropdownOpen(!lawyerDropdownOpen)}
                >
                  <span>Adv. Kadija K Jalloh - SL12345</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      lawyerDropdownOpen ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleVerification}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Verify Documents
            </button>
          </div>
        </div>

        {/* Verification Results */}
        {verificationComplete && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Verification Results</h2>
            
            {/* Survey Plan Verification */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Survey Plan Verification</h3>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center text-green-700">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Survey plan is valid and registered
                </div>
              </div>
            </div>

            {/* OARG Records Verification */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">OARG Records Verification</h3>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center text-green-700">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  OARG records verified successfully
                </div>
              </div>
            </div>

            {/* Legal Verification */}
            <div>
              <h3 className="text-lg font-medium mb-3">Legal Verification</h3>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center text-green-700">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Verified by Adv. Kadija K Jalloh (SL12345)
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandVerification;