import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Books } from '../../components';
import { Wrapper } from './BooksPage.styles';
import { BookInterface } from '../../models/BookInterface'

import GoogleBook from '../../api/google/GoogleBookModels';
import { getAllGoogleBooksApi } from '../../features/googleBooksAPI/googleBooksApiSlice';
import { getAllGoogleBooks, getGoogleBooks } from '../../features/googleBooks/googleBooks';

const BooksPage: React.FC = () => {


  const tab: BookInterface[] = []
  const booksGoogleApi = useSelector(getAllGoogleBooksApi)
  const booksGoogle = useSelector(getAllGoogleBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    booksGoogleApi.forEach((item: GoogleBook) => {
      const bookWithoutPhoto = {
        id: item.id,
        authors: item.volumeInfo.authors,
        title: item.volumeInfo.title,
        publishedDate: item.volumeInfo.publishedDate,
        image: 'https://cdn.pixabay.com/photo/2017/01/31/00/09/book-2022464__340.png',
        language: item.volumeInfo.language,
        link: item.volumeInfo.previewLink,
        description: item.volumeInfo.description,
        favoriteBook: false
      }
      const bookWithoutPhotoAndDescription = {
        id: item.id,
        authors: item.volumeInfo.authors,
        title: item.volumeInfo.title,
        publishedDate: item.volumeInfo.publishedDate,
        image: 'https://cdn.pixabay.com/photo/2017/01/31/00/09/book-2022464__340.png',
        language: item.volumeInfo.language,
        link: item.volumeInfo.previewLink,
        description: "Brak danych",
        favoriteBook: false
      }
      const bookDescription = {
        id: item.id,
        authors: item.volumeInfo.authors,
        title: item.volumeInfo.title,
        publishedDate: item.volumeInfo.publishedDate,
        image: item.volumeInfo.imageLinks.thumbnail,
        language: item.volumeInfo.language,
        link: item.volumeInfo.previewLink,
        description: "Brak danych",
        favoriteBook: false
      }
      const book = {
        id: item.id,
        authors: item.volumeInfo.authors,
        title: item.volumeInfo.title,
        publishedDate: item.volumeInfo.publishedDate,
        image: item.volumeInfo.imageLinks.thumbnail,
        language: item.volumeInfo.language,
        link: item.volumeInfo.previewLink,
        description: item.volumeInfo.description,
        favoriteBook: false
      }

      if (item.searchInfo.textSnippet === undefined) {
        tab.push(bookDescription);
      } else if (item.searchInfo.textSnippet === undefined || item.volumeInfo.imageLinks === undefined) {
        tab.push(bookWithoutPhotoAndDescription);
      } else if (item.volumeInfo.imageLinks === undefined) {
        tab.push(bookWithoutPhoto);
      } else {
        tab.push(book);
      }
     });
    /*    setBooksGoogle(tab); */
    dispatch(getGoogleBooks(tab));

  }, [booksGoogleApi]);

  console.log(booksGoogle)
  return (
    <Wrapper>
      <Books books={booksGoogle} />
    </Wrapper>
  )
}

export default BooksPage;




