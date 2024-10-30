// frontend/src/components/Home/Home.js
import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Home = ({ onNavigate }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the sign-up popup when the component mounts
    setShowPopup(true);
  }, []);

  const mainFeatures = [
    {
      title: 'Land Registration',
      description: 'Register your land securely through our digital platform',
      icon: '📋',
      action: () => onNavigate('land-registration'),
      benefits: [
        'Official documentation',
        'Digital record keeping',
        'Secure verification',
        '24/7 access',
      ],
    },
    {
      title: 'Land Transfer',
      description: 'Transfer land ownership seamlessly and securely',
      icon: '🔄',
      action: () => onNavigate('land-transfer'),
      benefits: [
        'Legal documentation',
        'Ownership verification',
        'Transfer processing',
        'Digital records',
      ],
    },
    {
      title: 'Land Verification',
      description: 'Verify land ownership and documentation instantly',
      icon: '✅',
      action: () => onNavigate('land-verification'),
      benefits: [
        'Instant verification',
        'OARG records check',
        'Survey validation',
        'Legal confirmation',
      ],
    },
  ];

  const quickActions = [
    {
      label: 'Verify Property',
      icon: '🔍',
      action: () => onNavigate('land-verification'),
      bgColor: 'bg-blue-600',
    },
    {
      label: 'Book Appointment',
      icon: '📅',
      action: () => onNavigate('appointment-booking'),
      bgColor: 'bg-blue-600',
    },
    {
      label: 'Track Application',
      icon: '📋',
      action: () => onNavigate('track-application'),
      bgColor: 'bg-blue-600',
    },
    {
      label: 'Download Forms',
      icon: '📄',
      action: () => onNavigate('download-forms'),
      bgColor: 'bg-blue-600',
    },
    {
      label: 'My Properties',
      icon: '🏠',
      action: () => onNavigate('my-properties'),
      bgColor: 'bg-blue-600',
    },
    {
      label: 'Search Properties',
      icon: '🔎',
      action: () => onNavigate('search-properties'),
      bgColor: 'bg-blue-600',
    },
  ];

  const propertyTrends = [
    { year: '2020', value: 100, growth: '+5%' },
    { year: '2021', value: 125, growth: '+25%' },
    { year: '2022', value: 158, growth: '+26%' },
    { year: '2023', value: 180, growth: '+14%' },
    { year: '2024', value: 210, growth: '+17%' },
  ];

  const regions = [
    {
      name: 'Western Area',
      image: '/api/placeholder/400/300',
      properties: '1,200+',
      trend: '↑ 15%',
      description: 'Urban development and commercial properties',
    },
    {
      name: 'Northern Province',
      image: '/api/placeholder/400/300',
      properties: '850+',
      trend: '↑ 12%',
      description: 'Agricultural lands and mining areas',
    },
    {
      name: 'Southern Province',
      image: '/api/placeholder/400/300',
      properties: '950+',
      trend: '↑ 18%',
      description: 'Coastal properties and tourism developments',
    },
    {
      name: 'Eastern Province',
      image: '/api/placeholder/400/300',
      properties: '780+',
      trend: '↑ 16%',
      description: 'Mining districts and forest reserves',
    },
  ];

  const news = [
    {
      title: 'Government Launches Digital Land Registry',
      date: 'October 2024',
      category: 'Policy Update',
      description: 'Modernizing land management across Sierra Leone',
    },
    {
      title: 'Foreign Investment in Real Estate Grows',
      date: 'October 2024',
      category: 'Investment',
      description: 'International investors showing increased interest',
    },
    {
      title: 'New Protected Forest Areas Designated',
      date: 'October 2024',
      category: 'Conservation',
      description: 'Sustainable land management initiatives',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 opacity-80"></div>
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(/api/placeholder/1920/600)',
            }}
          ></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Sierra Leone</span>{' '}
              <span className="text-white">Digital</span>{' '}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Land Registry</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-lg">
              Streamlining land registration and management across Sierra Leone.
              Secure, transparent, and efficient property services for all citizens.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  onClick={action.action}
                  className={`${action.bgColor} text-white px-4 py-3 rounded-xl hover:opacity-90 transition-opacity duration-300 transform hover:scale-105 flex flex-col items-center shadow-lg hover:shadow-xl`}
                >
                  <span className="text-3xl mb-2">{action.icon}</span>
                  <span className="text-sm font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600">
            Comprehensive land management solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/90 backdrop-blur rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-blue-700">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={feature.action}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sign-Up Popup */}
      {showPopup && (
        <div className="fixed bottom-24 left-0 right-0 flex justify-center z-50">
          <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-0.5 rounded-full shadow-lg max-w-3xl w-full mx-4">
            <div className="bg-white rounded-full px-6 py-4 flex items-center">
              <p className="flex-grow text-gray-800">
                <strong className="text-blue-700">Stay Updated!</strong> Subscribe for the latest updates.
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent mr-4 w-1/2"
              />
              <button
                onClick={() => setShowPopup(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
              <button
                className="text-gray-500 ml-4 hover:text-gray-700"
                onClick={() => setShowPopup(false)}
                aria-label="Close Popup"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Regional Overview */}
      <div className="bg-gradient-to-br from-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Explore Regions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region) => (
              <div
                key={region.name}
                className="bg-white/90 backdrop-blur rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${region.image})` }}
                  alt={`${region.name} Image`}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">{region.name}</h3>
                  <p className="text-gray-600 mb-3">{region.description}</p>
                  <div className="flex justify-between text-gray-600">
                    <span>Properties: {region.properties}</span>
                    <span className="text-blue-600 font-semibold">{region.trend}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Trends & News */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Property Value Trends */}
          <div className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 text-blue-700">Property Value Trends</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={propertyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="url(#colorGradient)" />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1D4ED8" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* News Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-700">Latest Updates</h3>
            <div className="space-y-4">
              {news.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/90 backdrop-blur rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-sm text-blue-600 font-medium">
                    {item.category}
                  </span>
                  <h4 className="font-bold mt-1 text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                  <p className="text-sm text-gray-500 mt-2">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Investment Highlights */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Invest in Sierra Leone</h2>
            <p className="mt-4 text-blue-100">
              A peaceful nation with growing opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🕊️</div>
              <h3 className="text-xl font-bold mb-2">Peaceful Nation</h3>
              <p className="text-blue-100">
                Ranked among the most peaceful nations in West Africa
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Growing Economy</h3>
              <p className="text-blue-100">
                Steady economic growth with increasing foreign investment
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-bold mb-2">Rich Resources</h3>
              <p className="text-blue-100">
                Abundant natural resources and fertile agricultural land
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
