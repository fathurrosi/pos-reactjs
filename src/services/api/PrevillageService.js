import axios from 'axios';

class PrevillageService {
  constructor() {
    this.apiUrl = 'http://localhost:5111/api/Previllage'
    this.profile = localStorage.getItem('profile');
    this.token = localStorage.getItem('token');
  }

  //GET /api/Previllage/{role}/{profile}
  async getDataList(role) {
    // alert(this.profile);
    // alert(this.token);
    //const response = await axios.get(`${this.apiUrl}/${role}/${this.profile}`);
    //GET /api/Previllage/{role}/{profile}
    //return response.data;


    //alert(`${this.apiUrl}/${role}/${this.profile}`);
     const response = await axios.get(`${this.apiUrl}/${role}/${this.profile}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
    return response.data;

  }

  // async getDataById(id) {
  //   const response = await axios.get(`${this.apiUrl}/{id}`);
  //   return response.data;
  // }

  async saveData(items) {
    const response = await axios.post(this.apiUrl, items);
    return response.data;
  }

  // async deleteData(id) {
  //   const response = await axios.delete(`${this.apiUrl}/{id}`);
  //   return response.data;
  // }
}

export default PrevillageService;