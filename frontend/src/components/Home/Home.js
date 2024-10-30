import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const mainFeatures = [
    {
      title: "Land Registration",
      description: "Complete digital land registration process",
      icon: "📋",
      steps: [
        "Property details submission",
        "Document upload",
        "Payment processing",
        "Status tracking",
        "Certificate generation"
      ]
    },
    {
      title: "Land Transfer",
      description: "Seamless property transfer process",
      icon: "🔄",
      steps: [
        "Seller initiation",
        "Buyer verification",
        "Document verification",
        "Transfer processing",
        "Ownership update"
      ]
    },
    {
      title: "Search & Verification",
      description: "Verify land ownership and documentation",
      icon: "🔍",
      steps: [
        "Property search",
        "Owner verification",
        "Document verification",
        "History check",
        "Status report"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-white to-blue-600 rounded-2xl overflow-hidden">
        <div className="p-8 md:p-12 bg-opacity-90 bg-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sierra Leone Digital Land Registry
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Streamlined land registration, transfer, and verification processes
            </p>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mainFeatures.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-gray-50 rounded-lg text-4xl">{feature.icon}</div>
              </div>
              <h3 className="text-2xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2 mb-6">
                {feature.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {step}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Status Tracking */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Track Your Application</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter your LS or Application Number"
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
            Track Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;