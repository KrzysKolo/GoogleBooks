import axios from 'axios';
import { apiUrl } from './../api/booksApi'
import { useSelector } from 'react-redux';

const useBooksFromAPI = async () => {
    const response = await axios.get(`${apiUrl}?q=`);
  return response;
};

export default useBooksFromAPI;