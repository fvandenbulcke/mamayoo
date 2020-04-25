import axios from 'axios';

const httpClient = axios.create({
  baseURL: `http://${window.mamayooConfig.MAMAYOO_BACK_URL}`,
  'Content-Type': 'application/json',
});

export default {
  getTableList() {
    return httpClient.get('/games')
      .then((response) => response && response.data);
  },

  createTable() {
    return httpClient.post('/games')
      .then((response) => response && response.data && response.data.id);
  },
};
