import React, { useState } from 'react';

const LandVerification = () => {
  const [searchType, setSearchType] = useState('ls');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Land Verification</h2>

        {/* Search Options */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setSearchType('ls')}
            className={`px-4 py-2 rounded ${
              searchType === 'ls'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100'
            }`}
          >
            LS Number
          </button>
          <button
            onClick={() => setSearchType('owner')}
            className={`px-4 py-2 rounded ${
              searchType === 'owner'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100'
            }`}
          >
            Owner Name
          </button>
          <button
            onClick={() => setSearchType('location')}
            className={`px-4 py-2 rounded ${
              searchType === 'location'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100'
            }`}
          >
            Location
          </button>
        </div>

        {/* Search Input */}
        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder={`Search by ${searchType === 'ls' ? 'LS Number' : searchType === 'owner' ? 'Owner Name' : 'Location'}`}
              className="flex-1 p-3 border rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-green-600 text-white px-6 py-2 rounded">
              Verify
            </button>
          </div>

          {/* Sample Results */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Verification Results</h3>
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">Enter a search query to view verification results.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandVerification;