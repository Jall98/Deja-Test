import axios from 'axios';

export const registerUser = async (data) => {
  await axios.post('/api/auth/register', data);
};

export const loginUser = async (data) => {
  await axios.post('/api/auth/login', data);
};

// Add other API services as needed
