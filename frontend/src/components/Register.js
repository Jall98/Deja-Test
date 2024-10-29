// frontend/src/components/Register.js
import React, { useState } from 'react';
import { registerUser } from '../services/api';
import './App.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ email, password });
      alert('Registration successful');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="auth-form">
        <h2>Create a New Account</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <a href="/" className="footer-link">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
