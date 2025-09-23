// import axios from 'axios';

// const verifyToken = async (token) => {
//   try {
//     const response = await axios.post('/api/verify-token', { token });
//     return response.data.isValid;
//   } catch (error) {
//     return false;
//   }
// };

// const isAuthenticated = async () => {
//   const token = localStorage.getItem('token');
//   if (!token) return false;
//   return await verifyToken(token);
// };



// auth.js
import axios from 'axios';

const authService = {
  isAuthenticated: async () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      const response = await axios.post('/api/verify-token', { token });
      return response.data.isValid;
    } catch (error) {
      return false;
    }
  },
  login: async (credentials) => {
    try {
      const response = await axios.post('/api/login', credentials);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  logout: () => {
    localStorage.removeItem('token');
  },
};

export default authService;