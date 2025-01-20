// Axios instance
import { API_URL } from '@/environment-config';
import { signOut } from 'next-auth/react'
import axios, { AxiosError, AxiosResponse } from 'axios'

// Create axios instance with base configuration
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// response interceptors
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data) {
      return response.data
    }
    return response;
  },
  (error: AxiosError) => {
    // Handle errors
    if (error) {
      console.error('Response Error:', error.response?.data, error.response?.status)
    }

    // Handle 401 Unauthorized errors
    if (error.status === 401) {
      signOut()
    }

    else if (error.request) {
      // Request made but no response received
      console.error('Request error:', error.request);

      if (error.code === 'ECONNREFUSED') {
        console.error(
          'Connection refused. Please check if the server is running and accessible.'
        );
      }
    } else {
      // Error in request setup
      console.error('Error:', error.message);
    }

    return Promise.reject({
      ...error,
      customMessage: 'Something went wrong. Please try again later.',
    });
  }
)
