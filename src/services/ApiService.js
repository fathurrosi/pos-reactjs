import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5111/api/Auth',
    });

    this.setupInterceptors();
  }

  setupInterceptors() {
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.api.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response.status === 401) {
          const refreshToken = localStorage.getItem('refreshToken');
          try {            
            const response = await axios.post('/Refresh', {
              refreshToken,
            });
            const newAccessToken = response.data.accessToken;
            localStorage.setItem('accessToken', newAccessToken);
            error.config.headers.Authorization = `Bearer ${newAccessToken}`;
            return this.api.request(error.config);
          } catch (refreshError) {
            // Handle refresh token error (e.g., logout user)
          }
        }
        return Promise.reject(error);
      }
    );
  }

  get(url) {
    return this.api.get(url);
  }

  post(url, data) {
    return this.api.post(url, data);
  }

  // Add more methods as needed (e.g., put, delete, etc.)
}

export default ApiService;


// import ApiService from './ApiService';

// const apiService = new ApiService();

// apiService.get('/protected-resource')
//   .then((response) => {
//     // Handle response
//   })
//   .catch((error) => {
//     // Handle error
//   });
