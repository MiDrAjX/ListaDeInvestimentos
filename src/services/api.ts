import axios from 'axios';

const api = axios.create({
  baseURL: ' https://run.mocky.io',
});

export default api;
