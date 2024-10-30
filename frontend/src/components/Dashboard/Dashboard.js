import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // Sample data for charts and statistics
  const registrationData = [
    { month: 'Jan', applications: 65 },
    { month: 'Feb', applications: 78 },
    { month: 'Mar', applications: 90 },
    { month: 'Apr', applications: 81 },
    { month: 'May', applications: 95 },
    { month: 'Jun', applications: 88 }
  ];

  const recentApplications = [
    {
      id: 1,
      property: "Freetown Commercial Plot",
      date: "2024-10-25",
      status: "pending",
      type: "Commercial"
    },
    {
      id: 2,
      property: "Bo Residential Land",
      date: "2024-10-24",
      status: "approved",
      type: "Residential"
    },
    {
      id: 3,
      property: "Makeni Agricultural Land",
      date: "2024-10-23",
      status: "rejected",
      type: "Agricultural"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'text-green-600';
      case 'rejected':
        return 'text-red-600';
      default:
        return 'text-yellow-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          New Application
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Total Applications</p>
                <h3 className="text-2xl font-bold">247</h3>
              </div>
            </div>
            <div className="mt-4 text-sm text-green-600">
              12% increase
            </div>
          </div>
        </div>

        <div className="card">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Pending Reviews</p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
            </div>
            <div className="mt-4 text-sm text-yellow-600">
              3 urgent
            </div>
          </div>
        </div>

        <div className="card">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Completed</p>
                <h3 className="text-2xl font-bold">189</h3>
              </div>
            </div>
            <div className="mt-4 text-sm text-blue-600">
              98% success rate
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Applications Chart */}
        <div className="card lg:col-span-2">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Registration Trends</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={registrationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="applications"
                    stroke="#16a34a"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="card">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Recent Applications</h2>
            <div className="space-y-4">
              {recentApplications.map((application) => (
                <div
                  key={application.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{application.property}</p>
                    <p className="text-sm text-gray-600">{application.type}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${getStatusColor(application.status)}`}>
                      {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                    </p>
                    <p className="text-sm text-gray-600">{application.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { text: "Application #12345 submitted for review", time: "2 hours ago" },
              { text: "Land verification completed for Plot #789", time: "5 hours ago" },
              { text: "New survey scheduled for Western Area", time: "1 day ago" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-1">
                  <p className="text-gray-800">{activity.text}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
