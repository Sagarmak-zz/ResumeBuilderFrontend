import axios from 'axios';
import Auth from '../auth/Auth.js';
import config from '@/config';


let axiosInstance = axios.create({
  baseURL: config.get('apiUrl')
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  console.log(config);
  if(Auth.isAuthenticated()) {
    //always for request, use config of axios (read documentation)
    config.headers.common['Authorization'] = "Bearer " + Auth.getToken();
  }
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axiosInstance;
