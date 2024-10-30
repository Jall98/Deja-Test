import React from 'react';
import './Common.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Ministry of Lands, Housing and Country Planning</p>
            <p>Freetown, Sierra Leone</p>
            <p>Tel: +232 XX XXX XXX</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button className="footer-link">Land Verification</button></li>
              <li><button className="footer-link">Book Appointment</button></li>
              <li><button className="footer-link">Download Forms</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <p>Monday - Friday: 8:00 AM - 4:30 PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© 2024 Ministry of Lands, Housing and Country Planning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
