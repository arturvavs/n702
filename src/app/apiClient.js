// src/api/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://n702.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
