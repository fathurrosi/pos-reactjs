import axios from 'axios';

class AuthService {

  constructor() {
    this.apiUrl = 'http://localhost:5111/api/Auth';
  }

  async isAuthenticated() {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      const response = await axios.post(`${this.apiUrl}/verify-token`, { token });
      return response.data.isValid;
    } catch (error) {
      return false;
    }
  }

  async login(credentials) {
    try {
      const response = await axios.post(`${this.apiUrl}/Login`, credentials);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  logout() {
    localStorage.removeItem('token');
  }
}

export default AuthService;