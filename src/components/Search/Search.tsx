import React, { useState } from 'react';
import { Container, SearchInput, SearchButton } from './Search.styles';
import { useDispatch } from 'react-redux';
import { addPhrase } from '../../features/searchBook/searchBookSlice';
import { getGoogleBooksAPI } from '../../features/googleBooksAPI/googleBooksSlice';
import { getBooksFromAPI } from '../../services/getBooksFromAPI';



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
  };
  const fetchBooks = () => {
    getBooksFromAPI()
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
