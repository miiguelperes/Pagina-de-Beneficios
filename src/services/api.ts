import axios from 'axios';

const api = axios.create({
  baseURL: 'https://n.parceiromartins.com.br/',
});

export default api;
