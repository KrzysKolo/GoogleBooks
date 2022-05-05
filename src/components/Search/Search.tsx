import React, { useState } from 'react';
import { Container, SearchInput, SearchButton } from './Search.styles';
import { useDispatch } from 'react-redux';
import { addPhrase } from '../../features/searchBook/searchBookSlice';
import axios from 'axios';
import { getFiler, getGoogleBooksAPI } from '../../features/googleBooksAPI/googleBooksSlice';

const Search: React.FC = () => {

  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const handleChange = (e: { target: { value: string }; })=> {
    setValue(e.target.value.toLowerCase());
  };
  const handleClick = () => {
    dispatch(addPhrase(value));
    setValue("");
    fetchBooks();
    dispatch(getFiler("any"));
  };
  const fetchBooks = async () => {
    try {
      const res = await axios('https://www.googleapis.com/books/v1/volumes?q=cat');
      dispatch(getGoogleBooksAPI(res.data.items));
    }
      catch (err) {}
  };





  return (
    <Container>
      <SearchInput
        name='Search'
        id='Search'
        value={value}
        placeholder='Search'
        onChange={handleChange}
      />
      <SearchButton onClick={handleClick}>
          search
      </SearchButton>
    </Container>
  )
}

export default Search;