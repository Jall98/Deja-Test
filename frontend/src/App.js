// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import './styles/app.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/services" component={ExploreServices} />
            <Route path="/land-registration" component={LandRegistration} />
            <Route path="/land-verification" component={LandVerification} />
            <Route path="/appointment-booking" component={AppointmentBooking} />
            {/* Add more routes as needed */}
            {/* Optional: Add a 404 Not Found route */}
            <Route path="*" component={() => <div className="p-4 text-center">404 Not Found</div>} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
