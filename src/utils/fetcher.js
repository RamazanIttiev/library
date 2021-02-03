import Axios from 'axios';

const API = Axios.create({
  baseURL: 'https://my-json-server.typicode.com/RamazanIttiev/RamazanIttiev-libraryDB',
  timeout: 10000,
});

export default API;
