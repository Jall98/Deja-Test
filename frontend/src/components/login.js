// frontend/src/components/Login.js
import React, { useState } from 'react';
import { loginUser } from '../services/api';
import './App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ email, password });
      alert('Login successful');
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="auth-form">
        <h2>Login to Your Account</h2>
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
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account? <a href="/register" className="footer-link">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
