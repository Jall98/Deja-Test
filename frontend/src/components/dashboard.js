// frontend/src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="dashboard">
        <h2 className="welcome-header">Welcome to Sierra Leone Land Registration</h2>
        <p className="description">
          This platform provides a secure and transparent system for land registration in Sierra Leone.
          Manage your properties, view registration details, and complete transactions efficiently.
        </p>
        <button className="explore-button">Explore Services</button>
      </div>
    </div>
  );
};

export default Dashboard;
