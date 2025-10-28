import axios from 'axios';

 class RoleService {
  constructor() {
    this.apiUrl = 'http://localhost:5111/api/Role';    
    this.profile = localStorage.getItem('profile');
    this.token = localStorage.getItem('token');
  }

  // async getRoles() {
  //   const response = await axios.get(this.apiUrl);
  //   return response.data;
  // }

  
  async getRoles(pageIndex, pageSize) {
    const response = await axios.get(`${this.apiUrl}/Paging/${pageIndex}/${pageSize}/${this.profile}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
    return response.data;
  }

  async getRoleById(id) {
    const response = await axios.get(`${this.apiUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
    return response.data;
  }

  async saveRole(role) {
    role.profile = this.profile;
    const response = await axios.post(this.apiUrl, role, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
    return response.data;
  }

  async deleteRole(id) {
   const response = await axios.delete(`${this.apiUrl}/${id}`, {
     headers: {
       Authorization: `Bearer ${this.token}`
     }
   });
   return response.data;
  }
}

export default RoleService;