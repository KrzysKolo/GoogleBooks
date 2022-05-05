import React, { useState } from 'react';
import { Container, SearchInput, SearchButton } from './Search.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addPhrase, addPhraseBook } from '../../features/searchBook/searchBookSlice';
import { getGoogleBooksAPI } from '../../features/googleBooksAPI/googleBooksSlice';
import { getBooksFromAPI } from '../../services/getBooksFromAPI';
import axios from 'axios';
import { apiUrl, keyGoogle } from '../../api/booksApi';



const Search: React.FC = () => {

  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const phraze = useSelector(addPhraseBook)

  const handleChange = (e: { target: { value: string }; })=> {
    setValue(e.target.value.toLowerCase());
  };
  const handleClick = () => {
    dispatch(addPhrase(value));
    setValue("");
    fetchBooks();
  };
  console.log(phraze)
  console.log(keyGoogle)
  const fetchBooks = async () => {
    await axios.get(`${apiUrl}?q=dog&key=${keyGoogle}&maxResults=20`)
      .then(res => {
      dispatch(getGoogleBooksAPI(res.data.items))
    })
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
