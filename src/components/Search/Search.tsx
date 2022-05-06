import React, { FormEventHandler, useState } from 'react';
import { Container, SearchInput, SearchButton, ImgButton, WrapperSearch, WrapperRadio, InputRadio } from './Search.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addLanguage, addLanguageBook, addPhrase, addPhraseBook } from '../../features/searchBook/searchBookSlice';
import { getBooksFromAPI } from '../../services/getBooksFromAPI';
import axios from 'axios';
import { apiUrl, keyGoogle } from '../../api/booksApi';
import photo from '../../assets/svgs/search.png';
import { getGoogleBooksAPI } from '../../features/googleBooksAPI/googleBooksApiSlice';

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
    dispatch(addPhrase(value));
    dispatch(addLanguage(valueRadio));
    setValue("");
    fetchBooks();
  };
/*   await axios.get(`${apiUrl}?q=${phrase}&key=${keyGoogle}&langRestrict=${language}&maxResults=20`) */
  const fetchBooks = async () => {
    await axios.get(`${apiUrl}?q=${value}&key=${keyGoogle}`)
      .then(res => {
      dispatch(getGoogleBooksAPI(res.data.items))
    })
  };
console.log(`${apiUrl}?q=${value}+intitle&key=${keyGoogle}&maxResults=20`)
console.log(phrase)
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
       <WrapperRadio onChange={handleChangeRadioButton}>
        <InputRadio type="radio" value="pl" name="language" onChange={handleChangeRadioButton}/> Polish
        <InputRadio type="radio" value="en" name="language"  onChange={handleChangeRadioButton} /> English
       </WrapperRadio>
     </Container>
  )
}

export default Search;
