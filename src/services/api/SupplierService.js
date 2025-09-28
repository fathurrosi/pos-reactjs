import axios from 'axios';

class SupplierService {
  constructor() {
    this.apiUrl ='http://localhost:5111/api/Supplier'
  }

  async getDataList(pageIndex, pageSize) {
    const response = await axios.get(`${this.apiUrl}/Paging/${pageIndex}/${pageSize}`);
    return response.data;
  }

  async getDataById(id) {
    const response = await axios.get(`${this.apiUrl}/${id}`);
    return response.data;
  }

  async saveData(item) {
    const response = await axios.post(this.apiUrl, item);
    return response.data;
  }

  async deleteData(id) {
    const response = await axios.delete(`${this.apiUrl}/${id}`);
    return response.data;
  }
}

export default SupplierService;