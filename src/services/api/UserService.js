import axios from 'axios';

class UserService {
  constructor() {
    this.apiUrl = 'http://localhost:5111/api/User';
  }

  async getUsers() {
    const response = await axios.get(this.apiUrl);
    return response.data;
  }


  async getUsers(pageIndex, pageSize) {
    const response = await axios.get(`${this.apiUrl}/Paging/${pageIndex}/${pageSize}`);
    return response.data;
  }

  async getUserById(id) {
    const response = await axios.get(`${this.apiUrl}/${id}`);
    return response.data;
  }

  async saveUser(User) {
    const response = await axios.post(this.apiUrl, User);
    return response.data;
  }

  // async updateUser(id, User) {
  //   const response = await axios.put(`${this.apiUrl}/${id}`, User);
  //   return response.data;
  // }

  async deleteUser(id) {
    const response = await axios.delete(`${this.apiUrl}/${id}`);
    return response.data;
  }
}

export default UserService;