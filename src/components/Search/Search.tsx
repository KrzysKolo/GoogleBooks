import React, { useState } from 'react';
import { Container, SearchInput, WrapperSearch, WrapperRadio, InputRadio } from './Search.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addLanguage, addLanguageBook, addPhrase, addPhraseBook, getGoogleBooksAPI, setError, setLoading } from '../../features/googleBooksAPI/googleBooksApiSlice';
import photo from '../../assets/svgs/search.png';
import axios from 'axios';
import { apiUrl, keyGoogle } from '../../api/booksApi';
import { ButtonSquare } from '../Buttons';

const Search: React.FC = () => {

  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const [valueRadio, setValueRadio] = useState<string>("pl");
  const phrase = useSelector(addPhraseBook);
  const language = useSelector(addLanguageBook);

  const handleChange = (e: { target: { value: string }; })=> {
    setValue(e.target.value.toLowerCase());
  };

  const handleChangeRadioButton = (e: { target: { value: string } | any; }) => {
    setValueRadio(e.target.value);
  };

  const handleClick = () => {
    dispatch(setLoading(true));
    dispatch(addPhrase(value));
    dispatch(addLanguage(valueRadio));
    setValue("");
    fetchBooks();
  };

  const fetchBooks = async () => {
   try {
        console.log(`${apiUrl}?q=${phrase}&key=${keyGoogle}&maxResults=20&langRestrict=${language}`)
        const books = await axios.get(`${apiUrl}?q=${value}&key=${keyGoogle}&maxResults=20&langRestrict=${valueRadio}`)
        console.log(books.data.items)
        dispatch(getGoogleBooksAPI(books.data.items))
        dispatch(setLoading(false));
       }
      catch( error) {
        dispatch(setError('Oops! Something went wrong!'));
        dispatch(setLoading(false));
      }
    }

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
       <ButtonSquare photo={photo} onClick={handleClick} alternativeText='search button' />
      </WrapperSearch>
      <WrapperRadio onChange={handleChangeRadioButton}>
        <InputRadio type="radio" value="pl" name="language" onChange={handleChangeRadioButton}/> Polish
        <InputRadio type="radio" value="en" name="language"  onChange={handleChangeRadioButton} /> English
      </WrapperRadio>
    </Container>
  )
}

export default Search;

