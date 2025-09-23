import axios from 'axios';

 class RoleService {
  constructor() {
    this.apiUrl = 'http://localhost:5111/api/Role';
  }

  // async getRoles() {
  //   const response = await axios.get(this.apiUrl);
  //   return response.data;
  // }

  
  async getRoles(pageIndex, pageSize) {
    const response = await axios.get(`${this.apiUrl}/Paging/${pageIndex}/${pageSize}`);
    return response.data;
  }

  async getRoleById(id) {
    const response = await axios.get(`${this.apiUrl}/${id}`);
    return response.data;
  }

  async saveRole(role) {
    const response = await axios.post(this.apiUrl, role);
    return response.data;
  }

  // async updateRole(id, role) {
  //   const response = await axios.put(`${this.apiUrl}/${id}`, role);
  //   return response.data;
  // }

  async deleteRole(id) {
   const response = await axios.delete(`${this.apiUrl}/${id}`);
   return response.data;
  }
}

export default RoleService;