import axios from 'axios';

class UnitService {
  constructor() {
    this.apiUrl ='http://localhost:5111/api/Unit'
  }

  async getDataList(pageIndex, pageSize, profile) {
    const response = await axios.get(`${this.apiUrl}/${pageIndex}/${pageSize}/${profile}`);
    return response.data;
  }

  async getDataById(code,profile) {
    const response = await axios.get(`${this.apiUrl}/${code}/${profile}`);
    return response.data;
  }

  async getUnits(profile) {
    const response = await axios.get(`${this.apiUrl}/${profile}`);
    return response.data;
  }

  async saveData(item) {
    const response = await axios.post(this.apiUrl, item);
    return response.data;
  }

  async deleteData(code,profile) {
    const response = await axios.delete(`${this.apiUrl}/${code}/${profile}`);
    return response.data;
  }
}

export default UnitService;