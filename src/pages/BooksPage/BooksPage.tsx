import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Books } from '../../components';
import { Wrapper } from './BooksPage.styles';
import { BookInterface } from '../../models/BookInterface'
import axios from 'axios';
import GoogleBook from '../../api/google/GoogleBookModels';
import { getAllGoogleBooks, getGoogleBooksAPI } from '../../features/googleBooksAPI/googleBooksSlice';

const BooksPage: React.FC = () => {


  const [booksGoogle, setBooksGoogle] = useState([]);

  const tab: BookInterface[] | string | any = []
  const dispatch = useDispatch();

  const booksGoogleApi = useSelector(getAllGoogleBooks)

  useEffect(() => {
     booksGoogleApi.forEach((item: GoogleBook) => {
      if (item.volumeInfo.imageLinks !== undefined) {
      const book = {
        id: item.id,
        autors: item.volumeInfo.authors,
        title: item.volumeInfo.title,
        publishedDate: item.volumeInfo.publishedDate,
        image: item.volumeInfo.imageLinks.thumbnail,
        language: item.volumeInfo.language,
        description: item.searchInfo.textSnippet,
        }
        tab.push(book);
      } else {
        const book = {
          id: item.id,
          autors: item.volumeInfo.authors,
          title: item.volumeInfo.title,
          publishedDate: item.volumeInfo.publishedDate,
          image: 'https://cdn.pixabay.com/photo/2017/01/31/00/09/book-2022464__340.png',
          language: item.volumeInfo.language,
          description: item.searchInfo.textSnippet,
          }
          tab.push(book);
    }

     });

    setBooksGoogle(tab);
  }, [booksGoogleApi]);


  console.log(booksGoogle)
  return (
    <Wrapper>
      <Books books={booksGoogle} />
    </Wrapper>
  )
}

export default BooksPage;




