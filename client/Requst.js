import axios from 'axios';
const process = import.meta.env

export const makeRequest = axios.create({
  baseURL:process.VITE_REACT_APP_API_URL,
    headers: { Authorization: `bearer ${process.VITE_REACT_APP_API_TOKEN}` }
})