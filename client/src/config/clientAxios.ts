import axios from 'axios';

export const httpClient = axios.create({
  baseURL: process.env.REACT_APP_HTTP_SERVER,
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer ',
  },
});
