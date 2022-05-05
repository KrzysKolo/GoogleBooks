import axios from 'axios';
import { apiUrl } from './../api/booksApi'

export const getBooksFromAPI = async ()  => {
  const response = await axios.get(`${apiUrl}?q=cat`);
  return response;
};

