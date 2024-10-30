import React, { useState } from 'react';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Account Details
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    profileImage: null,

    // Personal Documents
    idType: '',
    idNumber: '',
    address: '',
    occupation: '',

    // Land Information
    landLocation: '',
    landSize: '',
    landType: '',
    currentLSNumber: '',
    previousLSNumber: '',
    volumeNumber: '',
    pageNumber: '',
    previousOwner: '',
    purchaseDate: '',

    // Surveyor Information
    surveyorName: '',
    surveyorLicense: '',
    surveyDate: '',
    surveyPlanNumber: '',

    // Documents
    propertyDocuments: null,
    surveyPlan: null,
    idCard: null,

    // Payment
    paymentMethod: '',
    amount: '',
    transactionReference: ''
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handler for file input changes
  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      [name]: file
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data and handle submission
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-600 border-b pb-2">Account Creation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Image Upload */}
              <div className="md:col-span-2 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
                    {formData.profileImage ? (
                      <img
                        src={URL.createObjectURL(formData.profileImage)}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        <span>Add Photo</span>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    name="profileImage"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-600 border-b pb-2">Land Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Land Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Land Location</label>
                <input
                  type="text"
                  name="landLocation"
                  value={formData.landLocation}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Land Size</label>
                <input
                  type="text"
                  name="landSize"
                  value={formData.landSize}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Land Type</label>
                <select
                  name="landType"
                  value={formData.landType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Agricultural">Agricultural</option>
                  <option value="Industrial">Industrial</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Current LS Number</label>
                <input
                  type="text"
                  name="currentLSNumber"
                  value={formData.currentLSNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Add other land information fields as needed */}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-600 border-b pb-2">Document Upload</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Property Documents Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Property Documents</label>
                <input
                  type="file"
                  name="propertyDocuments"
                  onChange={handleFileChange}
                  className="mt-1 block w-full"
                  accept=".pdf,.doc,.docx,image/*"
                />
              </div>

              {/* Survey Plan Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Survey Plan</label>
                <input
                  type="file"
                  name="surveyPlan"
                  onChange={handleFileChange}
                  className="mt-1 block w-full"
                  accept=".pdf,.doc,.docx,image/*"
                />
              </div>

              {/* ID Card Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700">ID Card</label>
                <input
                  type="file"
                  name="idCard"
                  onChange={handleFileChange}
                  className="mt-1 block w-full"
                  accept=".pdf,.doc,.docx,image/*"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-600 border-b pb-2">Payment Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select Payment Method</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Mobile Money">Mobile Money</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  min="0"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Transaction Reference</label>
                <input
                  type="text"
                  name="transactionReference"
                  value={formData.transactionReference}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Land Registry Registration</h2>
          <p className="text-gray-600 mt-2">Complete your registration to start managing your land</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between">
            {['Account Creation', 'Land Details', 'Documents', 'Payment'].map((stepLabel, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step > index + 1 ? 'bg-green-600 text-white' :
                  step === index + 1 ? 'bg-blue-600 text-white' :
                  'bg-gray-200'
                }`}>
                  {index + 1}
                </div>
                <span className="text-sm mt-2">{stepLabel}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {renderStep()}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(prev => prev - 1)}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Previous
              </button>
            )}
            
            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(prev => prev + 1)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors ml-auto"
              >
                Complete Registration
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
