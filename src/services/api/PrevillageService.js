import axios from 'axios';

class PrevillageService {
  constructor() {
    this.apiUrl = 'http://localhost:5111/api/Previllage'
    this.profile = localStorage.getItem('profile');
    this.token = localStorage.getItem('token');
  }

  async getDataList(role) {
    const response = await axios.get(`${this.apiUrl}/${role}/${this.profile}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
    return response.data;
  }

  async saveData(items) {
    const response = await axios.post(this.apiUrl, items, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
    return response.data;
  }
}

export default PrevillageService;