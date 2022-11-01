import axios, { AxiosInstance } from 'axios';

export const mockarooHTTPClient: AxiosInstance = axios.create({
  url: 'https://my.api.mockaroo.com/',
  headers: {
    'X-API-Key': 'b708f770',
  },
});
