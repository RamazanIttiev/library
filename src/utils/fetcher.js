import Axios from 'axios';

const API = Axios.create({
  baseURL: 'http://localhost:3004',
  timeout: 10000,
});

export default API;
