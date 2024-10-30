// frontend/src/App.js
import React, { useState } from 'react';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import ExploreServices from './components/Services/ExploreServices';
import LandRegistration from './components/Land/LandRegistration';
import LandVerification from './components/Land/LandVerification';
import AppointmentBooking from './components/Services/AppointmentBooking';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      case 'dashboard':
        return <Dashboard />;
      case 'services':
        return <ExploreServices />;
      case 'land-registration':
        return <LandRegistration />;
      case 'land-verification':
        return <LandVerification />;
      case 'appointment-booking':
        return <AppointmentBooking />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onChangePage={setCurrentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
