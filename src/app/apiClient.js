// src/api/apiClient.js
import axios from 'axios';
//https://n702.onrender.com/
const apiClient = axios.create({
  baseURL: 'https://n702.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default apiClient;
