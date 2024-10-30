import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    address: '',
    idType: '',
    idNumber: '',

    // Land Information
    landLocation: '',
    landSize: '',
    landType: '',
    previousOwner: '',
    purchaseDate: '',

    // Surveyor Information
    surveyorName: '',
    surveyorLicense: '',
    surveyDate: '',

    // Documents
    propertyDocuments: null,
    surveyPlan: null,
    idCard: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
     e.preventDefault();
     // Handle registration logic
   };
   
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Land Registration Application</h2>
          <p className="text-gray-600 mt-2">Complete all required information to register your land</p>
        </div>

        <form className="space-y-8">
          {/* Personal Information Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-600 border-b pb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Land Information Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-600 border-b pb-2">Land Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Land Location</label>
                <input
                  type="text"
                  name="landLocation"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Land Size (in acres)</label>
                <input
                  type="text"
                  name="landSize"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Land Type</label>
                <select
                  name="landType"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  onChange={handleChange}
                >
                  <option value="">Select Land Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="agricultural">Agricultural</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Previous Owner</label>
                <input
                  type="text"
                  name="previousOwner"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Surveyor Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-600 border-b pb-2">Surveyor Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Surveyor Name</label>
                <input
                  type="text"
                  name="surveyorName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Surveyor License Number</label>
                <input
                  type="text"
                  name="surveyorLicense"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-600 border-b pb-2">Required Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Property Documents</label>
                <input
                  type="file"
                  name="propertyDocuments"
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Survey Plan</label>
                <input
                  type="file"
                  name="surveyPlan"
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;