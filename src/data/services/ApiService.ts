import axios from 'axios';

export const ApiService = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
