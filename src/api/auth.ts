// src/api/auth.ts
import axios from 'axios';

export const login = async (credentials: { email: string; password: string }) => {
  try {
    const response = await axios.post('http://localhost:3001/auth/login', credentials);
    // Handle successful login response, e.g., store token in localStorage
    localStorage.setItem('accessToken', response.data.token);
    return response.data.token;
  } catch (error) {
    throw new Error('Login failed');
  }
};