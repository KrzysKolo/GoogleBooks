import React, { useState } from 'react';
import { Container, SearchInput, SearchButton, ImgButton, WrapperSearch, WrapperRadio } from './Search.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addPhrase, addPhraseBook } from '../../features/searchBook/searchBookSlice';
import { getGoogleBooksAPI } from '../../features/googleBooksAPI/googleBooksSlice';
import { getBooksFromAPI } from '../../services/getBooksFromAPI';
import axios from 'axios';
import { apiUrl, keyGoogle } from '../../api/booksApi';
import photo from '../../assets/svgs/search.png';



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
    await axios.get(`${apiUrl}?q=${value}+intitle&key=${keyGoogle}&langRestrict=en&maxResults=20`)
      .then(res => {
      dispatch(getGoogleBooksAPI(res.data.items))
    })
  };

   return (
     <Container>
      <WrapperSearch>
        <SearchInput
          name='Search'
          id='Search'
          value={value}
          placeholder='Search'
          onChange={handleChange}
        />
        <SearchButton onClick={handleClick}>
          <ImgButton src={photo} />
        </SearchButton>
       </WrapperSearch>
       <WrapperRadio>

       </WrapperRadio>
    </Container>
  )
}

export default Search;
