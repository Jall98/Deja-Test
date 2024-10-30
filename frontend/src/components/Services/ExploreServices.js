import React, { useState } from 'react';

const ExploreServices = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: "Land Registration",
      category: "registration",
      description: "Register your land and obtain official documentation",
      duration: "2-3 business days",
      price: "$250",
      features: [
        "Official documentation",
        "Digital record keeping",
        "Legal verification"
      ]
    },
    {
      id: 2,
      title: "Property Survey",
      category: "survey",
      description: "Professional land surveying and mapping services",
      duration: "3-5 business days",
      price: "$350",
      features: [
        "Boundary marking",
        "GPS coordination",
        "Digital mapping"
      ]
    },
    {
      id: 3,
      title: "Title Transfer",
      category: "transfer",
      description: "Transfer land ownership securely and legally",
      duration: "4-7 business days",
      price: "$400",
      features: [
        "Legal documentation",
        "Ownership verification",
        "Record update"
      ]
    },
    {
      id: 4,
      title: "Land Verification",
      category: "verification",
      description: "Verify land ownership and documentation",
      duration: "1-2 business days",
      price: "$150",
      features: [
        "Document verification",
        "Ownership check",
        "Status report"
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'registration', label: 'Registration' },
    { id: 'survey', label: 'Survey' },
    { id: 'transfer', label: 'Transfer' },
    { id: 'verification', label: 'Verification' }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="text-gray-600">
          Explore our comprehensive range of land registration and management services
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-600 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-600">
                    <span>Duration: {service.duration}</span>
                  </div>
                  <span className="font-semibold text-green-600">{service.price}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg
                          className="w-4 h-4 mr-2 text-green-600"
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreServices;